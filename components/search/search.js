import {keywordModel} from '../../models/keyword.js'
import {BookModel} from '../../models/bookModel'
const keyword = new keywordModel()
const bookModel = new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    query:'',
    historyWords:[],
    hotWords:[],
    dataArray:[],
    searchinga:false
  },
  attached(){
      const historyWords = keyword.getHistory()
      keyword.getHot().then(res =>{
        console.log(res)
        this.setData({hotWords:res.hot})
      })
      this.setData({historyWords})
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event){
      console.log(event)
      this.triggerEvent('cancel',{},{})
    },
    onClear(event){
      this.setData({
        query:''
      })
    },
    onConfirm(ev){
      this.setData({
        searchinga:true
      })
      const word  = ev.detail.value
      bookModel.search(0,word).then(res =>{
        console.log(res)
          this.setData({
            dataArray:res.books
          })
          keyword.addToHistory(word)
      })

    },
   
  }
})
