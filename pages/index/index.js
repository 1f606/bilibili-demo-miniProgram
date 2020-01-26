Page({
  data: {
    navList: [],
    curNavIndex: 0,
    swiperList: [],
    videoList: []
  },
  onLoad() {
    this.getNavList()
    this.getSwiperList()
    this.getVideoList()
    // console.log(this.videoList)
  },
  /**
   * 獲取導航數據
   */
  getNavList () {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success: data => {
        if (data.data.code === 0) {
          // console.log(data.data.data.navList)
          this.setData({
            navList: data.data.data.navList
          })
        }
      },
      fail: e => {
        console.log(e)
      }
    })
  },
  activeScrollItem (e) {
    this.setData({
      curNavIndex: e.target.dataset.index
    })
  },
  getSwiperList () {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success: data => {
        // console.log(data.data.code)
        if (data.data.code === 0) {
          this.setData({
            swiperList: data.data.data.swiperList
          })
        }
      }
    })
  },
  getVideoList () {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success: data => {
        // console.log(data.data.data.videosList)
        this.setData({
          videoList: data.data.data.videosList
        })
      }
    })
  }
})