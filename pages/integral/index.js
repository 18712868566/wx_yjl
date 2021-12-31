// 获取应用实例
const app = getApp();

//Page Object
Page({
    data: {
        motto: '',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

        userInfoGlobal: '9999',

        lottLists: [ ]
    },
    //options(Object)
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        wx.setNavigationBarTitle({
            title: '积分商城'
        });

        this.getLottLists();
    },
    /* 获取新闻列表 */
    getLottLists: function () {
        // 初始化
        const resArr = [];
        wx.request({
            url: app.store.getState().productionServer + '/api/common/get-list',
            data: {
                id: 2472,
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

                console.log(res);
                for (const key in res) {
                    resArr.push(res[key])
                }
                this.setData({
                    lottLists: resArr
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },

    // 事件处理函数
    bindViewTap() {
        // wx.navigateTo({
        //     url: '../logs/logs'
        // })
        console.log('111')
    },
    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
            desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                console.log(res)
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        })
    },
    getUserInfo(e) {
        // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
        console.log(e)
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    // 跳转到想起
    toDetail: function (e) {
        // console.log(e.currentTarget.dataset);
        let id = e.currentTarget.dataset.webview;
        let detailImg = e.currentTarget.dataset.detailimg;
        let lottName = e.currentTarget.dataset.lottname;
        let lottIntegral = e.currentTarget.dataset.lottintegral;
        let lottDetail = e.currentTarget.dataset.lottdetail;
        let lottStock = e.currentTarget.dataset.lottstock;

        // console.log(id);
        // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
        // 不然真机调试,会返回失败
        wx.navigateTo({
            url: `/pages/lottdetail/lottdetail?id=${id}&detailImg=${detailImg}&lottName=${lottName}&lottIntegral=${lottIntegral}&lottDetail=${lottDetail}&lottStock=${lottStock}
            `,
            success: (result) => {
                // wx.showToast({
                //     title: '成功',
                //     icon: 'success',
                //     duration: 2000
                // })
            },
            fail: (rej) => {
                // console.log(rej);
                // wx.showToast({
                //     title: '失败',
                //     icon: 'success',
                //     duration: 2000
                // })
            },
            complete: () => {}
        });
    },
    // 跳转到积分获取
    toPage: function (e) {
        console.log(e);
        let toPage = e.currentTarget.dataset.page;
        console.log(toPage);

        wx.navigateTo({
            url: "" + toPage,
            success: (result) => {
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                })
            },
            fail: (rej) => {
                console.log(rej);
                wx.showToast({
                    title: '失败',
                    icon: 'success',
                    duration: 2000
                })
            },
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