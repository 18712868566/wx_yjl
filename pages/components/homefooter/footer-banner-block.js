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
        footBanner: [{
                webUrl: 'https://mp.weixin.qq.com/s/Rag_QM45A3KS_diaFK0DwQ',
                text: '万圣节活动火热进行中',
                mode: 'scaleToFill', // 保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/footBanner1.png'
            },
            {
                webUrl: 'https://mp.weixin.qq.com/s/n8bolGkKRLYDnDOsldkMqA',
                text: '万圣节活动火热进行中',
                mode: 'scaleToFill', //保持纵横比缩放图片，使图片的长边能完全显示出来
                imgUrl: '/assets/home/footBanner2.png'
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
            // console.log(webviewUrl);
            
            // 使用 navigateTo 跳转页面时, 要在 app.json 中配置文件路径
            // 不然真机调试,会返回失败
            wx.navigateTo({
                url: '/pages/webview/webview?url=' + webviewUrl,
                success: (result) => {
                    wx.showToast({
                        title: '成功',
                        icon: 'success',
                        duration: 2000
                    })
                },
                fail: () => {
                    wx.showToast({
                        title: '失败',
                        icon: 'success',
                        duration: 2000
                    })
                },
                complete: () => { }
            });
              
        }
    }

})