// components/itemimge/itemimge.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    styleIsolation:"isolated"
    //此属性表示页面样式和组件样式不能相互影响，若要相互影响，将属性值设置为shared即可

  },

  properties: {
    img1: {
      type: String,
      
    },
   
    img2: {
      type: String,
     
    },
   
    img3: {
      type: String,
      
    },
    img4: {
      type: String,
     
    },
    title1:String,
    title2:String,
    title3:String,
    title4:String,
    text1:String,
    text2:String,
    text3:String
    
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
    jumpds(){
      wx.navigateTo({
        url: '/pages/dayspecial/dayspecial',
      })
     },
     jumpdv(){
      wx.navigateTo({
        url: '/pages/dayvegetable/dayvegetable',
      })

     },
     
  }
})
