<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-05 23:55:48
 * @FilePath: /uni-app-projects/demo10-搜索栏|自定义导航栏|索引列表|商品导航/pages/index/index.vue
-->
<template>
  <view class="nav">
    <view>
      <!-- * 搜索栏组件 -->
      <uni-search-bar placeholder="商品名" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.nav {
  height: 64rpx;
  display: flex;
  align-items: center;
  background-color: #808080;
  padding: 10px 0;
}
.nav uni-view {
  width: 710rpx;
}
.uni-searchbar {
}
</style>
