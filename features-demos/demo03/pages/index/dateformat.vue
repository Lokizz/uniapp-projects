<!--
 * @Author: MacLoki
 * @Date: 2022-06-01 21:30:05
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-01 21:55:31
 * @FilePath: /demo03/pages/index/index.vue
-->
<template>
  <view>
    <!-- ui Dateformat -->
    <!-- threshold 阈值小于开头显示「刚刚」，大于结尾显示多久之前/后，超出区间正常显示设置格式 -->
    <uni-dateformat
      :date="now"
      :threshold="[3000, 100000]"
      format="yyyy/MM/dd hh:mm:ss"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      now: Date.now(),
    }
  },
}
</script>

<style></style>
