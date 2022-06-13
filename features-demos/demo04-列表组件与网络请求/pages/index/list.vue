<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-03 00:46:40
 * @FilePath: /demo04-列表组件与网络请求/pages/index/index.vue
-->
<template>
  <view>
    <!-- 列表组件 -->
    <uni-list>
      <uni-list-item
        title="微信号"
        rightText="vanillaLok"
        clickable
        showArrow
      ></uni-list-item>
      <uni-list-item
        title="青少年模式"
        :note="modeStatus ? '已开启' : '已关闭'"
        showSwitch
        @switchChange="modeChange"
        :switchChecked="modeStatus"
      ></uni-list-item>
      <uni-list-item
        title="支付"
        thumb="/static/logo.png"
        thumbSize="sm"
        showArrow
        badgeText="77"
        showBadge
      ></uni-list-item>
      <!-- 自定义 -->
      <uni-list-item direction="column">
        <view slot="header">header</view>
        <view slot="body">body</view>
        <view slot="footer">footer</view>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      modeStatus: true,
    }
  },
  methods: {
    modeChange(event) {
      this.modeStatus = event.value
    },
  },
}
</script>

<style></style>
