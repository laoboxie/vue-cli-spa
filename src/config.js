//全局的配置，关键的设置都写在这里
var dev = (function f() {
    if(typeof process.env.NODE_ENV != "undefined" && process.env.NODE_ENV == 'production') {
        return false
    }
    return true
})()


const api_baseURL = {
	production: "https://cnodejs.org/api/v1",
	test: "https://cnodejs.org/api/v1",
};
const domain_root = "http://www.lingyou.co/";

const config = {
	api_baseURL: api_baseURL.test,
	domain_root: domain_root,
	APPID: '12323131',
}

export default config;

