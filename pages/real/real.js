let app = getApp();

//Page Object
Page({
    data: {
        // 我的订单
        // newsLists: [],
        newsLists: [{
                gift_id: '1213',
                gift_name: '遇见龙周边遇见龙周边遇见',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '0', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            },
            {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '1', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达
                ship_number: '1234567890', //单号：
                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }
        ]
    },
    //options(Object)
    onLoad: function (options) {
        this.setData({
            title: options.title
        });

        wx.setNavigationBarTitle({
            title: '我的订单'
        })
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