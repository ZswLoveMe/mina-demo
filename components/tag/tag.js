// components/tag/tag.js
Component({
  options:{
    multipleSlots:true
  },  
  externalClasses:['tag-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text:String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(ev){
      // 出发自定义事件
      this.triggerEvent('tapping', { text: this.properties.text},{})
    }
  }
})
