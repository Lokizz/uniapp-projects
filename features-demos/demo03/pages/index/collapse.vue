<!--
 * @Author: MacLoki
 * @Date: 2022-06-01 21:30:05
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-01 22:02:44
 * @FilePath: /demo03/pages/index/index.vue
-->
<template>
  <view>
    <!-- ui collapse -->
    <!-- accordion 手风琴效果 -->
    <uni-collapse accordion>
      <uni-collapse-item title="折叠项1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </uni-collapse-item>
      <uni-collapse-item title="item2" showAnimation>
        Lorem ipsum dolor sit.
      </uni-collapse-item>
    </uni-collapse>
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
