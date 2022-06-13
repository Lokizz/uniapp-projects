<!--
 * @Author: MacLoki
 * @Date: 2022-06-13 08:12:31
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-13 09:48:42
 * @FilePath: /project01-综合项目/pages/room-detail/room-detail.vue
-->
<template>
  <view v-if="rooms">
    <uni-grid
      :column="2"
      :showBorder="false"
      :square="false"
      :highlight="false"
    >
      <uni-grid-item v-for="(item, idx) in rooms" :key="idx">
        <view
          class="room-cover"
          :style="{ marginLeft: idx % 2 === 0 ? '10rpx' : '5rpx' }"
        >
          <image class="cover" :src="item.roomSrc" />
          <view class="host-infos">
            <image :src="item.avatar" class="avatar" />
            <text>{{ item.nickname }}</text>
          </view>
        </view>
        <view class="room-name">{{ item.roomName }}</view>
      </uni-grid-item>
    </uni-grid>
    <uni-load-more :status="loadStatus" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      /* #ifdef H5 */
      url: '/api/room/list',
      /* #endif */
      /* #ifndef H5 */
      url: 'https://m.douyu.com/api/room/list',
      /* #endif */
      shortName: '',
      rooms: null,
      loadStatus: 'more',
      pageNo: 1,
    }
  },
  onPullDownRefresh() {
    const shortName = this.shortName
    uni.request({
      url: this.url,
      data: { page: 1, type: shortName },
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      method: 'GET',
      sslVerify: true,
      success: ({ data, statusCode, header }) => {
        this.rooms = data.data.list
        this.getMore()
        uni.stopPullDownRefresh()
      },
      fail: (error) => {},
    })
  },
  onReachBottom() {
    this.getMore()
  },
  onLoad(options) {
    uni.setNavigationBarTitle({
      title: options.tag_name,
    })
    this.shortName = options.short_name
  },
  mounted() {
    this.getData()
  },
  methods: {
    getMore() {
      const { nowPage, pageCount } = this.rooms
      if (nowPage === pageCount) {
        this.loadStatus = 'noMore'
        return
      }

      this.loadStatus = 'loading'
      uni.request({
        url: '',
        data: { page: nowPage + 1, type: this.short_name },
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          const newRooms = [...this.rooms, ...data.data.list]
          console.log(newRooms)
          this.rooms = newRooms
        },
        fail: (error) => {},
      })
    },
    getData() {
      const shortName = this.shortName
      uni.request({
        url: this.url,
        data: { page: 1, type: shortName },
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.rooms = data.data.list
          this.getMore()
        },
        fail: (error) => {},
      })
    },
  },
}
</script>

<style lang="scss">
uni-grid {
  display: flex;
  justify-content: space-around;
  uni-grid-item {
    width: 360rpx;
  }
}
.room-cover {
  position: relative;
  width: 360rpx;
  image.cover {
    width: 360rpx;
    height: 220rpx;
    display: block;
  }
  .host-infos {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 8rpx 12rpx;
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 0.8em;
    image.avatar {
      width: 32rpx;
      height: 32rpx;
      border-radius: 50%;
      margin-right: 8rpx;
    }
  }
}
.room-name {
  font-size: 0.8em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 20rpx;
}
</style>
