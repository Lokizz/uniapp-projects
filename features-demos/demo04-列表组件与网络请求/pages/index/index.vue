<!--
 * @Author: MacLoki
 * @Date: 2022-06-03 00:48:15
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-03 12:01:05
 * @FilePath: /demo04-列表组件与网络请求/pages/index/index.vue
-->
<template>
  <view>
    <uni-list-item
      v-for="(item, idx) in news"
      :key="idx + 1 + ''"
      :title="item.title"
      :note="item.mtime"
      thumbSize="sm"
      showBadge
      :badgeText="idx + 1 + ''"
    >
      <!-- 使用自定义插槽 -->
      <!-- 相对像素: rpx - 把屏幕宽度分成固定的 750rpx -->
      <image
        slot="header"
        :src="item.imgsrc"
        mode="aspectFill"
        class="header-image"
      />
    </uni-list-item>
    <!-- status 一共有三种属性值 more/loading/noMore -->
    <uni-load-more :status="loadStatus" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      news: [],
      loadStatus: 'more',
      pageNum: 1,
    }
  },
  mounted() {
    this.news = []
    this.getData()
  },
  // ! 页面生命周期：监听下拉页面刷新
  onPullDownRefresh() {
    // 刷新时，重新获取第一页数据
    this.news = []
    this.getData()
    // 重置页数
    this.pageNum = 1
    // ! 停止刷新动态效果
    uni.stopPullDownRefresh()
  },
  // ! 页面生命周期: 监听页面触底事件
  onReachBottom() {
    if (this.pageNum > 3) {
      this.loadStatus = 'noMore'
      console.log(this.news)
    } else {
      this.loadStatus = 'loading'
      this.getData()
      this.loadStatus = 'more'
    }
  },
  methods: {
    addNews(res) {
      const data = res.data.T1348647853363.slice(0, 6)
      if (!this.news) {
        this.news = data
      } else {
        this.news = [...this.news, ...data]
        this.pageNum += 1
      }
    },
    getData() {
      // ? 发送网络请求 - 官方提供了 uni.request 接口
      uni.request({
        url: `http://c.m.163.com/nc/article/headline/T1348647853363/${
          this.pageNum * 10 - 10
        }-${this.pageNum * 10}.html`,
        data: {},
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: (res) => {
          this.addNews(res)
        },
        fail: (error) => {},
      })
    },
  },
}
</script>

<style scoped>
.header-image {
  width: 160rpx;
  height: 160rpx;
  margin-right: 16rpx;
}
::v-deep .uni-list-item__content {
  padding-right: 0;
}
</style>
