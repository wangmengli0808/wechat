const app = getApp()

Page({
    data: {
        windowHeight: app.globalData.windowHeight,
        is_login: false,
        userInfo: null
    },
    onLoad(options) {
        var that = this
        wx.getStorage({
            key: 'userInfo',
            success: function (res) {
                console.log(res.data)
                that.setData({
                    is_login: res.data.is_login,
                    userInfo: res.data.userInfo
                })
            }
        })
    },
    bindGetUserInfo(e) {
        if (e.detail.errMsg == 'getUserInfo:ok') {
            this.setData({
                is_login: true,
                userInfo: e.detail.userInfo
            })
            wx.setStorage({
                key: "userInfo",
                data: {
                    is_login: true,
                    userInfo: e.detail.userInfo
                }
            })
        }
    },
    exitLogin() {
        var that = this
        wx.removeStorage({
            key: 'userInfo',
            success: function (res) {
                console.log(res.data)
                that.setData({
                    is_login: false,
                    userInfo: null
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
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})