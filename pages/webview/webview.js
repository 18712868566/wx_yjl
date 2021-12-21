const app = getApp();

//Page Object
Page({
    data: {
        path: '',
    },
    //options(Object)
    onLoad: function(options) {
        console.log(options);
        // 给webview 赋值
        let targetUrl = options.url;
        this.setData({
            path: targetUrl
        })
    },
    onReady: function() {
        
    },
    onShow: function() {
        
    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap:function(item) {

    }
});
  