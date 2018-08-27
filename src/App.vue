<template>
  <div id="app">      
    <router-view/> 
  </div>
</template>

<script>


 import iconfont from "../static/aliicon/iconfont.css";
export default {
  name: 'App',
  data(){
    return {
      userInfo:{
        userName:null,
        nickName:null
      }
    }
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo:function(){
      this.userInfo={
        userName:'',
        nickName:''
      }
      // this.$store.commit('updateUserInfo', this.userInfo); 
    }
  }
}
</script>

<style lang='less'>
html,body{
  height: 100%;
}
html,body,ul,li,a,p,h1,h2,h3{
  margin:0;
  padding:0;
  list-style: none;
  text-decoration: none;
  color:#000;
}
#app {
  height:100%;


}
</style>
