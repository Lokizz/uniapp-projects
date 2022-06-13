<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-05 01:08:35
 * @FilePath: /demo07-跨域与条件编译/pages/index/index.vue
-->
<template>
  <view>
    <uni-grid
      :column="2"
      @change=""
      :square="false"
      :showBorder="false"
      :highlight="false"
    >
      <uni-grid-item
        v-for="(item, idx) in data.list"
        :key="item.rid"
        :index="idx"
        :style="{ marginLeft: idx % 2 === 0 ? '10rpx' : '5rpx' }"
      >
        <view class="room-container">
          <view class="room-cover">
            <image :src="item.roomSrc" mode="aspectFill" />
            <view class="room-popularity">{{ item.hn }}</view>
            <view class="room-host">
              <image :src="item.avatar" mode="scaleToFill" />
              <text>{{ item.nickname }}</text>
            </view>
          </view>
          <view class="room-title">{{ item.roomName }}</view>
        </view>
      </uni-grid-item>
    </uni-grid>
    <uni-load-more :status="loadStatus"></uni-load-more>
    <button class="toTop-btn" @click="toTop" size="mini">回到顶部</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // ! 条件编译：uniapp 开发的代码需要能够编译到 H5 APP 小程序 3种平台
      // 使用条件编译 - 利用特殊的格式，让 uniapp 识别出代码是给哪个平台编写的
      /* #ifndef H5 */
      url: 'https://m.douyu.com/api/room/list',
      /* #endif */
      /* #ifdef H5 */
      url: '/douyu/api/room/list',
      /* #endif */
      roomList: [],
      data: {},
      loadStatus: 'more',
      pageNo: 1,
    }
  },
  onPullDownRefresh() {
    this.data = {}
    this.getData()
    uni.stopPullDownRefresh()
  },
  onReachBottom() {
    this.getMore()
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      uni.request({
        url: this.url,
        data: { type: 'TVgame', page: 1 },
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.data = data.data
          // ! 避免大屏手机加载8个无法触发上拉钩子函数
          this.getMore()
        },
        fail: (error) => {},
      })
    },
    getMore() {
      const { nowPage, pageCount } = this.data
      // 达到最大页数直接退出
      if (nowPage === pageCount) return
      this.loadStatus = 'loading'

      uni.request({
        url: this.url,
        data: { type: 'TVgame', page: this.data.nowPage + 1 },
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          data.data.list = [...this.data.list, ...data.data.list]
          this.data = data.data
          const { nowPage, pageCount } = this.data
          // 达到最大页数则不再加载
          this.loadStatus = nowPage === pageCount ? 'noMore' : 'more'
        },
        fail: (error) => {},
      })
    },
    toTop() {
      uni.pageScrollTo({
        scrollTop: 0,
      })
    },
  },
}
</script>

<style lang="scss">
::v-deep .uni-grid-item {
  width: 350rpx !important;
  .room-container {
    width: 350rpx;

    .room-cover {
      width: 350rpx;
      position: relative;
      border-radius: 6rpx;
      overflow: hidden;
      uni-image {
        width: 350rpx;
        height: 260rpx;
        border-radius: 6rpx;
        display: block;
      }
      .room-popularity {
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 2rpx;
        font-size: 0.8em;
      }
      .room-host {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        border-radius: 4rpx;
        background-color: rgba(0, 0, 0, 0.5);
        padding-right: 6rpx;
        uni-image {
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
          display: inline-block;
          margin: 6rpx;
        }
        uni-text {
          color: white;
          font-size: 0.8em;
        }
      }
    }
    .room-title {
      font-size: 0.8em;
      margin-bottom: 10rpx;
      line-clamp: 1;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
}
.toTop-btn {
  position: sticky;
  bottom: 30rpx;
  right: 8rpx;
  // opacity: 0.4;
}
.toTop-btn:hover {
  opacity: 1;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
