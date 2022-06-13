<!--
 * @Author: MacLoki
 * @Date: 2022-06-06 11:30:10
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-06 18:01:56
 * @FilePath: /uni-app-projects/project01-综合项目/pages/user/user.vue
-->
<template>
  <view>
    <!-- * 背景图 -->
    <image class="background-image" src="/static/bg.jpeg" mode="aspectFill" />
    <!-- * 画面容器 -->
    <view class="container">
      <view class="header">
        <image
          class="header__logo"
          src="/static/icons/logo.png"
          mode="scaleToFill"
        />
        <text class="header__title">老友记 IT 服务</text>
      </view>
      <view class="form">
        <view class="input-area">
          <image src="/static/icons/username.png" mode="scaleToFill" />
          <input type="text" placeholder="用户名／手机号" />
        </view>
        <view class="input-area">
          <image src="/static/icons/password.png" mode="scaleToFill" />
          <input :type="visibleType" placeholder="密码" />
          <image
            @click="handleVisible"
            :src="eyeImg"
            mode="scaleToFill"
            class="visible-sign"
          />
        </view>
        <button hover-class="btn-active" class="login-btn">登陆</button>
        <view class="extra-infos">
          <view hover-class="btn-active">忘记密码？</view>
          <view hover-class="btn-active">立即注册</view>
        </view>
      </view>
      <view class="footer">
        <view class="footer-title">
          <view class="footer-title__decoration"></view>
          <text>第三方直接登陆</text>
          <view class="footer-title__decoration"></view>
        </view>
        <view class="footer-icons-container">
          <view hover-class="btn-active">
            <image src="/static/icons/qq.png"></image>
          </view>
          <view hover-class="btn-active">
            <image src="/static/icons/wechat.png"></image>
          </view>
          <view hover-class="btn-active">
            <image src="/static/icons/weibo.png"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    handleVisible() {
      this.isVisible = !this.isVisible
    },
  },
  computed: {
    eyeImg() {
      return this.isVisible
        ? '/static/icons/visible.png'
        : '/static/icons/invisible.png'
    },
    visibleType() {
      return this.isVisible ? 'text' : 'password'
    },
  },
}
</script>

<style>
.background-image {
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  z-index: 0;
}
.container {
  padding: 160rpx 60rpx;
}

.container .header {
  width: 64%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 160rpx;
  padding: 20rpx 8rpx;
  border-radius: 8rpx;
}

.header__logo {
  width: 2rem;
  height: 2rem;
  filter: drop-shadow(1px -2px 0.5px white);
}

.header__title {
  font-size: 1.2rem;
  color: #333333;
  filter: drop-shadow(1px 1px 0.5px white);
}

.form {
  width: 90%;
  margin: 0 auto;
}

.input-area {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 24rpx;
  padding: 12rpx;
  border-radius: 12rpx;
  background: white;
}

.input-area image {
  width: 48rpx;
  height: 48rpx;
  margin-right: 10rpx;
}

::placeholder {
  font-size: 8rpx;
}

.visible-sign {
  margin-left: auto;
}

.login-btn {
  color: white;
  letter-spacing: 20rpx;
  text-align: center;
  background-color: #fca311;
}

.btn-active {
  opacity: 0.6;
}

.extra-infos {
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 24rpx;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
}

.footer {
  width: 90%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  margin-bottom: 120rpx;
}

.footer-title {
  color: white;
  text-align: center;
  margin-bottom: 24rpx;
  display: flex;
  align-items: center;
}

.footer-title text {
  margin: 0 10rpx;
  word-break: keep-all;
}

.footer-title__decoration {
  width: 100%;
  height: 1px;
  background-color: white;
  position: relative;
}

.footer-icons-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 80rpx;
}

.footer-icons-container image {
  width: 64rpx;
  height: 64rpx;
}
</style>
