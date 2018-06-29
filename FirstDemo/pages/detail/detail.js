const app = getApp()

Page({
    data: {
        winWidth: app.data.windowWidth,
        winHeight: app.data.windowHeight,
        swiperImgs: [
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/528aa13209e86d5d9839890967a6b9c1.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/54fcef525fa8f6037d180f3c26f3be65.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/30/62e3ca3a02dddb002eff00482078d194.jpg',
            'http://bpic.588ku.com/element_origin_min_pic/16/10/31/c7167fcfb4ebcd12621c05b0c852e98e.jpg'
        ],
        currentIndex: 0,
        total: 0,
        latitude: 34.798033,
        longitude: 113.670513,
        markers: [{
            latitude: 34.798033,
            longitude: 113.670513,
            name: '二七塔',
            iconPath: '../../lib/img/icon-current@2x.png',
            width: 22,
            height: 30
        }]
    },
    onLoad(options) {
        this.setData({
            total: this.data.swiperImgs.length
        })
    },
    previewImage(e) {
        var current = e.target.dataset.src;
        wx.previewImage({
            current: current, // 当前显示图片的http链接
            urls: this.data.swiperImgs,
            success(res) { },
            fail(res) { },
            complete(res) { },
        })
    },
    onChange(e) {
        this.setData({
            currentIndex: e.detail.current
        })
    }
})