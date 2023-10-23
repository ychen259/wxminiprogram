// pages/test/test.js
import{createStoreBindings} from 'mobx-miniprogram-bindings';
import{store} from '../../store/store';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:10
  },
  getChild(){
    const child = this.selectComponent('.customA');
    child.setData({count:child.properties.count + 1});
    child.addCount();
  },
  syncCount(e){
    this.setData({count: e.detail.value});
  },
  btnHandler1(e){
    this.updateNum1(e.target.dataset.step);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields:['numA', 'numB', 'sum'],
      actions: ['updateNum1']
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destoryStoreBIndings();
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