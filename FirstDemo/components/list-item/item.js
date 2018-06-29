Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    height: String,  
    list: {
        type: Array,
        value: []
    }
  },
  data: {
    list: []  
  },
  attached() {
    this.init()
  },
  methods: {
    init() {
        let data = this.properties.list
        this.setData({
            list: data
        })
    },
    toDetail() {
        wx.navigateTo({
            url: '../detail/detail'
        })
    },
    backParams() {
        this.triggerEvent('myevent', { id: 123 })
    }
  }
})