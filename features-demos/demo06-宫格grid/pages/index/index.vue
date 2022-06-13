<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-04 16:14:03
 * @FilePath: /demo06-宫格grid/pages/index/index.vue
-->
<template>
  <view>
    <uni-grid
      :column="2"
      @change="chooseItem"
      :square="true"
      :showBorder="false"
      style="outline: 1px solid red"
    >
      <!-- 子项需要添加 index 属性区分 -->
      <uni-grid-item
        v-for="(item, idx) in result"
        :key="item.title + idx"
        :index="idx"
        style="max-width: 48%; padding: 1%"
      >
        <image :src="item.imgsrc" mode="aspectFill" style="max-width: 100%" />
        <view class="title">
          {{ item.title }}
        </view>
        <view>{{ item.mtime }}</view>
      </uni-grid-item>
    </uni-grid>
    <uni-load-more :status="loadStatus" />

    <button
      size="mini"
      @click="toTop"
      style="position: fixed; bottom: 30rpx; right: 8rpx"
    >
      回到顶部
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      result: [],
      loadStatus: 'more',
    }
  },
  mounted() {
    this.getData()
  },
  onPullDownRefresh() {
    this.result = []
    setTimeout(this.getData, 300)
    setTimeout(uni.stopPullDownRefresh, 300)
  },
  onReachBottom() {
    this.loadStatus = 'loading'
    this.getData()
    this.loadStatus = 'more'
  },
  methods: {
    chooseItem(e) {
      console.log(e)
    },
    toTop() {
      uni.pageScrollTo({
        scrollTop: 0,
      })
    },
    getData() {
      uni.request({
        url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-10.html',
        data: {},
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'GET',
        sslVerify: true,
        success: ({ data, statusCode, header }) => {
          this.result = [...this.result, ...data.T1348647853363]
          console.log(this.result)
        },
        fail: (error) => {},
      })
    },
  },
}
</script>

<style>
::v-deep .title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
