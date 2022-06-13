<!--
 * @Author: MacLoki
 * @Date: 2022-06-06 11:29:53
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-12 20:11:07
 * @FilePath: /project01-综合项目/pages/category/category.vue
-->
<template>
  <view>
    <uni-list>
      <uni-list-item
        class="product-container"
        v-for="(item, idx) in data"
        :key="item.id"
        showArrow
        clickable
        @click="goDetail(idx)"
      >
        <image
          class="product-cover"
          slot="header"
          :src="item.pictUrl"
          mode="aspectFill"
        />
        <view class="product-infos" slot="body">
          <view class="product-title-container">
            <view class="product-title">
              {{ item.title }}
            </view>
            <view class="product-subtitle">{{ item.shopTitle }}</view>
          </view>
          <view class="product-price">¥{{ item.Price }}</view>
        </view>
      </uni-list-item>
    </uni-list>
    <uni-load-more :status="loadStatus" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      currentPageNo: 0,
      maxPageNo: 5,
      loadStatus: 'more',
      /* #ifdef H5 */
      url: '/tbsp/',
      /* #endif */
      /* #ifndef H5 */
      url: 'https://api.iyk0.com/tbsp/',
      /* #endif */
    }
  },
  mounted() {
    this.loadStatus = 'loading'
    this.getData()
    this.loadStatus = 'more'
  },
  onReachBottom() {
    this.loadStatus = 'loading'
    if (this.currentPageNo === this.maxPageNo)
      return (this.loadStatus = 'noMore')
    this.getData()
    this.loadStatus = 'more'
    this.currentPageNo++
  },
  onPullDownRefresh() {
    this.getData()
    uni.stopPullDownRefresh({})
  },
  methods: {
    goDetail(idx) {
      const productDetail = this.data[idx]
      const recommendList = this.data.slice(10, 16)
      uni.navigateTo({
        url:
          '../detail/detail?product=' +
          encodeURIComponent(JSON.stringify(productDetail)),
        success(res) {
          // ! 通过 eventChannel 向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', {
            recommendList,
          })
        },
      })
    },
    getData() {
      uni.request({
        url: this.url,
        data: {
          msg: 'macbook',
          type: 'json',
        },
        method: 'GET',
        success: ({ data, statusCode, header }) => {
          if (data?.data) {
            this.data = [...this.data, ...data.data]
            uni.setStorage({
              key: 'recommendList',
              data: this.data.slice(10, 17),
              success() {
                console.log('Storage set successfully.')
              },
            })
          }
        },
        fail: (error) => {},
      })
    },
    resetData() {
      this.data = []
      this.currentPageNo = 0
      this.loadStatus = 'more'
    },
  },
}
</script>

<style lang="scss">
.product-container {
  .product-cover {
    width: 200rpx;
    height: 200rpx;
    min-width: 200rpx;
    margin-right: 12px;
  }
  .product-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .product-title {
      line-clamp: 2;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .product-subtitle {
      font-size: 0.8em;
      color: #353535;
    }
    .product-price {
      color: red;
      font-weight: bolder;
    }
  }
}
</style>
