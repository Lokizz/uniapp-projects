<!--
 * @Author: MacLoki
 * @Date: 2022-06-06 11:29:43
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-12 22:49:24
 * @FilePath: /project01-综合项目/pages/home/home.vue
-->
<template>
  <view v-if="products">
    <!-- * 导航条 -->
    <uni-notice-bar :text="notice" single scrollable showIcon :speed="60" />
    <!-- * 轮播图 -->
    <uni-swiper-dot
      mode="nav"
      :info="carouselItems"
      :current="bannerCurrent"
      field="sub"
    >
      <swiper autoplay @change="bannerChange" class="carousel-container">
        <swiper-item
          v-for="(item, idx) in carouselItems"
          :key="idx"
          @click="goDetails(item.id)"
        >
          <image class="carousel-item" :src="item.pictUrl" mode="scaleToFill" />
        </swiper-item>
      </swiper>
    </uni-swiper-dot>

    <!-- * 产品展示 -->
    <view v-for="(v, k) in items" :key="k">
      <view class="rec-container">
        <uni-icons type="shop" size="24" />
        <text>{{ v.title }}</text>
      </view>

      <uni-grid
        :column="2"
        @change=""
        :showBorder="false"
        :square="false"
        class="product-container"
      >
        <uni-grid-item
          class="product-item-container"
          v-for="(item, idx) in v.data"
          :key="idx"
        >
          <view class="product-item">
            <image
              :src="item.pictUrl"
              mode="aspectFill"
              class="product-item__cover"
            />
            <view class="product-item__infos">
              <view class="infos-title">{{ item.title }}</view>
              <view class="infos-shop">{{ item.shopTitle }}</view>
              <view class="infos-price">¥{{ item.Price }}</view>
              <button
                class="infos-details-btn"
                hover-class="button-hover"
                type="primary"
                size="mini"
                @click="goDetails(item.id)"
              >
                查看详情
              </button>
            </view>
          </view>
        </uni-grid-item>
      </uni-grid>
    </view>

    <!-- * 底部组件 -->
    <uni-grid
      :column="4"
      class="features-footer"
      :showBorder="false"
      :highlight="false"
    >
      <uni-grid-item>
        <view class="features-item">
          <image src="/static/icons/quality.png" mode="aspectFill" />
          <text>品质保障</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="features-item">
          <image src="/static/icons/customized.png" mode="aspectFill" />
          <text>私人定制</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="features-item">
          <image src="/static/icons/exclusive.png" mode="aspectFill" />
          <text>学员特供</text>
        </view>
      </uni-grid-item>
      <uni-grid-item>
        <view class="features-item">
          <image src="/static/icons/privilege.png" mode="aspectFill" />
          <text>专属特权</text>
        </view>
      </uni-grid-item>
    </uni-grid>

    <!-- * 返回顶部 -->
    <view
      v-if="showGoTop"
      class="go-top"
      @click="goTop"
      hover-class="go-top-active"
      >↑</view
    >
  </view>
</template>

<script>
export default {
  data() {
    return {
      products: null,
      carouselItems: [],
      bannerCurrent: 0,
      /* #ifdef H5 */
      notice: 'H5 - Uniapp 条件编译显示（ H5 专用内容）',
      /* #endif */
      /* #ifndef H5 */
      notice: '非 H5 - Uniapp 条件编译显示（非 H5 设备显示内容）',
      /* #endif */
      showGoTop: false,
      /* #ifdef H5 */
      url: '/tbsp/',
      /* #endif */
      /* #ifndef H5 */
      url: 'https://api.iyk0.com/tbsp/',
      /* #endif */
    }
  },
  computed: {
    items() {
      return [
        { title: '1F/首页推荐', data: this.products },
        { title: '2F/热销单品', data: this.products },
        { title: '3F/最新上架', data: this.products },
      ]
    },
  },
  mounted() {
    this.getData()
  },
  onReachBottom() {
    this.showGoTop = true
  },
  methods: {
    getData() {
      uni.request({
        url:
          this.url +
          '?msg=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&n=&type=json',
        data: {},
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.products = data.data
          this.carouselItems = data.data.slice(0, 4)
          // 添加轮播图的标题
          this.carouselItems.forEach((item) => {
            item.sub = item.title.substring(0, 11)
          })
        },
        fail: (error) => {},
      })
    },
    bannerChange(e) {
      this.bannerCurrent = e.detail.current
    },
    goTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
        success: (success) => {
          this.showGoTop = false
        },
      })
    },
    goDetails(productId) {
      const url = `../webview/webview?productId=${productId}`
      uni.navigateTo({
        url,
        success: (res) => {},
      })
    },
  },
}
</script>

<style lang="scss">
.carousel-container {
  width: 100%;
  height: 98vw;
}
.carousel-item {
  width: 100%;
  height: 100vw;
}

.rec-container {
  display: flex;
  align-items: center;
  padding: 12rpx 8rpx;
  color: white;
  background-color: skyblue;
  text:nth-child(2) {
    margin-left: 8rpx;
  }
}

::v-deep .uni-grid {
  width: 100vw;
  justify-content: space-evenly;
  .product-item-container {
    width: 48vw !important;
    margin-bottom: 1rem;
    box-shadow: 0rpx 2rpx 16rpx rgba(0, 0, 0, 0.1);
    .product-item {
      .product-item__cover {
        width: 48vw;
        height: 48vw;
      }
      .product-item__infos {
        padding: 4rpx 8rpx 16rpx;
        .infos-title {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .infos-shop {
          font-size: 0.8em;
          color: gray;
        }
        .infos-price {
          color: purple;
          font-weight: 600;
        }
        .button-hover {
          opacity: 0.6;
        }
      }
    }
  }
}

.features-footer {
  .features-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: grey;
    image {
      width: 80rpx;
      height: 80rpx;
      margin-bottom: 10rpx;
    }
  }
}

.go-top {
  position: fixed;
  bottom: 120rpx;
  right: 20rpx;
  font-size: 2em;
  border-radius: 50%;
  width: 80rpx;
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 1px 3px 8px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.go-top-active {
  opacity: 0.7;
}
</style>
