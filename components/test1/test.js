// components/test.js
Component({
  options:{
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max:{
      type: Number,   //类型
      value:10       //默认值
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0,
    n1:0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount(){
      if(this.data.count<this.properties.max){
        this.setData({count: this.data.count+1});
        this._showCount();
      }
    },
    _showCount(){
      wx.showToast({
        title: 'count是' + this.data.count,
        icon:'none'
      })
    },
    showInfo(){
      console.log( this.data);
      console.log( this.properties);
    },
    addN1(){
      this.setData({n1: this.data.n1 +1});
    },
    addN2(){
      this.setData({n2: this.data.n2 +1});
    }

  },
  observers:{
    'n1,n2': function(n1,n2){
      this.setData({sum: n1+n2});
    }
  }
})