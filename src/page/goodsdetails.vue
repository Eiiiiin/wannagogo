<template>
    <div id="goodsdetails">
        <header>
            <!-- {{this.$route.query.goodsId}} -->
            <i class="goback iconfont icon-zuojiantou"></i>
            <i class="goback iconfont icon-fenxiang1"></i>
            <i class="goback iconfont icon-gouwuche1"></i>
        </header>
        <div class="banner">
            <swiper :options="banner" ref="mySwiper">
                <swiper-slide  v-for="(item,i) in bannerImg" :key="i">
                    <img :src="item.img" alt="">
                </swiper-slide>
            </swiper>
                <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="goodsinfo">
            <li>
                <div>

                </div>
                <div>

                </div>
            </li>
            <li>2</li>
            <li>3</li>
        </div>
    </div>
</template>
<script>
// import iconfont from "../../static/aliicon/iconfont.css";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "mine",
  data() {
    return {
      goodId: this.$route.query.goodsId || [],
      banner: {
        speed: 500,
        pagination: {
          el: ".swiper-pagination",
          bulletElement: "li"
        }
      },
      bannerImg: [
        {
          img: require("../../static/img/shopbanner.png")
        },
        {
          img: require("../../static/img/shopbanner.png")
        },
        {
          img: require("../../static/img/shopbanner.png")
        }
      ]
    };
  },
  created() {},
  methods: {},
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="less" scoped>
#goodsdetails {
  header {
    overflow: hidden;
    i {
      padding: 0 0.56rem;
      font-size: 2rem;
      &:nth-child(2) {
        float: right;
        padding-top: 0.3rem;
      }
      &:last-child {
        float: right;
        font-size: 2.2rem;
      }
    }
    height: 5.63rem;
    color: #7f7f7f;
    .goback {
      display: inline-block;
    }
  }
  .banner {
    position: relative;
    .swiper-container {
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
    .swiper-pagination {
      width: 4.69rem;
      position: absolute;
      bottom: 12%;
      left: 47%;
    }
  }
  .goodsinfo{
      li:first-child{
      overflow: hidden;

          div:first-child{
              float: left;
              background-color: red;
              width: 100px;
              height: 10px;
          }
          div:last-child{
              float: right;
               width: 100px;
              height: 10px;
              background-color: #333;
          }
      }
      li:nth-child(2){
          
          background-color: #cdcdcd;

      }
      li:last-child{
          
           
          background-color: red;
      }
      }
}
</style>
