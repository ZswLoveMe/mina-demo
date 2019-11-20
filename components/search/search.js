import {
  keywordModel
} from '../../models/keyword.js'
import {
  BookModel
} from '../../models/bookModel'

import {
  paginationBev
} from '../behaviors/paginationBev'
const keyword = new keywordModel()
const bookModel = new BookModel()
Component({
  behaviors: [paginationBev],
  /**
   * 组件的属性列表
   */
  properties: {
    more: {
      type: String,
      observer: '_loadMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    query: '',
    historyWords: [],
    hotWords: [],
    searching: false,
    loading: false,
    loadingCenter:false
  },
  attached() {
    this._getHistoryWords()
    keyword.getHot().then(res => {
      console.log(res)
      this.setData({
        hotWords: res.hot
      })
    })
  
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _loadMore() {
      if (!this.data.query) return
      if (this.isLocked()) return
      this.locked()
      if (this.hasMore()) {
        bookModel.search(this.getCurrentStart(), this.data.query).then(res => {
          this.setMoreData(res.books)
          this.unLocked()
        }).catch(err =>{
          this.unLocked()
        })
      }else{
        this.unLocked()
      }
    },
    _getHistoryWords(){
      const historyWords = keyword.getHistory()
      this.setData({
        historyWords
      })
    },
    onCancel(event) {
      console.log(event)
      wx.hideLoading()
      this.triggerEvent('cancel', {}, {})
    },
    onClear(event) {
      this.initialize()
      this._getHistoryWords()
      this._closeResult()
    },
    _closeResult(){
      this.setData({
        searching: false,
        query: ''
      })
    },
    inputEdit(event) {
      const query = event.detail.value
      this.setData({
        query
      })
      return query
    },
    onConfirm(ev) {
     this._showLoadingCenter()
      this._showResult()
      this.initialize()
      const query = ev.detail.value || ev.detail.text
      console.log(query)
      bookModel.search(0, query).then(res => {
       this._closeLoadingCenter()
        this.setMoreData(res.books)
        this.setTotal(res.total)
        this.setData({
          query
        })
        keyword.addToHistory(query)
      })
    },
    _showLoadingCenter(){
      this.setData({
        loadingCenter:true
      })
    },
    _closeLoadingCenter(){
      this.setData({
        loadingCenter:false
      })
    },
    _showResult(){
      this.setData({
        searching: true,
      })
    },
  }
})