
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            scrollToSavedPosition(type){

                this.$nextTick(()=>{
                    let savedPosition = this.$route.query.savedPosition;
                    if (savedPosition&&savedPosition.y>=0) {
                        window.scrollTo(0, savedPosition.y);
                        console.log(type,this.$route.query.savedPosition);
                        //this.$route.query.savedPosition={};
                    }else{
                        window.scrollTo(0, 0);
                    }
                    
                })
            }
        },

        created(){

        },
        mounted(){

        },

    }
</script>