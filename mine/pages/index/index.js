var bmap = require('../../libs/resource/bmap-wx.min.js');
const app = getApp()

Page({
    data: {
        windowWidth: app.globalData.windowWidth,
        windowHeight: app.globalData.windowHeight,
        ak: '0NPc10ggHhabmGtUjIznnSpkqEQ85eqk',
        currentDay: '',
        currentMonth: '',
        currentCity: '',
        weather: '',
        date: '2018-07',
        catalog_show: false,
        is_show: false,
        dateList: [
            {
                month: '7月',
                data: [
                    {
                        date: '2018/07/13',
                        img_src: '../../libs/img/timg2.jpg'
                    },
                    {
                        date: '2018/07/12',
                        img_src: '../../libs/img/timg2.jpg'
                    },
                    {
                        date: '2018/07/11',
                        img_src: '../../libs/img/timg2.jpg'
                    }
                ]
            },
            {
                month: '6月',
                data: [
                    {
                        date: '2018/06/12',
                        img_src: '../../libs/img/timg2.jpg'
                    }
                ]
            },
            {
                month: '5月',
                data: [
                    {
                        date: '2018/05/11',
                        img_src: '../../libs/img/timg2.jpg'
                    }
                ]
            }
        ],
        catalogs: [
            {
                title: 'ONE STORY',
                desc: '一切都会好起来'
            },
            {
                title: '音乐',
                desc: '哪怕半明半暗，好在曾经遇见'
            }
        ],
        lists: [
            {
                id: 1,
                title: 'ONE STORY',
                article_title: '密林',
                article_auth: '蒲苇',
                img_src: '../../libs/img/timg.jpg',
                atricle_desc: '早知道恋爱的感觉如此冰凉，她绝不会在人生最紧要的关头，舍身跳入到这冰窟窿中。',
                time: '今天',
                love_count: 5212
            },
            {
                id: 2,
                title: '连载',
                article_title: '寻找长颈鹿小姐',
                article_auth: '倾斜',
                img_src: '../../libs/img/timg.jpg',
                atricle_desc: '遇到喜欢的人要说出来吗？当然。',
                time: '今天',
                love_count: 520
            }
        ]
    },
    //事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad() {
        var that = this;
        // 获取当前定位
        // wx.getLocation({
        //     type: 'wgs84',
        //     success: function (res) {
        //         _this.loadCity(res.longitude, res.latitude)
        //     }
        // })
        var date = new Date().toDateString().split(' ');
        that.setData({
            currentDay: date[2],
            currentMonth: date[1] + '.' + date[3]
        });

        // 获取当前天气信息
        var BMap = new bmap.BMapWX({
            ak: that.data.ak
        });

        // 发起weather请求 
        BMap.weather({
            fail: function (data) {
                that.setData({
                    currentCity: '获取定位失败'
                });
            },
            success: function (data) {
                var city = data.currentWeather[0].currentCity;
                var weather = data.currentWeather[0].weatherDesc + data.currentWeather[0].temperature
                that.setData({
                    currentCity: city,
                    weather: weather
                });
            }
        });

        // 获取数据
        let lists = this.data.lists
        lists.forEach((item) => {
           item.is_collect = false
        })
        this.setData({
            lists: lists
        })
    },
    loadCity(longitude, latitude) {
        var _this = this
        wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/',
            data: {
                ak: '0NPc10ggHhabmGtUjIznnSpkqEQ85eqk',
                location: latitude + ',' + longitude,
                output: 'json'
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                var city = res.data.result.addressComponent.city;
                app.globalData.currentCity = city
                _this.setData({ currentCity: city });
            },
            fail: function () {
                _this.setData({ currentCity: "获取定位失败" });
            },

        })
    },
    choose() {
        this.setData({
            is_show: !this.data.is_show
        })
        if (this.data.is_show) {
            wx.hideTabBar({
                animation: true
            })
        } else {
            wx.showTabBar({
                animation: true
            })
        }
    },
    toggleCatalog(e) {
        this.setData({
            catalog_show: !this.data.catalog_show
        })
    },
    collect(e) {
        let lists = this.data.lists
        lists.forEach((item) => {
            if (item.id === e.target.dataset.collect) {
                item.is_collect = !item.is_collect
            }
        })
        this.setData({
            lists: lists
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    }
})