var bmap = require('../../utils/bmap-wx.min.js');

Page({
    data: {
        ak: "0NPc10ggHhabmGtUjIznnSpkqEQ85eqk",
        markers: [],
        latitude: '',
        longitude: '',
        address: ''
    },
    onLoad: function () {
        this.getWxLocation()
    },
    getWxLocation: function () {
        var that = this;
        /* 获取定位地理位置 */
        // 新建bmap对象   
        var BMap = new bmap.BMapWX({
            ak: that.data.ak
        });
        var fail = function (data) {
            console.log(data);
        };
        var success = function (data) {
            //返回数据内，已经包含经纬度  
            console.log(data);
            //使用wxMarkerData获取数据  
            wxMarkerData = data.wxMarkerData;
            //把所有数据放在初始化data内  
            that.setData({
                markers: wxMarkerData,
                latitude: wxMarkerData[0].latitude,
                longitude: wxMarkerData[0].longitude,
                address: wxMarkerData[0].address
            });
        }
        // 发起regeocoding检索请求   
        BMap.regeocoding({
            fail: fail,
            success: success
        });  
    }
})