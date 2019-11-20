import {
    HTTP
} from '../utils/https.js'
export class keywordModel extends HTTP {
    key = 'q'
    maxLength = 10
    getHistory() {
      return wx.getStorageSync(this.key);
    }

    getHot() {
        return this.postOrGet({
            url: '/book/hot_keyword'
        })
    }
    addToHistory(keyWord) {
        let words = this.getHistory() || []
        console.log(keyWord)
        const has = words.includes(keyWord)
        console.log(has)
        if (!has) {
            if (words.length > this.maxLength) {
                words.pop()
            }
            words.unshift(keyWord)
            wx.setStorageSync(this.key, words);
        }else{
          var postion = words.indexOf(keyWord)
          console.log(postion)
          var tmp = words[0]
          words[0] = keyWord
          words[postion] = tmp
          wx.setStorageSync(this.key, words);
        }
    }
}