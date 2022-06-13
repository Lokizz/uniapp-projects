<!--
 * @Author: MacLoki
 * @Date: 2022-05-19 16:36:50
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-05 17:17:43
 * @FilePath: /uni-app-projects/demo08-轮播图与tab菜单/pages/index/index.vue
-->
<template>
  <view>
    <!-- 轮播点组件 -->
    <uni-swiper-dot
      :info="banners"
      :current="current"
      mode="round"
      :dotsStyles="dotsStyles"
    >
      <swiper @change="bannerChange" autoplay>
        <swiper-item v-for="(item, idx) in banners" :key="idx">
          <image
            :src="item"
            mode="aspectFill"
            style="width: 100%; height: 100%"
          />
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 用以轮播图指示的索引
      current: 0,
      // 指示点的样式
      dotsStyles: {
        selectedBackgroundColor: 'purple',
        border: 'none',
      },
      banners: [
        'https://tva4.sinaimg.cn/middle/0072Vf1pgy1foxk6sm8hcj31kw0w0kbh.jpg',
        'https://tva3.sinaimg.cn/middle/0072Vf1pgy1foxkcukvztj31hc0u0ars.jpg',
        'https://tva1.sinaimg.cn/middle/0072Vf1pgy1foxlnhfbv6j31hc0u0trk.jpg',
        'https://tva1.sinaimg.cn/middle/0072Vf1pgy1foxkjfmwohj31kw0w0x2o.jpg',
      ],
    }
  },
  mounted() {},
  methods: {
    bannerChange(evt) {
      this.current = evt.detail.current
    },
  },
}
</script>

<style></style>
