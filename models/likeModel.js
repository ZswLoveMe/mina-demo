import { HTTP } from "../utils/https";

export class LikeModel extends HTTP {
    like(behavior, artId, category) {
        let url = behavior === 'cancel' ? 'like/cancel' : 'like'
        console.log(url)
        this.request({
            url: url,
            method: 'POST',
            data: {
                "art_id": artId,
                "type": category
            },
            success: (res) => {
                console.log(res)
            },
            err: (err) => {
                console.log(err)
            }
        })
    }
    
  getClassicLikeStatus(artId, category) {
      return new Promise((resolve,reject) =>{
        let url = "classic/"+category+"/"+artId+'/favor' 
        this.request({
          url: url,
          success: (res) => {
            resolve(res)
          },
          err: (err) => {
            reject(err)
          }
        })
      })
  }
    
}