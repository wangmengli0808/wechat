const app = getApp()

Page({
    data: {
        scrollHeight: app.data.windowHeight + 8 + 'px',
        is_botttom: false,
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
            },
            {
                img_src: '../../lib/img/banner1.jpg',
                title: '中间层三居室，户型方正，采光好，南北通风，明厨明卫，视野佳，拎包入住',
                room: 3,
                hall: 1,
                area: 125,
                type: '东',
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
                type: '南北',
                community_title: '鑫苑国际',
                price: 150,
                unit_price: 1960.5
            },
            {
                img_src: '../../lib/img/banner1.jpg',
                title: '中间层三居室，户型方正，采光好，南北通风，明厨明卫，视野佳，拎包入住',
                room: 3,
                hall: 1,
                area: 125,
                type: '东',
                community_title: '鑫苑中央花园洋房',
                price: 750,
                unit_price: 5485.5
            }
        ]
    },
    onLoad(options) {
        let title = ''
        if (options.type == 'sale') {
            title = '房源列表'
        } else if (options.type == 'lease') {
            title = '房信租房'
        } else {
            title = '发布房源'
        }
        wx.setNavigationBarTitle({
            title: title
        })
    },
    scrollMore(e) {
        if (this.data.sourceList.length == 50) {
            this.setData({
                is_botttom: true
            })
            return
        }
        wx.showLoading({
            title: '玩命加载中...'
        })
        var moment_list = this.data.sourceList
        for (var i = 0; i < 5; i++) {
            moment_list.push({
                img_src: '../../lib/img/banner1.jpg',
                title: '中间层三居室，户型方正，采光好，南北通风，明厨明卫，视野佳，拎包入住',
                room: 3,
                hall: 1,
                area: 125,
                type: '南北通透',
                community_title: '鑫苑中央花园洋房',
                price: 750,
                unit_price: 5485.5
            })
        }
        this.setData({
            sourceList: moment_list
        })
        wx.hideLoading();
    },
    onUnload() {
        console.log(33333333333)
    },
    getMsg(e) {
        console.log(e.detail)
    }
})