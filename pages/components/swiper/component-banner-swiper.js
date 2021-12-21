// components/component-banner-swiper.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        nowIdx: 0, //当前swiper索引
        imgList: [
            "/assets/home/pic.png",
            "/assets/home/pic.png",
            "/assets/home/pic.png",
        ],
        indicatorDots: true, // 是否显示面板指示点
        indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
        indicatorActiveColor: " #000000", //当前选中的指示点颜色
        autoplay: true, // 是否自动切换
        interval: 5000, //自动切换时间间隔
        vertical: false, // 滑动方向是否为纵向
        circular: true, //	是否采用衔接滑动
        duration: 500, //滑动动画时长
        previousMargin: "20", //前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
        nextMargin: "20", //后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    },
    /**

     * 组件的方法列表

     */

    methods: {
        //swiper滑动事件
        swiperChange: function(e) {
            this.setData({
                nowIdx: e.detail.current
            })
        },
    }

})