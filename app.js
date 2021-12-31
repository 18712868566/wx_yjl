// app.js

// 全局状态管理
import Store from "wxministore";

let store = new Store({
    state: {
        isBandRole: false,
        globalIntegrate: '123456789',
        signDay:'0',
        devServer: 'http://yjl.demo.yingxiong.com/',
        productionServer: 'https://yjl.yingxiong.com',
        msg: "这是一个全局状态",
        user: {
            name: "李四",
        },
    },
    //方法
    methods: {
        sayHello() {
            console.log("hello");
        },
    },
    //页面监听
    pageListener: {
        onLoad(options) {
            console.log("我在" + this.route, "参数为", options);
        },
    },
});
// console.log(store.getState().msg); //这是一个全局状态 1.2.6+

App({
    store,
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        let _this = this;
        // 登录
        wx.login({
            success(res) {
                if (res.code) {
                    console.log(res.code);
                    //发起网络请求
                    wx.request({
                        url: store.getState().productionServer+ '/mini-program/wechat-login',
                        header: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        data: {
                            code: res.code
                        },
                        success(res) {
                            console.log(res.data);

                            _this.gitUserInfo();
                        }
                    })
                } else {
                    console.log('登录失败!' + res.errMsg)
                }
            }
        });



        // 监听是否登录
        /* 
        store.setState({
            isLogin: true,
        });
        store.getState().isLogin

        if (!store.getState().isLogin) {
            wx.showLoading({
                title: '未登录',
            })

            setTimeout(function () {
                wx.hideLoading()
            }, 2000)
        } */
    },
    // 获取用户信息
    gitUserInfo: function (param) {
        wx.request({
            url: store.getState().productionServer + '/mini-program/get-user-info',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success(res) {
                console.log(res.data);
            }
        })
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log('121212' + userInfo);
                // this.setData({
                //     userInfo: res.userInfo,
                //     hasUserInfo: true
                // })
            }
        })
    },
    // 展示时做点什么。
    onShow: function (options) {

    },
    // 躲起来做点什么。
    onHide: function () {

    },
    onError: function (msg) {

    },
    //options(path,query,isEntryPage)
    onPageNotFound: function (options) {

    },
    globalData: {
        userInfo: null
    }
});