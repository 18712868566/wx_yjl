/*
 * @Author: A
 * @Date:   2021-12-21 18:11:09
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-12-31 18:07:58
 */
// 获取应用实例
const app = getApp();

//Page Object
Page({
    useStore: true,
    data: {
        motto: '',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        canIUseGetUserProfile: false,
        canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

        menuTapCurrent: 0,

        hero1: [],
        hero2: [],
        hero3: [],
        hero4: [],
        hero5: [],
        hero6: [],
        hero7: []
        /* hero7: [{
            isGet: true,
            heroId: '20',
            imgUrl: '/assets/atlas/img2.png'
        }] */
    },
    //options(Object)
    onLoad() {
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }

        wx.setNavigationBarTitle({
            title: '小龙图鉴'
        });

        // app.store.setState({
        //     msg: "我被修改了，呜呜...",
        // });

        this.getLongList('2485');
    },

    // 查询获取小龙
    getUserRoleInfo: function (param) {
        wx.request({
            url: app.store.getState().productionServer + '/mini-program/get-user-role-info',
            data: {
                role_id: 2479
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                const res = result.data.data.data
                for (const key in res) {
                    resArr.push(res[key].extend.glSwiper)
                }
                this.setData({
                    imgList: resArr
                })
            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 获取图鉴内容
    getLongList: function (id) {
        wx.request({
            url: app.store.getState().productionServer + '/api/common/get-list',
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
                const res = result.data.data.data;

                console.log(res);

                if (id == '2485') {
                    this.setData({
                        hero1: res
                    })
                }

                if (id == '2486') {
                    this.setData({
                        hero2: res
                    })
                }

                if (id == '2487') {
                    this.setData({
                        hero3: res
                    })
                }

                if (id == '2488') {
                    this.setData({
                        hero4: res
                    })
                }

                if (id == '2489') {
                    this.setData({
                        hero5: res
                    })
                }

                if (id == '2491') {
                    this.setData({
                        hero6: res
                    })
                }

                if (id == '2492') {
                    this.setData({
                        hero7: res
                    })
                }

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // tab切换
    menuTap: function (e) {
        var current = e.currentTarget.dataset.current; //获取到绑定的数据
        //改变menuTapCurrent的值为当前选中的menu所绑定的数据
        this.setData({
            menuTapCurrent: current
        });

        if (current == 1) {
            this.getLongList('2486');
        }

        if (current == 2) {
            this.getLongList('2487');
        }
        
        if (current == 3) {
            this.getLongList('2488');
        }

        if (current == 4) {
            this.getLongList('2489');
        }

        if (current == 5) {
            this.getLongList('2491');
        }

        if (current == 6) {
            this.getLongList('2492');
        }
        console.log(current);
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
    // 跳转到详情
    toDetail: function (e) {
        console.log(e);
        let heroId = e.currentTarget.dataset.heroid;
        console.log(heroId);

        // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
        // 不然真机调试,会返回失败
        wx.navigateTo({
            url: `/pages/herodetail/herodetail?url=${heroId}`,
            success: (result) => {},
            fail: (rej) => {

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
            success: (result) => {},
            fail: (rej) => {},
            complete: () => {}
        });
    },
    // 跳转到绑定账号页面
    bandRole: function (e) {
        console.log(e);

        wx.navigateTo({
            url: "/pages/bandrole/bandrole",
            success: (result) => {
                // wx.showToast({
                //     title: '成功',
                //     icon: 'success',
                //     duration: 2000
                // })
            },
            fail: (rej) => {
                console.log(rej);
                // wx.showToast({
                //     title: '失败',
                //     icon: 'success',
                //     duration: 2000
                // })
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