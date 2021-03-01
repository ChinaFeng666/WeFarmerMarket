// pages/foodlist/foodlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   buttons:[
     {id:1,name:'全部'},
     {id:2,name:'冬日进补'},
     {id:3,name:'家常菜'},
     {id:4,name:'冬日暖身汤'},
     {id:5,name:'下饭菜'},
     {id:6,name:'快手菜'}
  ],
  msg:'',
},
ButtonTap:function(e){
    console.log(e)
    let id=e.currentTarget.dataset.id
    console.log(id)
    for(let i=0;i<this.data.buttons.length;i++){
     if(this.data.buttons[i].id==id)
     { //当前点击的位置为true即被选中  
       this.data.buttons[i].checked=true;
     }
      else{
        //其他的位置为false
       this.data.buttons[i].checked=false;
      }
     }
   this.setData({
      buttons:this.data.buttons,
      msg:"id"+id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
 onLoad: function (options) {

        /********* 默认使第一个按钮被选中 **********************/
        this.data.buttons[0].checked = true;
        this.setData({
        buttons: this.data.buttons,
    })
      /*******************************************************/
    
  },
   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '微农市场',
      path: '/pages/foodlist/foodlist'
    }
  }
})