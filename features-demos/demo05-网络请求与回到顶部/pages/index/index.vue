<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-04 13:32:10
 * @FilePath: /demo05-网络请求与回到顶部/pages/index/index.vue
-->
<template>
  <view>
    <uni-list>
      <uni-list-item v-for="item in products" :key="item.pid">
        <!-- 自定义图片 -->
        <image
          slot="header"
          class="header-image"
          :src="item.img"
          mode="scaleToFill"
        />
        <!-- 自定义底部价格 -->
        <view slot="body" class="body">
          <view class="product-title">{{ item.title }}</view>
          <view class="product-price">￥{{ item.price }}</view>
        </view>
      </uni-list-item>
    </uni-list>
    <uni-load-more :status="loadStatus" />
    <!-- 回到顶部按钮 -->
    <button type="primary" size="mini" class="toTop-btn" @click="goTop">
      回到顶部
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: 'http://127.0.0.1:4523/mock/1073482/products',
      products: [],
      loadStatus: 'more',
      pageNo: 1,
    }
  },
  methods: {
    goTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
      })
    },
    getData() {
      uni.request({
        url: this.url,
        data: {},
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.products = [...this.products, ...data]
        },
        fail: (error) => {},
      })
    },
  },
  mounted() {
    this.getData()
  },
  // ? 监听页面的下拉刷新事件
  onPullDownRefresh() {
    console.log('pulldown refresh fired...')
    this.products = []
    this.pageNo = 1
    // 重新获取数据
    this.products = this.getData()
    // 去除刷新特效
    uni.stopPullDownRefresh()
  },
  // ? 监听页面的触底事件
  async onReachBottom() {
    if (this.pageNo > 5) return (this.loadStatus = 'noMore')
    this.loadStatus = 'loading'
    await this.getData()
    this.loadStatus = 'more'
    this.pageNo += 1
  },
}
</script>

<style scoped>
::v-deep .header-image {
  min-width: 160rpx;
  width: 160rpx;
  height: 160rpx;
  margin-right: 8px;
}
.body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.product-price {
  font-size: 1.1rem;
  color: rebeccapurple;
}

.toTop-btn {
  position: fixed;
  bottom: 24rpx;
  right: 8rpx;
  opacity: 0.3;
  transition: opacity 300 linear;
}

.toTop-btn:hover {
  opacity: 1;
}
</style>
