let app = getApp();

//Page Object
Page({
    data: {
        objectArray: [{
                type: 10000,
                name: '官方'
            },
            {
                type: 20000,
                name: '渠道'
            },
        ],
        focus: false,

        userUid: '',
        serverType: '',
        index: 0,
    },
    //options(Object)
    onLoad: function (options) {
        console.log('this is bandrole');

        wx.setNavigationBarTitle({
            title: '账号绑定'
        })

        this.data.serverType = this.data.objectArray[0].type;
    },
    getRoleInfo: function (param) {
        console.log('this is 查询');
    },
    // 绑定用户信息
    ajaxBand: function (param) {
        console.log(this.data.serverType);

        console.log(this.data.userUid);
    },
    // 实时获取输入值
    bindKeyInput: function (e) {
        this.setData({
            userUid: e.detail.value
        })
    },
    // 下拉选择框
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)

        // 根据选择设置服务器 id , ajax 传递
        if (e.detail.value == 0) {
            this.setData({
                serverType: 10000,
            })
        }

        if (e.detail.value == 1) {
            this.setData({
                serverType: 20000,
            })
        }

        // 设置索引
        this.setData({
            index: e.detail.value
        })


        // console.log(this.data.userUid);

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