//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    imgWidth: app.data.windowWidth + 'px',
    imgHeight: app.data.windowWidth * 0.67 + 'px',
    sourceType: "sale",
    sourceList: [
        {
            img_src: '../../lib/img/banner1.jpg',
            title: '中间层三居室，户型方正，采光好，南北通风，明厨明卫，视野佳，拎包入住',
            room: 3,
            hall: 1,
            area: 125,
            type: '南北通透',
            community_title: '鑫苑中央花园洋房',
            price: 750,
            unit_price: 5485.5
        },
        {
            img_src: '../../lib/img/banner1.jpg',
            title: '户型方正，采光好，中间层三居室，南北通风，明厨明卫，视野佳，拎包入住',
            room: 2,
            hall: 1,
            area: 85,
            type: '东西',
            community_title: '鑫苑国际',
            price: 150,
            unit_price: 1960.5
        }
    ],
    aa: {
        b: 12
    },
    bb: [1,2,3,4]
  },
  //事件处理函数
  onLoad() {
    this.setData({

    })
  },
  toSearch() {
    var aa = JSON.stringify(this.data.aa)
    wx.navigateTo({
        url: '../search/search?aa=' + aa
    })
  },
  typeToggle(e) {
    this.setData({
      sourceType: e.target.dataset.type
    })
  }
});
