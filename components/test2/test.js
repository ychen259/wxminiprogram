// components/test2/test.js

const myBehavior = require("../../behaviors/my-behaviors");

Component({
  behaviors: [myBehavior],
  options:{
    pureDataPattern: /^_/,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor: '0,0,0',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR(){
      this.setData({'_rgb.r': this.data._rgb.r + 5 > 255? 255: this.data._rgb.r + 5});
    },
    changeG(){
      this.setData({'_rgb.g': this.data._rgb.g + 5 > 255? 255: this.data._rgb.g + 5});
    },
    changeB(){
      this.setData({'_rgb.b': this.data._rgb.b + 5 > 255? 255: this.data._rgb.b + 5});
    },
    randomColor(){
      this.setData({
        _rgb:{
          r: Math.floor(Math.random()*256),
          g: Math.floor(Math.random()*256),
          b: Math.floor(Math.random()*256),
        }
      })
    },
    addCount(){
      //this.setData({count: this.data.count+1});
      this.triggerEvent('sync', {value:this.properties.count});
    }
  },
  observers:{
    '_rgb.r, _rgb.g, _rgb.b': function(r, g, b){
      this.setData({fullColor: r+ ',' + g + ',' + b});
    }
  },

  created(){
    console.log("created");
  },
  attached(){
    console.log("attached");
  },
  pageLifetimes:{
    show(){
      this.randomColor();
    },
    hide(){
      console.log("hide");
    },
    resize(){
      console.log("resize");
    }
  }
})