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
        navlist: [{
                webUrl: '/pages/atlas/atlas',
                text: '小龙图鉴',
                mode: 'scaleToFill', // 保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/icon_1.png'
            },
            {
                webUrl: '/pages/strategy/strategy',
                text: '攻略专区',
                mode: 'scaleToFill', //保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/icon_2.png'
            },
            {
                webUrl: '/pages/activity/activity',
                text: '活动专区',
                mode: 'scaleToFill', //保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/icon_3.png'
            },
            {
                webUrl: '/pages/getIntegral/getIntegral',
                text: '积分获取',
                mode: 'scaleToFill', //保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/icon_4.png'
            },
            {
                webUrl: '/pages/nwes/nwes',
                text: '新闻资讯',
                mode: 'scaleToFill', //保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/icon_5.png'
            }
        ]
    },
    /**

     * 组件的方法列表

     */

    methods: {
        toWebView: function (e) {
            console.log(e);
            let webviewUrl = e.currentTarget.dataset.webview;
            console.log(webviewUrl);

            // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
            // 不然真机调试,会返回失败
            wx.navigateTo({
                url: ""+webviewUrl,
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

})