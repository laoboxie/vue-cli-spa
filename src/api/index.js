import Vue from 'vue'
import AXIOS from 'axios'
import qs from 'qs'
import config from '../config.js'

const axios = AXIOS.create({
    baseURL: config.api_baseURL,
    timeout: 1000,
})
//请求时的拦截器
axios.interceptors.request.use(config =>{
    // 发送请求之前做一些处理,loading...
    return config
},error =>{
    // 当请求异常时做一些处理
    return Promise.reject(error)
})

// 请求后的拦截器
axios.interceptors.response.use(response =>{
    console.log('response',response);

    return response
},error =>{
    // 当响应异常时做一些处理
    // 这里我们把错误信息扶正, 后面就不需要写 catch 了
    //console.warn('error',error);
    console.log('error.response',error.response);
    let failStatus = [400];
    if (failStatus.indexOf(error.response.status)<0) {
        console.log('网络异常，请重试！');
    }else{
        console.log(error.response.data.error_msg);
    }

    return Promise.reject(error.response)
    //return Promise.resolve(error.response)
})

function checkHttpStatus(res) {
    // 如果http状态码正常，则直接返回数据
    // if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    //     return res;
    // }else {
    //     res.httpStatus = false;
    //     res.tip = '网络异常，请重试！';
    //     return res;
    // }
    let successStatus = [200,304,400];
    if (successStatus.indexOf(res.status)<0) {
        res.httpStatus = false;
        res.tip = '网络异常，请重试！';
    }
    return res;
}

function checkSuccessState(res) {
    if (res.httpStatus===false) {
        //在这里处理请求失败的操作，如网络异常提示
        console.log(res.tip)
        return {
            data:res.data,
            success:false,
            message:res.tip
        }
    }else{
        if (res.data && !res.data.success) {
            //在这里处理接口返回的错误信息提示
            console.log(res.data.error_msg)
        }
    }

    return res.data;
}

const httpServer = (opts, data) =>{
    // 公共参数
    let Public = { };

    // http默认配置
    let httpDefaultOpts = {
        // method: opts.method,
        // url: opts.url,
        params: Object.assign(Public, data),
        // qs数据处理, 主要是配合下面headers里的Content-Type, 转成表单提交, 让后端可以直接用 $_POST 拿到数据
        data: qs.stringify(Object.assign(Public, data)),
    }
    httpDefaultOpts = Object.assign(httpDefaultOpts,opts)

    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }

    return  axios(httpDefaultOpts).catch((res) =>{
                console.warn(res);
            })

            // .then((res) =>{
            //     return Promise.resolve(checkHttpStatus(res));
            // })
            //.then((res) =>{
            //     return Promise.resolve(checkSuccessState(res));  
            // }).catch((res) =>{
            //     console.warn(res);
            // })

}

Vue.prototype.$http = httpServer;