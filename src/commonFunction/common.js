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
    },

    // 分享
    doShare(code) {
        switch (code) {
            case 'fb':
                fbq('track', 'AddToWishlist');
                gtag('event', '完成Facebook分享');
                window.open('https://www.facebook.com/sharer.php?display=popup&u=' + SHARE_URL, 'sharer', 'toolbar=0,status=0,resizable=1,width=626,height=436');
                break;

            case 'twi':
                fbq('track', 'AddToWishlist');
                gtag('event', '完成Twitter分享');
                window.open(encodeURI('https://twitter.com/intent/tweet?url=' + SHARE_URL + '&text=' + SHARE_CONTEXT));
                break;

            case 'line':
                fbq('track', 'AddToWishlist');
                gtag('event', '完成LINE分享');
                window.open(encodeURI('https://lineit.line.me/share/ui?url=' + SHARE_URL + '&text=' + SHARE_CONTEXT));
                break;

        }
    },

    // 预约
    goStore(code) {
        switch (code) {
            case 'AS':
                gtag('event', '跳转苹果预约');
                window.open(`https://itunes.apple.com/app/${APP_IOS_PKG}?pid=prepage&c=AS_prepage_pre&af_click_lookback=1d`, '_blank');
                break;
            case 'GP':
                gtag('event', '跳转谷歌预约');
                window.open(`https://play.google.com/store/apps/details/${APP_ANDROID_PKG}?pid=prepage&c=GP_prepage_pre&af_click_lookback=1d`, '_blank');
                break;
        }
    },
    //
    goShare(code) {
        switch (code) {
            case 'fb':
                gtag('event', '跳转Facebook页');
                break;
            case 'twi':
                gtag('event', '跳转Twitter页');
                window.open(`https://twitter.com/${APP_TWI_NAME}`, '_blank');
                break;
            case 'cafe':
                gtag('event', '跳转Cafe页');
                break;
        }
    }
}