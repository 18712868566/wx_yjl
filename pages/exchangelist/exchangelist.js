let app = getApp();

//Page Object
Page({
    data: {
        // 新闻
        newsLists: [{
                gift_id:'1213',
                gift_name: '遇见龙周边遇见龙周边遇见龙周边遇见龙周边',
                cost_points: '31',
                is_real:'1', // 1 实物 , 2 虚拟
                gift_status:'0', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            },
            {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '1', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }, {
                gift_id: '1213',
                gift_name: '遇见龙周边',
                cost_points: '31',
                is_real: '1', // 1 实物 , 2 虚拟
                gift_status: '2', // 0 待处理 1 已发送 2 已送达

                itemImg: '/assets/news/1.png',
                mode: 'scaleToFill',
            }
        ]
    },
    //options(Object)
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '兑换记录'
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