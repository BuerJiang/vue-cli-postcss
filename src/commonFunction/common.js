export default {
    // 实时变化Signature
    makeSignature(params, reqTime) {
        let paramsKeys = Object.keys(params).sort();
        let paramsStr = '';
        for (let paramsKey of paramsKeys) {
            paramsStr += `${paramsKey}=${params[paramsKey]}&`;
        }
        return $.md5(paramsStr + reqTime);
    },

    // 获取网站来源
    getUrlParam(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    // gTag
    gtag() {
        dataLayer.push(arguments);
    }

}