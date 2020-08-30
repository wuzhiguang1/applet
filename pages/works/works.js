// pages/works/works.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workLists:[],
    workTitleLists:[]

  },
// 请求数据函数
getRequest(){
  wx.request({
    url: 'https://ku.qingnian8.com/school/works.php',
    data:{
      num:"28",
    },
    success:res=>{
      this.setData({
        workLists: res.data
      })
    }

  })
},
getTitleRequest(){
  wx.request({
    url: 'https://ku.qingnian8.com/school/infoclass.php',
    success:res=>{
      this.setData({
        workTitleLists: res.data
      })
    }

  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getRequest()
   this.getTitleRequest()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  }
})