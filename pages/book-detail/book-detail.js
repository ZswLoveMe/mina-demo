// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/bookModel'

import {
  LikeModel
} from '../../models/likeModel'

const bookModel = new BookModel()
const likeModel = new LikeModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    let bid = options.bid
    console.log(bid)
    let detail = bookModel.getBookDetail(bid)
    let comments = bookModel.getBookComment(bid)
    let likeStatus = bookModel.getBookFavor(bid)
    Promise.all([detail, comments, likeStatus]).then(res => {
      console.log(res)
      this.setData({
        book: res[0],
        comments: res[1],
        likeStatus: res[2].like_status,
        likeCount: res[2].fav_nums
      })
      wx.hideLoading()
    })

  },
  onLike(event) {
    const like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },
  onFakePost() {
    this.setData({
      posting: !this.data.posting
    })
  },
  onTapping(ev) {
    const comment = ev.detail.text
    console.log(comment)
    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
      return
    }
    bookModel.postComment(this.data.book.id, comment).then(res => {
      console.log(res)
      wx.showToast({
        title: '+ 1',
        icon: 'none'
      })
      console.log(this.data.comments.comments)
      this.data.comments.comments.unshift({
        content: comment,
        nums: 1
      })
      this.setData({
        'comments.comments': this.data.comments.comments,
        posting: false
      })
    })

  },
  onCancel() {
    this.setData({
      posting: false
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})