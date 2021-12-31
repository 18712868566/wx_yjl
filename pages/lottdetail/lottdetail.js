let app = getApp();

//Page Object
Page({
    data: {
        // 奖品id
        id: '',
        // 详情配图
        lottImg: '',
        // 商品名称
        lottName:'',
        // 消耗积分 
        lottIntegral:'',
        // 商品详情
        lottDetail:'',
        // 库存
        lottStock:''
    },
    //options(Object)
    onLoad: function (options) {
        console.log(options);
        // 给webview 赋值
        this.setData({
            id: options.id,
            lottImg: options.detailImg,
            lottName: options.lottName,
            lottIntegral: options.lottIntegral,
            lottDetail: options.lottDetail,
            lottStock: options.lottStock,
        });

        wx.setNavigationBarTitle({
            title: '物品详情'
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

});