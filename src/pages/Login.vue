<template>
  <section class="login-view">
    <div class="login-inner">
      <div class="login-header">
        <h2 class="login-logo">滴答滴外卖</h2>
        <div class="login-header-title">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login-content">
        <form @submit.prevent="login">
          <div :class="{on:loginWay}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get-verification" :class="{right_phone:rightPhone}" @click="getCode">{{computeTime>0?`已发送(${computeTime}s)`:'获取验证码'}}</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册滴答滴外卖账号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on : !loginWay}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="手机号/邮箱/用户名" v-model="name">
              </section>
              <section class="login-verification">
                <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="showPwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch-button" :class="showPwd? 'on' : 'off'" @click="showPwd=!showPwd">
                  <div class="switch-circle" :class="{right : showPwd}"></div>
                  <span class="switch-text">{{showPwd? 'abc':'...'}}</span>
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get-verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <a href="#" class="about-us">关于我们</a>
      </div>
      <span class="go-back" @click="$router.back()">
        <i class="iconfont icon-jiantou1"></i>
      </span>
    </div>
    <alert-tip :alertText="alertText" v-show="showAlert" @closeTip="closeTip" />
  </section>
</template>
<script>
import { reqPwdLogin, reqSendCode, reqSmsLogin } from "@/api"
import AlertTip from '@/components/AlertTip'
export default {
  name: 'login-view',
  components: {
    AlertTip
  },
  data() {
    return {
      loginWay: true, //true代表密码登录，false代表短信登录
      computeTime: 0,
      showPwd: false,//是否显示密码
      phone: '',
      code: '',
      name: '',
      pwd: '',
      captcha: '', //图形验证码
      showAlert: false, //是否显示提示框
      alertText: '', //提示框文本
    }
  },
  mounted() {
    this.name = '';
    this.pwd = ''
  },
  computed: {
    rightPhone() {
      return /^1[3578]\d{9}$/.test(this.phone);
    }
  },
  methods: {
    async getCode() {
      if (this.computeTime === 0) {
        this.computeTime = 60
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)

        let result = await reqSendCode(this.phone)
        if (result.code === 1) {
          this.showAlert = true;
          this.alertText = result.msg
          if (this.computeTime) {
            this.computeTime = 0;
            clearInterval(this.intervalId)
          }
        }
      }
    },

    getCaptcha() {
      this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
    },

    closeTip() {
      this.showAlert = false;
      this.alertText = ''
    },

    async login() {
      let result;
      if (!this.loginWay) {
        if (!this.rightPhone) {
          this.showAlert = true;
          this.alertText = '手机号码不正确';
          return
        } else if (!(/^\d{6}$/gi.test(this.code))) {
          this.showAlert = true;
          this.alertText = '短信验证码不正确';
          return
        }
        result = await reqSmsLogin(this.phone, this.code)
        if (result.code === 0) {
          this.userInfo = reuslt.data
        } else {
          this.userInfo = {
            msg: '登录失败，手机哈或验证不正确'
          }
        }
      } else {
        if (!this.name) {
          this.showAlert = true
          this.alertText = '请输入手机号/邮箱/用户名'
          return
        } else if (!this.pwd) {
          this.showAlert = true;
          this.alertText = '请输入密码'
          return
        } else if (!this.captcha) {
          this.showAlert = true;
          this.alertText = '请输入验证码'
          return
        }

        const reuslt = await reqPwdLogin(this.name, this.pwd, this.captcha)
        if (result.code === 0) {
          this.userInfo = reuslt.data
        }else{
          this.userInfo = {
            msg : result.msg
          }
        }
      }

      if(!this.userInfo._id){
        this.showAlert = true;
        this.alertText = this.userInfo.msg;
        if(!this.loginWay){
          this.getCaptcha();
        }
      }else{
        this.$store.dispatch('recordUserInfo',this.userInfo)
        this.$router.back();
      }
    },

  }
}
</script>

<style lang="stylus">
@import '../common/mixins'
.login-view
  width 100%
  height 100%
  background #fff
  .login-inner
    width 80%
    padding-top 60px
    margin 0 auto
    .login-header
      .login-logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login-header-title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login-content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline none
            font 400 14px Arial
            &:focus
              border-color #02a774
          .login-message
            position relative
            height 48px
            margin-top 16px
            .get-verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.right-phone
                color #000
          .login-verification
            position relative
            height 48px
            font-size 14px
            margin-top 16px
            background #fff
            .switch-button
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              width 30px
              height 16px
              line-height 16px
              color #fff
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s border-color .3s
              padding 0 6px
              &.off
                background #fff
                .switch-text
                  float left
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(30px)
          .login-hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
      .about-us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go-back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>

