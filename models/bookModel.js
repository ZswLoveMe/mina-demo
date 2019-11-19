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
    postComment(id,comment){
        return this.postOrGet({
            url:'book/add/short_comment',
            method:'POST',
            data:{
                book_id:id,
                content:comment
            }
        })
    }
    search(start, q){
        return this.postOrGet({
            url:'book/search?summary=1',
            data:{
                q:q,
                start:start
            }
        })
    }
}
export {
    BookModel
}