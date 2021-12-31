let app = getApp();

//Page Object
Page({
    data: {
        motto: '',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

        lottImg: '/assets/integral/getIntegral.jpg',
        userNumber: app.store.getState().globalIntegrate,
        signDay: app.store.getState().signDay,

        navlist: [{
                webUrl: '/pages/index/index',
                text: '去签到',
                mode: 'scaleToFill', // 保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/integral/icon_sign.png'
            },
            {
                webUrl: 'null',
                text: '分享点赞',
                mode: 'scaleToFill', // 保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/integral/icon_link.png'
            },
            {
                webUrl: 'null',
                text: '发帖评论',
                mode: 'scaleToFill', // 保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/integral/icon_pinlun.png'
            }
        ]
    },
    //options(Object)
    onLoad: function (options) {
        console.log(options);

        wx.setNavigationBarTitle({
            title: '积分获取'
        })
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

    // 跳转到绑定账号页面
    bandRole: function (e) {
        console.log(e);

        wx.navigateTo({
            url: "/pages/bandrole/bandrole",
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
    // 转发
    onShareAppMessage: function (res) {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    },
    toWebView: function (e) {
        console.log(e);
        let webviewUrl = e.currentTarget.dataset.webview;
        console.log(webviewUrl);

        // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
        // 不然真机调试,会返回失败
        if (webviewUrl == 'null') {
            wx.showToast({
                title: '暂未开放',
                icon: 'error',
                duration: 2000
            })
        } else {
            wx.switchTab({
                url: "" + webviewUrl,
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
        }
    }
});