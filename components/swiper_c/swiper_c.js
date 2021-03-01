// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    styleIsolation:"shared"
    //此属性表示组件样式和页面样式可以相互影响，若要设置组件样式不能影响页面样式，页面样式可以影响此组件样式，将属性值设置为apply-shared即可
  },
  properties: {
    imgSrc1:{ // 图片url
      type: String,
      value: ''
    },
    imgSrc2:{ // 图片url
      type: String,
      value: ''
    },
    imgSrc3:{ // 图片url
      type: String,
      value: ''
    }
  },
 
  /**
   * 组件的初始数据
   */
  data: {

  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },


  /**
   * 组件的方法列表
   */
  methods: {
    jumpad1(){
      wx.navigateTo({
        url: '/pages/advertise_1/advertise_1',
      })
     },
  
  }
})
