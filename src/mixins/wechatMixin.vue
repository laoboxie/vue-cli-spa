import url from '../assets/js/url.js'
import config from '../config.js'
export default {
	data(){
		return{
            openId:''
		}
	},
    methods:{
        getWxAuth(){
            if(!this.openId){
                let currurl = window.location.href.split('#')[0];
                //window.sessionStorage.setItem('currentURL',window.location.href);
                let code = url.getQueryParameter('code');
                if(!code){
                    location.href = `https://open.weixin.qq.com/connect/oauth2/authorize`+
                    `?appid=${config.APPID}&redirect_uri=${currurl}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
                }else{
                    //这里可以通过code去注册或获取用户信息
                }
            } 
        },
        getWxConfig(){
            //await 通过接口拿到wx的配置信息
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.result.appId, // 必填，公众号的唯一标识
                timestamp: res.data.result.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.result.nonceStr, // 必填，生成签名的随机串
                signature: res.data.result.signature, // 必填，签名，见附录1
                jsApiList: ['chooseWXPay',
                'onMenuShareTimeline', 
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareQZone']
            });
        },
        wxShare(){//微信分享
            let obj = {
                title: "",         // 分享标题
                desc: "",      // 分享描述
                link: "",           // 分享链接
                imgUrl: "",      // 分享图标
            }
            wx.ready(function () { 
                wx.onMenuShareTimeline(obj);        //分享到朋友圈
                wx.onMenuShareAppMessage(obj);      //分享给朋友
                wx.onMenuShareQQ(obj);              //分享到QQ
                wx.onMenuShareQZone(obj);           //分享到QQ空间
            });
        },

    },
    created(){
    },
    mounted(){
    }
}