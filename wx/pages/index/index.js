const app = getApp()

Page({
  data: {

  },
  click: function(e) {
    console.log('【<fancy-tabs/> origin click event handler】', e)
  },
  customEvt: function(e) {
    console.log('【<fancy-tabs/> custom event handler】', e)
  }
})
