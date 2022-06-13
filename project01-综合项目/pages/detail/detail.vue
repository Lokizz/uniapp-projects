<!--
 * @Author: MacLoki
 * @Date: 2022-06-11 14:55:35
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-12 22:49:18
 * @FilePath: /project01-综合项目/pages/detail/detail.vue
-->
<template>
  <view>
    <swiper autoplay circular @change="currentHandler">
      <swiper-item>
        <image :src="product.pictUrl" class="cover" />
        <view class="current-idx">{{ current }}/{{ total }}</view>
      </swiper-item>
      <swiper-item>
        <image :src="product.pictUrl" class="cover" />
        <view class="current-idx">{{ current }}/{{ total }}</view>
      </swiper-item>
      <swiper-item>
        <image :src="product.pictUrl" class="cover" />
        <view class="current-idx">{{ current }}/{{ total }}</view>
      </swiper-item>
    </swiper>
    <view class="infos">
      <view class="infos__price">
        <text v-if="product" class="currency-sign">¥</text>
        {{ product.Price.slice(0, product.Price.length - 2) }}
      </view>
      <view class="infos__title">{{ product.title }}</view>
      <view class="infos__shop">{{ product.shopTitle }}</view>
    </view>
    <uni-collapse class="recommend-container">
      <uni-collapse-item title="更多商品推荐" showAnimation open>
        <uni-list>
          <uni-list-item
            v-for="(item, idx) in recommendList"
            :key="idx"
            :title="item.title"
            clickable
            showArrow
            :to="getToUrl(item)"
          ></uni-list-item>
        </uni-list>
      </uni-collapse-item>
    </uni-collapse>
    <view class="product-nav-spacing"></view>
    <uni-goods-nav class="product-nav" fill hover-class="btn-active" />
  </view>
</template>
<script>
export default {
  data() {
    return {
      product: {},
      current: 1,
      total: 3,
      recommendList: [],
    }
  },
  onLoad(option) {
    let that = this
    // ? 获取本地缓存数据
    uni.getStorage({
      key: 'recommendList',
      success(res) {
        that.recommendList = res.data
        console.log('get storage data successfully.')
      },
      fail() {
        console.log('get storage failed.')
      },
    })

    this.product = JSON.parse(decodeURIComponent(option.product))
  },
  methods: {
    currentHandler(evt) {
      this.current = evt.detail.current + 1
    },
    getToUrl(productItem) {
      const encodeProduct = encodeURIComponent(JSON.stringify(productItem))
      return `/pages/detail/detail?product=${encodeProduct}`
    },
  },
}
</script>

<style lang="scss">
swiper {
  height: 750rpx;
  swiper-item {
    position: relative;
    .current-idx {
      width: 3em;
      max-height: 2em;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 20rpx;
      right: 20rpx;
      border-radius: 1em;
      font-size: 1em;
      font-weight: bolder;
      color: white;
      background: rgba(0, 0, 0, 0.2);
    }
  }
}
.cover {
  height: 750rpx;
  width: 100%;
}
.infos {
  width: 90vw;
  padding: 0.6rem 0.6rem;
  margin: 0.6rem auto;
  border-radius: 18rpx;
  background: white;
  text-align: justify;

  .infos__title {
    max-width: 100%;
  }
  .infos__shop {
    font-size: 0.8em;
    color: gray;
  }
  .infos__price {
    font-size: 1.8em;
    color: red;
    margin-bottom: 0.2em;
    .currency-sign {
      font-size: 0.8em;
      margin-right: 0.2em;
    }
  }
}

.recommend-container {
  width: 90vw;
  padding: 0.6rem 0.6rem;
  margin: 0.6rem auto;
  border-radius: 18rpx;
}

.product-nav-spacing {
  height: 60px;
}

.product-nav {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  .btn-active {
    opacity: 0.7;
  }
}
</style>
