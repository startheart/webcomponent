// fancy-tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    from: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    click(e) {
      this.triggerEvent('myevent', {
        from: this.data.from
      })
    }
  }
})
