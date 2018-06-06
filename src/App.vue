<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive===true"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="$route.meta.keepAlive!==true"></router-view>
        </transition>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import keepAliveMixin from './mixins/keepAliveMixin.vue'
import childViewMixin from './mixins/childView.vue'
export default {
  name: 'App',
  mixins:[keepAliveMixin,childViewMixin],
  created(){
    console.log('app $route',this.$route)
  }
}
</script>

<style>
@import url("./assets/css/reset.css");
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

</style>
