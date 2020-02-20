export default  {
    methods: {
        checkBrowser () {
            if (process.browser) {
                let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
                let isInterEx = /*@cc_on!@*/false || !!document.documentMode
                let iPhoneiPad = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)
                if (isSafari) {
                 return true
                } else if (iPhoneiPad) {
                    return true
                } else if (isInterEx) {
                    return true
                } else {
                    return false
                }
            } else {
                return
            }
        },
        CheckMobile () {
            if (process.browser) {
                if (window.innerWidth <= 800) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        thumbnailImage (url) {
            if (this.checkBrowser()) {
                return url + '?w=650'
            } else {
                return url + '?w=650&fm=webp'
            }
        },
        setAutoWidth (url) {
            if (process.browser) {
                if (this.checkBrowser()) {
                    return url + '?w=' + window.innerWidth
                } else {
                    return url + '?w=' + window.innerWidth + '&fm=webp'
                }
            } else {
                return url
            }
        },
        setFixedWidth (url, width) {
            if (this.checkBrowser()) {
                return url + '?w=' + width
            } else {
                return url + '?w=' + width + '&fm=webp'
            }
        },
        setWidthDivision (url, dividend) {
            if (process.browser) {
                let width = window.innerWidth / dividend
            if (this.checkBrowser()) {
                return url + '?w=' + width
            } else {
                return url + '?w=' + width + '&fm=webp'
            }
            } else {
                return url
            }
        }
    }
}
  