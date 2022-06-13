<!--
 * @Author: MacLoki
 * @Date: 2022-05-08 10:42:04
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-01 11:57:32
 * @FilePath: /uni-vscode-template-main/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <u-button type="primary" text="uni-vscode-template"></u-button>
    <view>
    <text></text>
  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
