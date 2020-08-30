import tools from '../../utils/tools.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[]
  },
  // 发送网络请求获取真实数据
  getRequest(){
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:'21'
      },
      success:res=>{
        res.data.forEach(item=>{
          var timestamp  = item.posttime
         const showdate = tools.formatDate(timestamp, 'Y-m-d')
         item.posttime = showdate
        })
        this.setData({
          datalist:res.data
        })
        
      },
      fail:rej=>{
        console.log(数据请求失败+rej); 
      }
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用发送网络请求获取真实数据函数
    this.getRequest()

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