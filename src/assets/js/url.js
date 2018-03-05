
function getQueryParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


function getQueryParameters() {
    var url = location.search;
    var map = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            map[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return map;
}

function parseURL(url=window.location) {   
    var a =  document.createElement('a');   
    a.href = url;   
    return {   
        source: url,   
        protocol: a.protocol.replace(':',''),   
        host: a.hostname,   
        port: a.port,   
        query: a.search,   
        params: (function(){   
            var ret = {},   
            seg = a.search.replace(/^\?/,'').split('&'),   
            len = seg.length, i = 0, s;   
            for (;i<len;i++) {   
                if (!seg[i]) { continue; }   
                s = seg[i].split('=');   
                ret[s[0]] = s[1];   
            }   
            return ret;   
        })(),   
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],   
        hash: a.hash.replace('#',''),   
        path: a.pathname.replace(/^([^\/])/,'/$1'),   
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],   
        segments: a.pathname.replace(/^\//,'').split('/')   
    };   
}

export default {
    getParameter: getQueryParameter,
    getParameters: getQueryParameters,
    parseURL: parseURL
}