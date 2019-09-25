// components/demo/demo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      msg:String,
      word:String,
      clientX:Number
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      console.log("demo 组件 初始化 attached ")
    },
    moved: function () { },
    detached: function () { },
  },


  /**
   * 组件的初始数据
   */
  data: {
    count:2019
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCount(e){
      console.log(e);
      var n = e.target.dataset.id  * 1;
      this.setData({
        count:this.data.count+=n 
      })
    },

    changeparent(){
      // 自定义事件 
      var myEventDetail = {n:500} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('changenumber',myEventDetail ,myEventOption)
    }
  }
})
