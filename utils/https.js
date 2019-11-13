import {config} from '../config.js'

let tips = {
  1:'抱歉 出现了一个错误',
  1005:'appkey 无效 请先注册',
  3000:'期刊不存在'
}

export class HTTP{
  request(params){
    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: config.api_base_url+params.url,
      method: params.method,
      header:{
        "appkey": config.appKey,
        "content-Type":"application/json"
      },
      data: params.data,
      success:(res)=> {
        let code = res.statusCode.toString()
        if(code.startsWith("2")){
          params.success && params.success(res.data);
        } else{
          let errCode = res.data.error_code
          this._show_error(errCode)
        }  
      },
      fail:(err) => {
        params.err && params.err(err)
        this._show_error()
      }
  })
  }
  postOrGet({url,data ={},method ="GET"}){
      return new Promise((resolve,reject) => {
          this._request(url,data,method,resolve,reject)
      })
  }
  _request(url,data ={},method ="GET",resolve,reject){
    wx.request({
      url: config.api_base_url+url,
      method:method,
      header:{
        "appkey": config.appKey,
        "content-Type":"application/json"
      },
      data:data,
      success:(res)=> {
        let code = res.statusCode.toString()
        if(code.startsWith("2")){
          resolve(res.data);
        } else{
          let errCode = res.data.error_code
          this._show_error(errCode)
        }  
      },
      fail:(err) => {
        reject(err)
        this._show_error()
      }
  })
  }
  _show_error(error_code = 1){
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
 }