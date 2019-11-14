import { HTTP} from '../utils/https.js'
 class BookModel extends HTTP{
    getHotList () {
      return this.postOrGet({ url: 'book/hot_list'})
    }
    getBookCount(){
        return this.postOrGet({url:'book/favor/count'})
    }
    getBookDetail(id){
        return this.postOrGet({url:`book/${id}/detail`})
    }
    getBookFavor(id){
        return this.postOrGet({url:`book/${id}/favor`})   
    }
    getBookComment(id){
        return this.postOrGet({url:`book/${id}/short_comment`})   
    }
}
export {
    BookModel
}