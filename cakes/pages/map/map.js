var bmap = require('../../lib/js/bmap-wx.min.js');
var wxMarkerData = [];
Page({
    data: {
        markers: [],
        ak: '0NPc10ggHhabmGtUjIznnSpkqEQ85eqk',
        latitude: '34.75681',
        longitude: '113.651471',
        placeData: {}
    },
    onLoad: function () {
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: that.data.ak
        });
        var fail = function (data) {
            console.log(data)
        };
        var success = function (data) {
            wxMarkerData = data.wxMarkerData;
            that.setData({
                markers: wxMarkerData
            });
            that.setData({
                latitude: wxMarkerData[0].latitude
            });
            that.setData({
                longitude: wxMarkerData[0].longitude
            });
        }
        BMap.search({
            "query": '美食',
            fail: fail,
            success: success,
            iconPath: '../../lib/img/2mudi@2x.png',
            iconTapPath: '../../lib/img/3mudi@2x.png',
            width: 24,
            height: 32
        });

        wx.request({
            url: 'https://api.map.baidu.com/place/v2/search?',
            data: {
                query: 'ATM机',
                tag: '银行',
                region: '郑州',
                output: 'json',
                ak: that.data.ak
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log(res.data)
            }
        })
    },
    makertap: function (e) {
        var that = this;
        var id = e.markerId;
        that.showSearchInfo(wxMarkerData, id);
        that.changeMarkerColor(wxMarkerData, id);
    },
    showSearchInfo: function (data, i) {
        var that = this;
        that.setData({
            placeData: {
                title: '名称：' + data[i].title + '\n',
                address: '地址：' + data[i].address + '\n',
                telephone: '电话：' + data[i].telephone
            }
        });
    },
    changeMarkerColor: function (data, id) {
        var that = this;
        var markersTemp = [];
        for (var i = 0; i < data.length; i++) {
            if (i === id) {
                console.log(data[i])
                data[i].iconPath = "../../lib/img/3mudi@2x.png";
            } else {
                data[i].iconPath = "../../lib/img/2mudi@2x.png";
            }
            data[i].callout = {
                content: data[i].title,
                color: '#FF0000',
                background: '#00f',
                fontSize: 14,
                padding: 5,
                borderRadius: 10,
                display: 'BYCLICK'
            }
            markersTemp[i] = data[i];
        }
        that.setData({
            markers: markersTemp
        });
    }
})