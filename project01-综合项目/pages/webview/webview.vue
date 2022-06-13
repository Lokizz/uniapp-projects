<!--
 * @Author: MacLoki
 * @Date: 2022-06-09 21:08:30
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-12 22:49:28
 * @FilePath: /project01-综合项目/pages/webview/webview.vue
-->
<template>
  <!-- * web-view 专门显示网页的容器 -->
  <!-- web 浏览器组件，会自动铺满整个页面 -->
  <web-view :src="href" />
</template>

<script>
export default {
  data() {
    return {
      /* #ifdef H5 */
      url: '/item.htm',
      /* #endif */
      /* #ifndef H5 */
      url: 'https://item.taobao.com/item.htm',
      /* #endif */
      productId: '',
    }
  },
  computed: {
    href() {
      if (this.productId) return `${this.url}?id=${this.productId}`
    },
  },
  methods: {},
  onLoad(option) {
    // ? 通过 onload 监听事件获取路由传参
    this.productId = option.productId
  },
}
</script>

<style></style>
