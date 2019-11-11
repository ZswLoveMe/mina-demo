import { HTTP} from '../utils/https.js'

export class Classic extends HTTP {
  getLatest() {
    return new Promise((resolve, reject) =>{
      this.request({
        url: 'classic/latest',
        success: (res) => {
          resolve(res)
        },
        err:(err) =>{
          console.log(err)
        }
      })
    })
 }
}