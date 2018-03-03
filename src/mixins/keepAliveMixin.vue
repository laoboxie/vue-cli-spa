<template>
    <div></div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods:{
            scrollToSavedPosition(){
                this.$nextTick(()=>{
                    let savedPosition = this.$route.query.savedPosition;
                    if (savedPosition&&savedPosition.y>=0&&savedPosition.x>=0) {
                        window.scrollTo(savedPosition.x, savedPosition.y);
                        this.$route.query.savedPosition={};
                        console.log('created nextTick savedPosition',this.$route.query.savedPosition);
                    }
                    
                })
            }
        },
        activated(){
            this.$nextTick(()=>{
                let savedPosition = this.$route.query.savedPosition;
                if (savedPosition&&savedPosition.y>=0&&savedPosition.x>=0) {
                    window.scrollTo(savedPosition.x, savedPosition.y);

                    console.log('activated nextTick savedPosition',this.$route.query.savedPosition);
                }
                
            })
        },
        created(){

        },
        mounted(){

        },

    }
</script>