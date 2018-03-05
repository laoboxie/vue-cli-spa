export default  [
	{
		path: '/',
		name: 'index',
		redirect: '/demo',
	},
	{
		path: '/demo',
		name: 'demo',
		component: resolve => require(['@/pages/demo/demo.vue'],resolve),
		meta:{
			keepAlive: false,
			requiresAuth: true
		}
	},
	{
		path: '/list',
		name: 'list',
		component: resolve => require(['@/components/list.vue'],resolve),
		meta:{
			keepAlive: true,
			requiresAuth: true
		}
	},
	{
		path: '/hello',
		name: 'hello',
		component: resolve => require(['@/components/HelloWorld.vue'],resolve),
		meta:{
			keepAlive: false,
			requiresAuth: true
		}
	},

];