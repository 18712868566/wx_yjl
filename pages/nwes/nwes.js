// pages/nwes/nwes.js
// 获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        nowIdx: 0, //当前swiper索引
        imgList: [
            "/assets/news/pic.jpg",
            "/assets/news/pic.jpg",
            "/assets/news/pic.jpg",
        ],
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


        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
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
})