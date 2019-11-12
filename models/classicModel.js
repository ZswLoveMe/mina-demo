import { HTTP} from '../utils/https.js'

export class Classic extends HTTP {
  getLatest() {
    return new Promise((resolve, reject) =>{
      this.request({
        url: 'classic/latest',
        success: (res) => {
          let key = this._getKey(res.index)
          wx.setStorageSync(key, res)
          this._setLatestIndex(res.index)
          resolve(res)
        },
        err:(err) =>{
          console.log(err)
        }
      })
    })
 }
 getClassic(index,nextOrPrevious){
     return new Promise((resolve, reject) => {
       let url = 'classic/' + index + (nextOrPrevious === 'next' ? '/previous' : '/next')
       let key = nextOrPrevious === 'next' ? this._getKey(index - 1) : this._getKey(index + 1)
       let classic = wx.getStorageSync(key)
       if(!classic){
         this.request({
           url: url,
           success: (res) => {
             // 写入缓存
             wx.setStorageSync(this._getKey(res.index), res)
             resolve(res)
           },
           err: (err) => {
             reject(err)
           }
         })
       }else{
         resolve(classic)
       }
     })

  
 }
_getKey(index){
  const key = 'classic-' + index
  return key
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
  _getKey(index) {
    const key = 'classic-' + index
    return key
  }
}