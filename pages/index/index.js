//index.js
const app = getApp()

// 声明周期
Page({
    data: {

    },
    onLoad: function (options) {
        // 页面创建时执行
        wx.setNavigationBarTitle({
            title: '遇见龙'
        })
    },
    //微日期组件选中日期
    onSelectDate(e) {
        console.log('点击的日期:', e.detail.currDayDetail)
        this.setData({
            currSelectDate: e.detail.currDayDetail
        })
        console.log(this.data.currSelectDate);
        console.log(typeof (this.data.currSelectDate));
        let _this = this
        if (_this.data.currSelectDate == _this.data.currDay) {
            let query = {
                signTime: _this.data.currSelectDate
            }
            let currDay = _this.data.currSelectDate
            let currDay1 = currDay.substring(0, 7)
            let query1 = {
                signTime: currDay1
            }
            Request.apiRequest('xxx', query, 'post').then(res => {
                wx.hideLoading()
                console.log(res);
                if (res.code == 200) {
                    wx.showToast({
                        title: res.data,
                        icon: 'none',
                        duration: 3000
                    })

                    _this.getriliList(query1)
                }
            })

        } else {
            console.log('不能点击哦。。。');
        }
    },
    onShow: function () {
        // 页面出现在前台时执行
    },
    onReady: function () {
        // 页面首次渲染完毕时执行
    },
    onHide: function () {
        // 页面从前台变为后台时执行
    },
    onUnload: function () {
        // 页面销毁时执行
    },
    onPullDownRefresh: function () {
        // 触发下拉刷新时执行
    },
    onReachBottom: function () {
        // 页面触底时执行
    },
    onShareAppMessage: function () {
        // 页面被用户分享时执行
    },
    onPageScroll: function () {
        // 页面滚动时执行
    },
    onResize: function () {
        // 页面尺寸变化时执行
    },
    onTabItemTap(item) {
        // tab 点击时执行
        console.log(item.index)
        console.log(item.pagePath)
        console.log(item.text)
    },
    // 事件响应函数
    viewTap: function () {
        this.setData({
            text: 'Set some data for updating view.'
        }, function () {
            // this is setData callback
        })
    },
    // 自由数据
    customData: {
        hi: 'MINA'
    }
})