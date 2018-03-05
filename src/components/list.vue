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
            created:false,
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
    methods:{
        getData(fn){
            let promise = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    this.nums = 1000;
                    resolve();
                    fn && fn();
                },1000)
            })
            return promise;
        }
    },
    created(){
        
    },
    mounted(){

    },
    activated(){
        console.log('activated');
        if (this.$route.query.refresh==true) {
            window.scrollTo(0,0);
            this.nums=0;
            this.getData();
        }
    },
    beforeRouteEnter (to, from, next) {
        if(from.path.includes('demo')){
            to.query.refresh=true;
            next();
        }else{
            to.query.refresh=false;
            next();
        }
    },
}
</script>


<style scoped>
    div{
        text-align: center;
    }
</style>
