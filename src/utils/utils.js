import { Toast } from 'vant';
export default{
    cheakLogin:function(){
        // alert('你触发了登陆验证系统,然而我并没有写完')
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
            location.href = '/login'
            }
          }, 1000);
        
    }
}