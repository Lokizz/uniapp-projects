<!--
 * @Author: MacLoki
 * @Date: 2022-06-05 23:58:06
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-06 00:14:48
 * @FilePath: /uni-app-projects/demo10-搜索栏|自定义导航栏|索引列表|商品导航/pages/index/index.vue
-->
<template>
  <view>
    <!-- 索引列表 -->
    <uni-indexed-list :options="options" />
    <!-- 商品栏  -->
    <uni-goods-nav
      fill
      :options="leftOptions"
      :buttonGroup="buttonGroup"
      @click="clickLeft"
      @buttonClick="clickRight"
      style="left: 0; right: 0; position: absolute; bottom: 0"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      // ? 固定的数据结构
      options: [
        {
          letter: 'A',
          data: [
            '阿克苏机场',
            '阿拉山口机场',
            '阿勒泰机场',
            '阿里昆莎机场',
            '安庆天柱山机场',
            '澳门国际机场',
          ],
        },
        {
          letter: 'B',
          data: [
            '保山机场',
            '包头机场',
            '北海福成机场',
            '北京南苑机场',
            '北京首都国际机场',
          ],
        },
      ],
      // ? 左边的样式设置
      leftOptions: [
        { text: '店铺', icon: 'shop', info: 3 },
        { text: '客服', icon: 'headphones', info: 3 },
      ],
      // ? 商品栏的按钮文本
      buttonGroup: [
        { text: '加入购物车', backgroundColor: 'orange', color: 'white' },
        { text: '立即购买', backgroundColor: 'red', color: 'white' },
      ],
    }
  },
  methods: {
    clickLeft(e) {
      console.log(e)
    },
    clickRight(e) {
      console.log(e)
    },
  },
}
</script>

<style></style>
