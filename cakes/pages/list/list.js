const app = getApp()

Page({
  data: {
      winWindow: app.data.windowWidth,
      lists: [
          {
              src: '../../lib/img/cake3.jpg',
              price: '359',
              descript: '诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕'
          },
          {
              src: '../../lib/img/cake2.jpg',
              price: '259',
              descript: '童趣蛋糕诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕'
          },
          {
              src: '../../lib/img/cake4.jpg',
              price: '369',
              descript: '福寿蛋糕诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕'
          },
          {
              src: '../../lib/img/cake5.jpg',
              price: '165',
              descript: '情侣蛋糕诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕'
          },
          {
              src: '../../lib/img/cake1.jpg',
              price: '259',
              descript: '慕斯蛋糕诺心蛋糕/草莓拿破仑蛋糕（5-8人食）-拿破仑蛋糕'
          }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
          title: '味蕾'
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})