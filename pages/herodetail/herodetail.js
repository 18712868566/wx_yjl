/*
 * @Author: A
 * @Date:   2021-12-28 21:04:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2021-12-31 17:50:51
 */
// 获取应用实例
const app = getApp()

//Page Object
Page({
    data: {
        id: '',
        heroMsg: {
            img: '',
            title: '',
            property: {
                mintitle: '背景故事',
                msg: ''
            },
            data: {
                mintitle: '技能',
                msg: ''
            }
        }
    },
    //options(Object)
    onLoad: function (options) {
        console.log(options);
        this.setData({
            id: options.url,
        });

        // 获取技能详情
        this.getLongList(options.url);

        // 重置页面标题
        wx.setNavigationBarTitle({
            title: '小龙介绍'
        })
    },


    // 获取图鉴内容
    getLongList: function (id) {
        // this.menuTapCurrent
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
                const res = result.data.data;
                console.log(res);

                this.setData({
                    ['heroMsg.data.msg']: res.body,
                    ['heroMsg.img']: res.extend.longDetailImg,
                    ['heroMsg.title']: res.extend.longName,
                    ['heroMsg.property.msg']: res.extend.backstory,
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