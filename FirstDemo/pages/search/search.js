//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  onLoad: function () {
    this.data.inputShowed = true
  },
  toHome: function () {
    wx.navigateBack()
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})
