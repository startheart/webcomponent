// fancy-tabs.js
Component({
  /**
   * 组件的属性列表
   */
  props: {
    from: ''
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
      this.props.onMyevent({
        from: this.props.from
      })
    }
  }
})
