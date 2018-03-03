<template>
<div>
<div>
    <div v-for="(num,index) in nums" @click="$router.push('/hello')">
        {{num}}
    </div>
</div>

</div>
</template>

<script>
import keepAliveMixin from '../mixins/keepAliveMixin.vue'
import * as md5 from '../assets/js/md5.js'
export default {
    name: '',
    mixins:[keepAliveMixin],
    props:{
        age: {
            type: Number,
            default: 0,
            required: false,
            validator: function (value) {
                return value >= 0
            }
        }
    },
    data () {
        return {
            nums: 0,
        }
    },
    computed: {
        dnums: function () {
            return this.nums * 2
        },
    },
    watch:{
        nums: {
            handler: function (val, oldVal) {

            },
            deep: true
        },
    },
    created(){
        setTimeout(()=>{
            this.nums = 1000;
            this.scrollToSavedPosition();
        },1000)
    },
    mounted(){

    },

    // beforeRouteEnter (to, from, next) {
    //     if(from.path.includes('demo')){
    //         to.query.savedPosition={};
    //         next();
    //     }else{
    //         next();
    //     }
    // },
    // beforeRouteLeave (to, from, next) {
    //     if(to.meta.keepAlive===true&&from.meta.keepAlive===true){
    //         this.$destroy();
    //         next();
    //     }else{
    //         next();
    //     }
    // },
}
</script>


<style scoped>
    div{
        text-align: center;
    }
</style>
