// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      observer:function(){
      }
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeUrl:'./images/like.png',
    noLikeUrl:'./images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(ev){
      let like = this.properties.like
      let count = this.properties.count
      count = !like? count+1 : count -1 
      this.setData({
        like: !like,
        count:count
      })
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior
      }, { bubbles:true})

    }
  }
})
 