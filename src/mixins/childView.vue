<script>
    export default {
        data () {
            return {
                transitionName:'',
            }
        },
        watch: {
            '$route':function(to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                console.log('$route',to,from);
            }
        },
        methods:{
        },
        created(){
        },
        mounted(){
        },

    }
</script>

<style type="text/css">
    .child-view {  
      position: absolute;  
      left: 0;  
      top: 30%;  
      width: 100%;  
      height: 100%;  
      transition: all .5s cubic-bezier(.55,0,.1,1);  
      background-color: #fff;
    }  
    .slide-left-enter, .slide-right-leave-active {  
      opacity: 0;  
      transform: translate(100%, 0);  
    }  
    .slide-left-leave-active, .slide-right-enter {  
      opacity: 0;  
      transform: translate(-100%, 0);  
    }  
</style>