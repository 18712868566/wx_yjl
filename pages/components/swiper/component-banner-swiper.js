// components/component-banner-swiper.js
let app =  getApp();

  
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
        imgList: [],
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
        swiperChange: function (e) {
            this.setData({
                nowIdx: e.detail.current
            })
        },
    },
    lifetimes: {
        attached: function () {
            // 在组件实例进入页面节点树时执行
            // console.log('attached');
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
            // console.log('detached');
        },
        created: function (params) {
            const resArr = [];
            wx.request({
                url: app.store.getState().productionServer + '/api/common/get-list',
                data: {
                    id: 2473
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
                        resArr.push(res[key].extend.homeSwiper)
                    }
                    this.setData({
                        imgList: resArr
                    })
                },
                fail: () => {},
                complete: () => {}
            });
        }
    },
    pageLifetimes: {
        show: function () {
            // 页面被展示
        },
        hide: function () {
            // 页面被隐藏
        },
        resize: function (size) {
            // 页面尺寸变化
        }
    }

})