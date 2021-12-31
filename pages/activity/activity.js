// 获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowIdx: 0, //当前swiper索引
        imgList: [],
        indicatorDots: true, // 是否显示面板指示点
        indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
        indicatorActiveColor: " #000000", //当前选中的指示点颜色
        autoplay: true, // 是否自动切换
        interval: 5000, //自动切换时间间隔
        vertical: false, // 滑动方向是否为纵向
        circular: true, //	是否采用衔接滑动
        duration: 500, //滑动动画时长
        previousMargin: "0", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
        nextMargin: "0", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值

        // 活动列表
        hdLists: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);

        wx.setNavigationBarTitle({
            title: '活动专区'
        });

        this.getGlSwiper();

        this.getGlLists();
    },

    /* 获取活动轮播图 */
    getGlSwiper: function () {
        // 初始化
        const resArr = [];
        wx.request({
            url: 'http://yjl.demo.yingxiong.com/api/common/get-list',
            data: {
                id: 2482
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                const res = result.data.data.data
                for (const key in res) {
                    resArr.push(res[key].extend.hdSwiper)
                }
                this.setData({
                    imgList: resArr
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },

    /* 获取活动列表 */
    getGlLists: function () {
        // 初始化
        const resArr = [];
        wx.request({
            url: app.store.getState().productionServer + '/api/common/get-list',
            data: {
                id: 2483,
                pageSize: 999
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                const res = result.data.data.data

                for (const key in res) {
                    resArr.push(res[key].extend)
                }

                // console.log(resArr);

                this.setData({
                    hdLists: resArr
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    //swiper滑动事件
    swiperChange: function (e) {
        this.setData({
            nowIdx: e.detail.current
        })
    },
    // 跳转到公众号文章
    toDetail: function (e) {
        console.log(e);
        let webviewUrl = e.currentTarget.dataset.webview;
        console.log(webviewUrl);

        // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
        // 不然真机调试,会返回失败
        wx.navigateTo({
            url: '/pages/webview/webview?url=' + webviewUrl,
            // success: (result) => {
            //     wx.showToast({
            //         title: '成功',
            //         icon: 'success',
            //         duration: 2000
            //     })
            // },
            // fail: () => {
            //     wx.showToast({
            //         title: '失败',
            //         icon: 'success',
            //         duration: 2000
            //     })
            // },
            // complete: () => {}
        });
    }
})