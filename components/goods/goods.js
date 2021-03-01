// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */

  options:{
    styleIsolation:"isolated"
    //此属性表示页面样式和组件样式不能相互影响，若要相互影响，将属性值设置为shared即可

  },
  properties: {
   goodsimg1:{type:String},
   goodsimg2:{type:String},
   goodsname1:{type:String},
   goodsname2:{type:String },
   price1:{type:String},
   price2:{type:String},
   specs1:{type:String},
   specs2:{type:String},
   remind1:{type:String},
   remind2:{type:String}
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
    toparticulars(){
      wx.navigateTo({
        url: '/pages/particulars/particulars',
      })
      },
  
}
})
