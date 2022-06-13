<template>
  <view class="container">
    <!-- ui badge -->
    <uni-badge size="small" :text="100" absolute="rightBottom" type="primary"><button type="default">右下</button></uni-badge>

    <uni-badge text="1"></uni-badge>

    <uni-badge text="2" type="purple"></uni-badge>

    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
    <uni-badge isDot type=""></uni-badge>
  </view>
</template>

<script>
export default {};
</script>

<style>
view {
  margin-top: 100rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
