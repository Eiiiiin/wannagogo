<template>
  <div id="app">

      <div style="padding:0;padding-bottom:3.5rem">
        
    <router-view/>
      </div>
     

    
  </div>
</template>

<script>


 import iconfont from "../static/aliicon/iconfont.css";
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    // gogogo:function(){
    //   alert('1111')
    // }
  }
}
</script>

<style lang='less'>
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
