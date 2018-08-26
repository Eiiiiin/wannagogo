<template>
    <div id="login">
        <header>
            <i class="iconfont icon-zuojiantou" @click="goBack"></i>
            <span>密码登录</span>
        </header>
        <div class="main">
            <van-field placeholder="请输入手机或邮箱"></van-field>
            <van-field placeholder="请输入登录密码"></van-field>
            <van-button @click="okLogin">登陆</van-button>
        </div>
        <div class="otherway">
            <div class="forget">
                <span>忘记密码?</span>
            </div>
            <div class="register">
                <span>没有帐号?</span>
                <span>注册</span>
            </div>
        </div>
        <div class="otherlogin">
            <span>其他方式登录</span>
            <p>
               <i class="iconfont icon-weixin1"></i>
               <i class="iconfont icon-xinlang-copy1"></i>
               <i class="iconfont icon-qq"></i>
            </p>
        </div>
    </div>
</template>

<script>
import { Toast} from 'vant';

export default {
  name: "login",
  data() {
    return {};
  },
  created() {},
  methods: {
      goBack:function(){
          this.common.cheakLogin()
          history.back(-1);
      },
      okLogin:function(){
        Toast.loading({
  mask: true,
  message: '登录中...'
});
      }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#login {
    //     height: 100%;
    // z-index: 9999999;
    // position: fixed;
    // background-color: #fff;
  header {
    height: 4.13rem;
    text-align: center;
    position: relative;
    color: #fff;
    background-color: #212121;
    i {
      position: absolute;
      left: 4%;
      top: 50%;
    }
    span {
      font-size: 22px;
      line-height: 5rem;
    }
  }
  .main {
    padding: 0 2%;
    padding-top: 10px;
    .van-field {
    }
    .van-button {
      width: 100%;
      margin-top: 22px;
      background-color: #2e2e2e;
      color: #797979;
    }
  }
  .otherway {
    padding: 0 2%;
    padding-top: 12px;
    color: #b6b6b6;
    overflow: hidden;
    div:first-child {
      float: left;
      text-decoration: underline;
    }
    div:last-child {
      float: right;
      span:first-child {
        text-decoration: underline;
      }
      span:last-child {
        color: #5188f0;
        text-decoration: underline;
      }
    }
  }
  .otherlogin {
    text-align: center;
    bottom: 20%;
    position: absolute;
    left: 33%;
    color: #b5b5b5;
    span {
      display: inline-block;
      position: relative;
      &:before {
        content: "";
        width: 24px;
        height: 1px;
        background-color: #b5b5b5;
        display: inline-block;
        position: absolute;
        top: 10px;
        left: -33px;
      }
      &:after {
        content: "";
        width: 24px;
        height: 1px;
        background-color: #b5b5b5;
        display: inline-block;
        position: absolute;
        top: 10px;
        right: -33px;
      }
    }
    p {
      margin: 0 auto;
      padding-top: 16px;
      i {
        color: #777;
        font-size: 20px;
        // margin-right:60px;
      }
      i:nth-child(2) {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }
}
</style>
