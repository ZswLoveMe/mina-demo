// pages/book/book.js
import {
  BookModel
} from '../../models/bookModel'
import {random} from '../../utils/common'
const bookModel = new BookModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[],
    searching:false,
    more:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bookModel.getHotList().then(res =>{
      this.setData({
        bookList:res
      })
    })
  },
  openSearch:function(ev){
    console.log(ev)
    this.setData({
      searching:true
    })
  },
  onCancel:function(ev){
    console.log(ev)
    this.setData({
      searching:false
    })
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
    console.log(123)
    this.setData({
      more:random(16)
    })
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})