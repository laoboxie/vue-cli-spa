//全局的配置，关键的设置都写在这里
var dev = (function f() {
    if(typeof process.env.NODE_ENV != "undefined" && process.env.NODE_ENV == 'production') {
        return false
    }
    return true
})()


const api_root = {
	production: "http://www.project.com/api",
	test: "http://test.project.com/api",
};
const domain_root = "http://www.lingyou.co/";

const config = {
	APIROOT: api_root.test,
	DOMAINROOT: domain_root,
	APPID: '12323131',
}

export default config;

