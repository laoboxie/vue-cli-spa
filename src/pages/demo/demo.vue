<template>
<div>
    <p v-for="(num,index) in nums" @click="$router.push('/list')">
        {{num}}
    </p>
</div>
</template>

<script>
import keepAliveMixin from '../../mixins/keepAliveMixin.vue'
import * as md5 from '../../assets/js/md5.js'
import guid from '../../assets/js/guid.js'
import storage from '../../assets/js/storage.js'
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
            this.nums = 2000;
            this.scrollToSavedPosition();
        },1000);

        storage.session.set('sessionkey',[1,{'a':undefined,'c':'c'},{'b':NaN}]);
        console.log('storage',storage.session.get('sessionkey'));
        
        
    },
    mounted(){

    },
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
        background-color: #ccc;
    }
</style>
