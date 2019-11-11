// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc:'./image/triangle@left.png',
    disLeftSrc:'./image/triangle.dis@left.png',
    rightSrc:'./image/triangle@right.png',
    disRightSrc:'./image/triangle.dis@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(ev){
      if(this.properties.first){
        return
      }
      this.triggerEvent('left',{},{})
    },
    onRight(ev){
      if(this.properties.latest){
        return
      }
      this.triggerEvent('right',{},{})
    }
  },
  attached(){

  }
})
