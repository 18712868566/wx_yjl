let app = getApp();

//Page Object
Page({
    data: {
        id: '',
        lottImg: '/assets/integral/lottdetail.jpg',
        userNumber: '123323'
    },
    //options(Object)
    onLoad: function (options) {
        console.log(options);
        // 给webview 赋值
        let targetUrl = options.url;
        this.setData({
            id: targetUrl
        });

        wx.setNavigationBarTitle({
            title: '填写地址'
        })
    },
    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    },
    // 确认兑换
    exchange:function (e) {
        console.log('确认兑换');
    }

});