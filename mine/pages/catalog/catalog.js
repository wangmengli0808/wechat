const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        windowWidth: app.globalData.windowWidth,
        windowHeight: app.globalData.windowHeight,
        swiperImgs: [],
        currentIndex: 0,
        currentSwiper: 0,
        catalogs: [
            {
                src: '../../libs/img/login1.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/timg.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/timg2.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/login2.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/login1.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/login3.jpg',
                title: '图文'
            }, {
                src: '../../libs/img/timg.jpg',
                title: '图文'
            }
        ]
    },
    onChange(e) {
        this.setData({
            currentIndex: e.detail.current
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this
        wx.request({
            url: 'https://image.baidu.com/search/acjson?',
            data: {
                tn: 'resultjson_com',
                ipn: 'rj',
                ct: 201326592,
                is: '',
                fp: 'result',
                queryWord: '动漫 古风',
                cl: 2,
                lm: -1,
                ie: 'utf - 8',
                oe: 'utf - 8',
                adpicid: '',
                st: -1,
                z: '',
                ic: 0,
                word: '动漫 古风',
                s: '',
                se: '',
                tab: '',
                width: '',
                height: '',
                face: 0,
                istype: 2,
                qc: '',
                nc: 1,
                fr: '',
                pn: 30,
                rn: 30,
                itg: 1,
                gsm: '1e',
                1531376027974: ''
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                that.setData({
                    swiperImgs: res.data.data ? res.data.data.slice(0, 6) : []
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh(e) {
        wx.showNavigationBarLoading()
        setTimeout(function() {
            wx.stopPullDownRefresh()
            wx.hideNavigationBarLoading()
        }, 1000)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom(e) {
        console.log('----------------bottom')
        console.log(e)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})