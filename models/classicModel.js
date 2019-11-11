import { HTTP} from '../utils/https.js'

export class Classic extends HTTP {
  getLatest() {
    return new Promise((resolve, reject) =>{
      this.request({
        url: 'classic/latest',
        success: (res) => {
          this._setLatestIndex(res.index)
          resolve(res)
        },
        err:(err) =>{
          console.log(err)
        }
      })
    })
 }
 getPrevious(index){
   return new Promise((resolve,reject) => {
     this.request({
       url:'classic/'+index+'/previous',
       success:(res)=>{
         resolve(res)
       },
       err: (err)=>{
          reject(err)
       }
     })
   })
 }
 isFirst(index){
   return index === 1 ? true: false
 }
 isLatest(index){ 
   let latesIndex = this._getLatestIndex()
   return index === latesIndex ? true :false
 }
  _setLatestIndex(index){
    wx.setStorageSync('lates',index)
  }
  _getLatestIndex() {
    let index = wx.getStorageSync('lates')
    return index
  }
}