<template>
  <view>
    <uni-notice-bar
      scrollable
      text="动态滚动文本的提示框测试"
      single
      showIcon
      ShowClose
      color="purple"
      moreText="查看更多"
      @getmore="getMore"
      showGetMore
    />
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getMore() {
      console.log('更多信息')
    },
  },
}
</script>

<style></style>
