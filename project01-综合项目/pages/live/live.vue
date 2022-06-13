<template>
  <view>
    <!-- 折叠栏组件 -->
    <uni-collapse v-if="categories">
      <uni-collapse-item :title="categories[current].cate_name">
        <view style="background-color: white; display: flex; flex-wrap: wrap">
          <uni-tag
            style="margin: 10rpx"
            v-for="(item, idx) in categories"
            :key="idx"
            :text="item.cate_name"
            size="normal"
            :type="tapType(idx)"
            @click="tagClick(idx)"
          />
        </view>
      </uni-collapse-item>
    </uni-collapse>
    <uni-grid
      class="category-container"
      :column="3"
      @change=""
      :showBorder="false"
      :square="false"
      :highlight="false"
    >
      <uni-grid-item
        v-for="(item, idx) in rooms"
        :key="idx"
        class="category-item-container"
      >
        <view
          style="
            display: flex;
            flex-direction: column;
            margin-top: 15rpx;
            align-items: center;
          "
        >
          <navigator :url="getDetailUrl(item)" hover-class="hover-active">
            <image
              style="width: 220rpx; height: 220rpx"
              :src="item.icon_name"
            />
          </navigator>
          <text>{{ item.tag_name }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      /* #ifdef H5 */
      url: {
        getColumnList: '/api/v1/getColumnList',
        getColumnDetail: '/api/v1/getColumnDetail',
        getRoomsList: '/room/list',
      },
      /* #endif */
      /* #ifndef H5 */
      url: {
        getColumnList: 'https://capi.douyucdn.cn/api/v1/getColumnList',
        getColumnDetail: 'https://capi.douyucdn.cn/api/v1/getColumnDetail',
        getRoomsList: 'https:/m.douyu.com/api/room/list',
      },
      /* #endif */
      categories: null,
      rooms: null,
      current: 0,
    }
  },
  mounted() {
    this.getCategories()
  },
  methods: {
    getDetailUrl(item) {
      const { short_name, tag_name } = item
      return `/pages/room-detail/room-detail?short_name=${short_name}&tag_name=${tag_name}`
    },
    tapType(idx) {
      return idx === this.current ? 'error' : 'primary'
    },
    tagClick(idx) {
      this.current = idx
      this.getRooms(idx)
      console.log(this.getRooms)
    },
    categoryClick() {},
    // ? 获取房间数据
    getRooms(idx) {
      const shortName = this.categories[idx].short_name
      uni.request({
        url: this.url.getColumnDetail,
        data: { shortName },
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.rooms = data.data.slice(0, 100)
          console.log(this.rooms)
        },
        fail: (error) => {},
      })
    },
    // ? 获取分类数据
    getCategories() {
      uni.request({
        url: this.url.getColumnList,
        data: {},
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        success: ({ data, statusCode, header }) => {
          this.categories = data.data
          // ? 默认获取第一个分类的直播间数据
          this.getRooms(0)
        },
        fail: (error) => {},
      })
    },
  },
}
</script>

<style lang="scss">
.hover-active {
  opacity: 0.7;
}
</style>
