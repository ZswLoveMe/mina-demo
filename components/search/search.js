// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    query:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event){
      this.triggerEvent('cancel',{},{})
    },
    onClear(ev){
        console.log(ev)
    }
  }
})
