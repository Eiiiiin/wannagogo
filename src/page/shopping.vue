<template>

    <div id="shopping">
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <header>
           
            <div> <i class="el-icon-search"></i> <span>搜索好设计 </span> <img class="scan" :src="headericon1" alt=""> <img class="message" :src="headericon2" alt=""> </div>
        </header>
        <div class="shopnav">
            <van-row>
                <van-col :span="6" v-for="(item,i) in shopNav" :key="i" class="shopnavlist">
                    <img :src="item.icon" alt="">
                    <p>{{item.name}}</p>
                </van-col>
            </van-row>
        </div>
        <div class="shoplist" v-for="(item,i) in shopList" :key="i">
            <div class="banner">
                <img src="/static/img/shopbanner.png" alt="">
            </div>
            <div class="tablist" >
                <swiper :shopTabList="shopTabList">
                    <swiper-slide class="swiperlist">
                        <img :src="item.pro_img" alt="" @click="goGoodsdetails(item)">
                        <p class="shopname">{{item.pro_desc}}</p>
                        <p>{{item.pro_name}}</p>
                        <p>{{item.pro_price}}</p>
                    </swiper-slide>
                    <div class="seemore" @click="seeMore(item)">查看更多</div>
                </swiper>
            </div>
        </div>
         </van-pull-refresh>
        <footercom />
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import footercom from '@/components/footercom';

export default {
  name: "",
  data() {
    return {
      search: "",
      headericon1: require("../assets/xx.png"),
      headericon2: require("../assets/sm.png"),
      shopNav: [],
      shopTabList: {
        speed: 500,
        loop: true,
        
      },
      shopList: [],
       isLoading: false
    };
  },
  created() {
    this.getShopNav("", data => {
      this.getShopNav.data;
    });
    this.getshopList("", data => {
      this.getshopList.data;
    });
  },
  methods: {
    getShopNav: function() {//头部导航
      var that = this;
      that.$axios.get("../../static/mock/shopnav.json").then(function(res) {
        that.shopNav = res.data.list;
      });
    },
    getshopList: function() {//商品列表
      var that = this;
      that.$axios.get("http://127.0.0.1:8081/getProductList").then(function(res) {
        that.shopList = res.data.message;
       
      });
    },
    goGoodsdetails:function(goodsId){//跳转到详情
        var goodsId = goodsId.pro_id;
     
        // alert(goodsId)
       this.$router.push({
           name:'goodsdetails',
           query:{goodsId}
       })
    },
    seeMore:function(goodsId){//查看更多
        var goodsId = goodsId.pro_id;
        alert(goodsId)
    },
          onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  components:{
    footercom
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
      padding-left: 2%;
      line-height: 2.33rem;
      position: relative;
      .scan {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        position: absolute;
        right: -3.25rem;
        top: 0.14rem;
      }
      .message {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        position: absolute;
        right: 0.94rem;
        top: 0.19rem;
      }
    }
  }
  .shopnav {
    .shopnavlist {
      margin: 0 auto;
      text-align: center;
      padding: 0.6rem 0;
      img{
        // width: 1.5rem;
      }
    }
    border-bottom: 0.63rem solid #f0f0f0;
  }
  .shoplist {
      .banner {
      margin-bottom:1.2rem;
      img {
        display: inline-block;
        width: 100%;
      }
    }
    .tablist {
        .swiperlist{
            width:6.25rem!important;
            padding:0 .31rem;
            img{
                display:inline-block;
                width:100%;
            }
            p{  
                font-size: .63rem;
                text-align: center;
                color:#5b5b5b;
                padding:.31rem 0;
            }
            .shopname{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            
        }
      .seemore{
          text-align: center;
          line-height:6.25rem;
          width:6.25rem;
          background-color: #f8f8f8;
          height: 6.25rem;
      }
    }
  }
}
</style>
