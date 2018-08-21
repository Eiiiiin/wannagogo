<template>
    <div id="shopping">
        <header>
           
            <div> <i class="el-icon-search"></i> <span>搜索好设计 </span> <img class="scan" :src="headericon1" alt=""> <img class="message" :src="headericon2" alt=""> </div>
        </header>
        <div class="shopnav">
            <el-row>
                <el-col :span="6" v-for="(item,i) in shopNav" :key="i" class="shopnavlist">
                    <img :src="item.icon" alt="">
                    <p>{{item.name}}</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      search: "",
      headericon1:require('../assets/xx.png'),
      headericon2:require('../assets/sm.png'),
      shopNav:[],
    };
  },
  created(){
      this.getShopNav("",data=>{
          this.getShopNav.data;
      })
  },
  methods: {
      getShopNav:function(){
          var that = this;
          that.$axios.get('../../static/mock/shopnav.json').then(function(res){
              that.shopNav = res.data.list;
          })
      }
  }
};
</script>
<style lang="less" scoped>
#shopping {
  header {
    background-color: #212121;
    height: 3.33rem;
    padding-top: 0.61rem;

    div {
      background-color: #000;
      color: #8e8e8e;
      border-radius: 5px;
      width: 84%;
      padding-left:2%;
      line-height:2.33rem;
      position: relative;
      .scan{
          display: inline-block;
          width:2rem;
          height:2rem;
            position: absolute;
            right:-3.25rem;
            top:.14rem;
      }
      .message{
      display: inline-block;
          width:2rem;
          height:2rem;
            position: absolute;
            right:.94rem;
            top:.19rem;
      }
    }
  }
  .shopnav{
      .shopnavlist{
          margin:0 auto;
          text-align: center;
          padding:.6rem 0;
      }
      border-bottom:.63rem solid #f0f0f0;
  }
}
</style>
