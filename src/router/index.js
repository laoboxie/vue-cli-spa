import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)


//返回上一页，滚动到原位置
const scrollBehavior = (to, from, savedPosition) => {
	// console.log('to',to);
	// console.log('from',from);
	// console.log('savedPosition', savedPosition);

	if (savedPosition) {
		// savedPosition is only available for popstate navigations.
		
		if (to.matched.some(record => record.meta.keepAlive)) {
			console.log('scrollBehavior',savedPosition);
			to.query.savedPosition = savedPosition; //异步组件需要渲染完成再滚动，这里记录下原位置
		}
		
		return savedPosition
	} else {
		const position = {}
		// new navigation.
		// scroll to anchor by returning the selector
		if (to.hash) {
			position.selector = to.hash
		}
		// check if any matched route config has meta that requires scrolling to top
		if (to.matched.some(m => m.meta.scrollToTop)) {
			// cords will be used if no selector is provided,
			// or if the selector didn't match any element.
			position.x = 0
			position.y = 0
		}
		// if the returned position is falsy or an empty object,
		// will retain current scroll position.
		return position
	}
}

const router = new Router({
	routes,
	scrollBehavior,
})

//登陆鉴权
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		let user = 0;
		if (!user) {
			//console.log('please login');
			next();
			// next({
			// 	path: '/login',
			// 	query: { redirect: to.fullPath }
			// })
		} else {
			next()
		}
	} else {
		next() // 确保一定要调用 next()
	}
})

export default router;