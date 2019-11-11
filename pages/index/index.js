//index.js
import {
  Classic
} from '../../models/classicModel.js'
import {
  LikeModel
} from '../../models/likeModel.js'
let classic = new Classic()
let likeModel = new LikeModel()
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: true,
    latest: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    classic.getLatest().then(res => {
      if (res.id) {
        this.setData({
          classicData: res
        })
      }
    })
  },
  onLike: function (ev) {
    let behavior = ev.detail.behavior
    likeModel.like(
      behavior,
      this.data.classicData.id,
      this.data.classicData.type
    )
  },

  onRight: function (ev) {
    console.log(ev)

  },
  onLeft: function (ev) {
    console.log(ev)
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