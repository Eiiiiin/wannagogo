<template>
     <footer class="footertab" height='3.5rem'>
        <van-row>
          <van-col :span='6' v-for="(item,i) in tab"  :key="i">
            <router-link :to="{name:item.pathName}">
            <img :src="item.imgSrc" alt="">
              <span>{{item.text}}</span> 
            </router-link>
          </van-col>
        </van-row>
      </footer>
</template>

<script>
export default {
    name:'footercom',
    data(){
        return{
            tab:[{
        text:'专题',
        pathName:'special',
        imgSrc:require('../assets/tab1.png')
      },{
        text:'设计师',
        pathName:'designer',
        imgSrc:require('../assets/tab2.png')
      },{
        text:'逛',
        pathName:'shopping',
        imgSrc:require('../assets/tab3.png')
      },{
        text:'我的',
        pathName:'mine',
        imgSrc:require('../assets/tab4.png')
      },]
        }
    }
}
</script>

<style lang="less" scoped>
      .footertab{
    padding:0;
    width:100%;
    border-top:1px solid #b3b2b3;
    position: fixed;
    bottom: 0;
    text-align: center;
    background-color: #f9f9f9;
    color:#000;
    z-index:99999;
    // height:5.5rem;
    img{
      display: block;
      margin:.94rem auto;
      margin-bottom:1rem;
      width:2.44rem;
      height:2.19rem;

          margin: 0.3rem auto;
    /* margin-bottom: 1rem; */
    width: 1.44rem;
    height: 1.19rem;
    }
  }
</style>
