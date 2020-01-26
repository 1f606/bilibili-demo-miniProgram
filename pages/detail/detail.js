// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    oneLineEllip: false,
    recommendVideoList: [],
    commentList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const videoId = options.id
    this.getVideo(videoId)
    this.getRecommendVideoList()
    this.getCommentList(videoId)
  },
  getVideo (id) {
    // console.log(id)
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + id,
      success: data => {
        // console.log(data)
        if (data.data.code === 0) {
          this.setData({
            videoInfo: data.data.data.videoInfo
          })
        }
        
      }
    })
  },
  showFullTitle () {
    this.setData({
      oneLineEllip: !this.data.oneLineEllip
    })
  },
  getRecommendVideoList () {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList',
      success: data => {
        // console.log(data.data.data.othersList)
        this.setData({
          recommendVideoList: data.data.data.othersList
        })
      }
    })
  },
  getCommentList (id) {
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + id,
      success: data => {
        // console.log(data.data.data.commentData.commentList)
        this.setData({
          commentList: data.data.data.commentData.commentList
        })
      }
    })
  }
})