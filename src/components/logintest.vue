<template>
     <div id="logintest" v-if="changeLogin">
         这是登录页
     </div>
</template>

<script>
export default {
  name: "logintest",
  data() {
    return {
        loginShow:'changeLogin'
    };
  },
  props:['changeLogin']
};
</script>

<style lang="less" scoped>
#logintest{
    width:100%;
    height:100%;
    position: fixed;
    background-color: #ccc;
    top: 0;
    z-index: 10;
}
</style>
