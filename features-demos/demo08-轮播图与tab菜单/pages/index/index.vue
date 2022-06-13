<template>
  <view>
    <scroll-view scroll-x :scroll-into-view="'yy_' + current">
      <view style="display: flex; flex-direction: row">
        <!-- ! 配合滚动位置的 id 不能以数字开头 -->
        <text
          :id="'yy_' + idx"
          @click="chooseItem(idx)"
          :class="{ current: idx === current }"
          style="
            font-size: 1.3em;
            white-space: nowrap;
            display: inline-block;
            padding: 10rpx;
          "
          v-for="(item, idx) in data"
          :key="idx"
        >
          {{ item.title }}
        </text>
      </view>
    </scroll-view>
    <!-- ! v-if 和 v-for 不要一起写 -->
    <block v-for="(item, idx) in data" :key="idx">
      <view style="border: 1px solid lightcoral" v-if="current === idx">
        <text>{{ item.desc }}</text>
      </view>
    </block>

    <!-- * 另一种做法 -->
    <swiper style="height: 310rpx" :current="current" @change="swiperChange">
      <swiper-item v-for="(item, idx) in data" :key="idx">
        <view style="border: 2px solid #007aff; height: 300rpx">
          <text>{{ item.desc }}</text>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      data: [
        { title: '阶段1', desc: 'HTML CSS JavaScript' },
        { title: '阶段2', desc: 'Vue' },
        { title: '阶段3', desc: 'Sass' },
        { title: '阶段4', desc: 'Axios' },
        { title: '阶段5', desc: 'Element-Plus' },
        { title: '阶段6', desc: 'Nodejs' },
        { title: '阶段7', desc: 'Webpack' },
      ],
    }
  },
  methods: {
    chooseItem(idx) {
      this.current = idx
    },
    swiperChange(evt) {
      this.current = evt.detail.current
    },
  },
}
</script>

<style>
.current {
  color: orange;
  border-bottom: 3px solid orange;
}
</style>
