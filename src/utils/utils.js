import {
  Toast
} from 'vant';
export default {
  cheakLogin: function () {//判断是否登陆
    let userInfo = localStorage.getItem('userInfo'); //获取登陆信息
    if (userInfo) {
      // Toast.success('登录成功');
      this.showBase=true;
    } else {
      const Num = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message: '请先登录'
      });
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (second) {
          Num.message = '请先登录';
        } else {
          clearInterval(timer);
          Num.clear();
          //   Toast('卖家貌似被绑架了,请稍候再联系他');
          // this.$route.push()
          location.href = '/login'
          
        }
      }, 1000);
      

    }


  }
}
