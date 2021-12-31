// 获取应用实例
const app = getApp()

//Page Object
Page({
    data: {
        id: '',
        title: '',
        details: '',
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
            title: '文章详情'
        });

        this.getNewsLists(targetUrl);
    },

    /* 获取新闻详情 */
    getNewsLists: function (id) {
        // 初始化
        const resArr = [];
        wx.request({
            url: app.store.getState().productionServer + '/api/common/get-content-detail',
            data: {
                id: id
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                const res = result.data.data
                this.setData({
                    title: res.title,
                    details: res.body
                })
            },
            fail: () => {},
            complete: () => {}
        });
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

    }
});