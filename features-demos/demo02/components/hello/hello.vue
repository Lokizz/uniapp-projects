<template>
  <view>
    <h2>{{ pageName }}</h2>
  </view>
</template>

<script>
export default {
  name: 'hello',
  props: ['pageName'],
  data() {
    return {};
  }
};
</script>

<style>
h2 {
  text-align: center;
}
</style>
