// components/classic/music/index.js
import { classicBeh } from '../classic-behavior.js'
// 获取音乐管理对象

// properties(Read only)(duration,currentTime,paused,buffered)
// properties(src(m4a, aac, mp3, wav),startTime,title,epname,singer,coverImgUrl,webUrl,protocol)
const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  properties:{
    src:String,
    title:String
  },
  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc:'./images/player@pause.png',
    playSrc:'./images/player@play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onplay:function(){
      let playing = this.data.playing
      console.log(this.properties.src)
      if(!playing){
        this.setData({
          playing:!playing
        })
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
      }else{
        this.setData({
          playing:!playing
        })
        mMgr.pause()
      }
    

    }
  }
})
