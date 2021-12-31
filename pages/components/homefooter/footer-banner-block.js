const app = getApp()

// components/component-banner-swiper.js
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
        footBanner: []
    },
    /**

     * 组件的方法列表

     */

    methods: {
        toWebView: function (e) {
            console.log(e);
            let webviewUrl = e.currentTarget.dataset.webview;
            // console.log(webviewUrl);

            // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
            // 不然真机调试,会返回失败
            wx.navigateTo({
                url: '/pages/webview/webview?url=' + webviewUrl,
                // success: (result) => {
                //     wx.showToast({
                //         title: '成功',
                //         icon: 'success',
                //         duration: 2000
                //     })
                // },
                // fail: () => {
                //     wx.showToast({
                //         title: '失败',
                //         icon: 'success',
                //         duration: 2000
                //     })
                // },
                // complete: () => { }
            });

        }
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
                    id: 2474
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
                        resArr.push(res[key].extend)
                    }
                    this.setData({
                        footBanner: resArr
                    })
                },
                fail: () => {},
                complete: () => {}
            });
        }
    },

})