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
  attached: function() {
    // 在组件实例进入页面节点树时执行
    this._recoverStatus()
    this._monitorSwitch()
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onplay:function(){
      let playing = this.data.playing
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
    },
    /* 恢复状态 */
    _recoverStatus(){
        if(mMgr.paused){
          this.setData({
            playing:false
          })
          return
        }
        if(mMgr.src === this.properties.src){
          this.setData({
            playing:true
          })
        }
    },
    _monitorSwitch:function(){
      mMgr.onPlay(()=>{
          this._recoverStatus()
      })
      mMgr.onPause(()=>{
          this._recoverStatus()
      })
      mMgr.onStop(()=>{
          this._recoverStatus()
      })
      mMgr.onEnded(()=>{
          this._recoverStatus()
      })

    }
  }
})
