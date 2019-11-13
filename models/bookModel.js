import { HTTP} from '../utils/https.js'
 class BookModel extends HTTP{
    getHotList () {
      return this.postOrGet({ url: 'book/hot_list'})
    }
    getBookCount(){
        return this.postOrGet({url:'book/favor/count'})
    }
}
export {
    BookModel
}