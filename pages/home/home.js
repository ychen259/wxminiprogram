// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    gridList:[],
    asyncSwiperList:[]
  },

  getSwiperList(){
    wx.request({
      url:"https://applet-base-api-t.itheima.net/slides",
      method:"GET",
      success:(res)=>{
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  async asyncGetSwiperList(){
    const res = await wx.p.request({
      url:"https://applet-base-api-t.itheima.net/slides",
      method:"GET",
    });

    this.setData({asyncSwiperList: res.data });
  },

  getGridList(){
    wx.request({
      url:"https://applet-base-api-t.itheima.net/categories",
      method:"GET",
      success:(res)=>{
        this.setData({
          gridList: res.data
        })
      }
    })
  },

  goToMessage(){
    wx.switchTab({
      url: '/pages/message/message',
    })
  },

  goToInfo(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("On Loadding");
    this.getSwiperList();
    this.getGridList();
    this.asyncGetSwiperList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("On show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("On hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})