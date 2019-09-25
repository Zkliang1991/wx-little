// pages/home/home.js

const app = getApp();
// Page() 指定页面的初始数据、生命周期回调、事件处理函数

const { http } = require("../../utils/ajax");

Page({

  /**
   * 页面的初始数据
   */
  data: {
     num:1906,
     token:app.globalData.token,
     word:"努力就一定会有 money",
     id:1906,
     imgUrl:"https://zuozhaoxi.com/base/img/3.jpg",
     link:"http://www.mobiletrain.org/",
     flag:!!0,
     todos:[
       {
         names:"zuozuomu",
         age:28,
         word:"daydayup"
       },
       {
        names:"leson",
        age:38,
        word:"yiqun 二嫂子 ...."
      }
     ],
     number:[1, 2, 3, 4, 5, 6, 7, 8, 9],
     clientX:0,
     userData:{username:'xiaochen', salary:18000,address:'深圳'},
     likeData:{names:"小美",count:999},
     actionData:{
       items:["办理出国","办理移民","办理入境","拍照"],
       actionHidden:true
     },
     loginData:{
      modalHidden:true,
      mobile:"",
      code:""
     }
  },
  todoLogin(){
      http({
        url:"https://peng47.com:2906/react/checkCode",
        method:"POST",
        data:{
          mobile:this.data.loginData.mobile,
          code:this.data.loginData.code,
        },
        success:res=>{
          console.log(res);
          wx.setStorageSync("isLogin",!!res.data.type);
          this.setData({
            "loginData.modalHidden":!res.data.type
          })
          // if(!!res.data.type){
            
          // }
        }

      })
  },
  sendCode(){
    // 获取验证码 
    http({
      url:"https://peng47.com:2906/react/sendCode",
      method:"POST",
      data:{
        mobile:this.data.loginData.mobile
      },
      success:res=>{
        console.log(res);
      }
    });


  },
  getModile(e){
    this.setData({
      "loginData.mobile":e.detail.value
    })
  },
  getCode(e){
    this.setData({
      "loginData.code":e.detail.value
    })
  },
  cancelLogin(){
    this.setData({
      "loginData.modalHidden":false
    })
  },





  openMyAction(){
    this.setData({
      'actionData.actionHidden':false
    })
  },
  actioncancel(){
    this.setData({
      'actionData.actionHidden':true
    })
  },
  changeItem(e){
    console.log(e);
    var idx = e.target.dataset.idx;
    this.setData({
      'actionData.actionHidden':true
    })

    wx.showToast({
      title:this.data.actionData.items[idx]+'success'
    });

  },
  openactionsheet(){
    var that = this;
    wx.showActionSheet({
      itemList: this.data.actionData.items,
      success :(res)=> {
        console.log(res.tapIndex);
        wx.showToast({
          title:this.data.actionData.items[res.tapIndex]+'成功'
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  openModal(){
    wx.showModal({
      title: '流量警告',
      content: '你正在使用移动网络观看视频!',
      cancelText:"取消观看",
      cancelColor:"#000",
      confirmText:"继续观看",
      confirmColor:"#0f0",
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.showToast({
            title:"土豪,请观看"
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
          wx.showToast({
            title:"请马上充值"
          })
        }
      }
    })
  },
  getNewNumber(e){
    console.log(e);
    this.setData({
      num:this.data.num+=e.detail.n
    })
  },
  parent(){
    wx.showToast({
      title: '这是父节点的事件',
      icon: 'success',
      duration: 1000
    })
  },
  childOne(){
    console.log("one --- bind 不会阻止冒泡")
  },
  childTwo(){
    console.log("two --- catch 一定会阻止冒泡")
  },
  tapName(e){
    console.log(e);
    this.setData({
      clientX:e.touches[0].clientX
    });
    console.log(e.target.dataset);
  },

  changeCheck(e){
    console.log(e);
    this.setData({
      flag:!e.detail.value
    })
  },
  changeFlag(){
    this.setData({
      flag:!this.data.flag
    })
  },
  changeIdx(){
    // this.data.id+=10   this.data.id = this.data.id+10;
    this.setData({
      id:this.data.id+=10
    })
  },
  getWord(e){
    console.log(e);
    this.setData({
      word:e.detail.value 
    })
  },
  changeNum(){
    this.setData({
      num:++this.data.num
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    if(wx.getStorageSync("isLogin")){
      this.setData({
        'loginData.modalHidden':false
      })
    }else{
      this.setData({
        'loginData.modalHidden':true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'wuhan1906 再创辉煌!!!',
      path: '/pages/home/home?id=123'
    }
  }
})