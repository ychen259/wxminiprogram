// custom-tab-bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/home/home",
        "text": "home",
        "iconPath": "/images/home.png",
        "info":3,
        "selectedIconPath": "/images/home-active.png"
      },
      {
        "pagePath": "/pages/message/message",
        "text": "message",
        "iconPath": "/images/message.png",
        "selectedIconPath": "/images/message-active.png"
      },
      {
        "pagePath": "/pages/contact/contact",
        "text": "contact",
        "iconPath": "/images/contact.png",
        "selectedIconPath": "/images/contact-active.png"
      }
      ,
      {
        "pagePath": "/pages/test/test",
        "text": "test",
        "iconPath": "/images/contact.png",
        "selectedIconPath": "/images/contact-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].pagePath,
      })
    },
  }
})