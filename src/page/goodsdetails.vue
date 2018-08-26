<template>
  <div id="goodsdetails">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <header>
      <i class="goback iconfont icon-zuojiantou" @click="goBack"></i>
      <i class=" iconfont icon-fenxiang1" @click='buyNow'></i>
      <i class=" iconfont icon-gouwuche1" @click='buyNow'></i>
    </header>
    <div class="banner">
      <van-swipe>
        <van-swipe-item v-for="(item,i) in goodsInfo.bannerList" :key="i">
          <img :src="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="goodsinfo">
      <li>
        <p>{{goodsInfo.pro_desc}}</p>
      </li>
      <li>
        <van-row>
          <van-col :span="12">
            <p>
              <span>¥</span>
              <span>{{goodsInfo.pro_price}}</span>
            </p>
            <p>
              <span>邮费:</span>
              <span>123</span>
              <span>元</span>
            </p>
          </van-col>
          <van-col :span="12">
            <p>
              <i class="iconfont icon-aixin"></i>
            </p>
            <p>
              <span>12</span>
            </p>
          </van-col>
        </van-row>
      </li>
      <li>登陆后,分享获得xxxxx</li>
      <li>
        <div>
          <i class="iconfont icon-gou"></i>
          <span>7天无理由退货</span>
        </div>
        <div>
          <i class="iconfont icon-gou"></i>
          <span>48小时发货</span>
        </div>
        <div>
          <i class="iconfont icon-gou"></i>
          <span>担保交易</span>
        </div>
      </li>
    </div>
    <div class="designer">
      <li>
        <div>
          <img :src="goodsInfo.desi_avatar" alt="">
          <span>主理人:</span>
          <span>{{goodsInfo.desi_name}}</span>
          <i class="iconfont icon-icon"></i>
        </div>
      </li>
      <li>
        <div class="brand">
          <img :src="goodsInfo.brand_logo" alt="">
          <span>品牌:</span>
          <span>{{goodsInfo.brand_name}}</span>
          <i class="iconfont icon-icon"></i>
          <p>{{goodsInfo.brand_desc}}</p>
        </div>
      </li>
    </div>
    <div class="wx">
      <i class="iconfont icon-weixin"></i>
      <p>加Ein微信:FHSJDKFHSDKJFHDS,成为好友,超多朋友福利.带你认识更多设计师哦~</p>
    </div>
    <div class="notail">
      <p>店铺公告</p>
      <p>这是一条公告~</p>
    </div>
    <div class="like">
      <p>喜欢<span>12</span></p>
      <ul>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
        <li><i class="iconfont icon-weixin"></i></li>
      </ul>
    </div>
       </van-pull-refresh>
    <footer>
      <van-row>
        <van-col span='4'>
          <div @click='callSeller'>
            <i class="iconfont icon-xiaoxi"></i>
            <p>联系卖家</p>
          </div>
        </van-col>
        <van-col span='10' >
          <div @click.stop='addShopCar'>加入购物车</div>
        </van-col>
        <van-col span='10'>
          <div @click='buyNow'>立即购买</div>
        </van-col>
      </van-row>
    </footer>
   
  </div>
</template>
<script>
  import {
    Toast
  } from 'vant';
  export default {
    name: "mine",
    data() {
      return {
        goodId: this.$route.query.goodsId || [],
        isLoading: false,
        banner: {
          speed: 500,
          pagination: {
            el: ".swiper-pagination",
            bulletElement: "li"
          }
        },
        goodsInfo: []
      };
    },
    created() {
      this.getGoodsInfo("", data => {
        this.getGoodsInfo.data;
      });
    },
    methods: {
      getGoodsInfo: function() {
        let that = this;
        let id = parseInt(that.$route.query.goodsId);
        that.$axios
          .get("http://127.0.0.1:8081/getProductDetail", {
            params: {
              id
            }
          })
          .then(function(res) {
            that.goodsInfo = res.data.message;
          });
      },
      goBack: function() {
        this.$router.push({
          name: "shopping"
        });
      },
      addShopCar: function() { //加入购物车
        this.common.cheakLogin()
      },
      buyNow: function() { //立刻购买
        this.common.cheakLogin()
      },
      callSeller: function() { //联系卖家
        const Num = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: 'spinner',
          message: '倒计时 3 秒'
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            Num.message = `倒计时 ${second} 秒`;
          } else {
            clearInterval(timer);
            Num.clear();
            Toast('卖家貌似被绑架了,请稍候再联系他');
          }
        }, 1000);
      },
             onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
    },
    components: {}
  };
</script>
<style lang="less" scoped>
  #goodsdetails {
    .van-pull-refresh{
        padding-bottom: 45px;
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
      .van-swipe {
        .van-swipe-item {
          height: 24rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .goodsinfo {
      padding-left: 9px;
      padding-right: 14px;
      border-bottom: 0.63rem solid #f0f0f0;
      li:first-child {
        padding-top: 12px;
        padding-bottom: 17px;
        font-size: 14px;
      }
      li:nth-child(2) {
        border-bottom: 1px dotted #ccc;
        padding-bottom: 7px;
        .van-row {
          .van-col:first-child {
            font-size: 16px;
            p:first-child {
              color: #d2a853;
              font-size: 21px;
              padding-bottom: 8px;
            }
            p:last-child {
              color: #7b7b7b;
            }
          }
          .van-col:last-child {
            text-align: right;
            p {
              color: #747474;
            }
            p:first-child {
              padding-bottom: 4px;
            }
          }
        }
      }
      li:nth-child(3) {
        border-bottom: 1px dotted #ccc;
        padding: 12px 0;
      }
      li:last-child {
        overflow: hidden;
        padding: 12px 0;
        div {
          color: #818181;
          float: left;
          padding-right: 12px;
        }
      }
    }
    .designer {
      padding-left: 9px;
      padding-right: 14px;
      border-bottom: 0.63rem solid #f0f0f0;
      li {
        color: #6a6a6a;
        div {
          overflow: hidden;
          width: 100%;
          padding-top: 25px;
          padding-bottom: 16px;
          img {
            width: 0.94rem;
            height: 0.94rem;
          }
          span {
            line-height: 1.88rem;
            color: #1f1f1f;
          }
          i {
            float: right;
            font-size: 20px;
            padding-top: 5px;
          }
        }
        .brand {
          p {
            color: #6a6a6a;
          }
          padding-top: 20px;
          padding-bottom: 60px;
        }
      }
    }
    .wx {
      padding-left: 9px;
      padding-right: 14px;
      padding-top: 28px;
      padding-bottom: 14px;
      border-bottom: 0.63rem solid #f0f0f0;
      position: relative;
      i {
        position: absolute;
        left: 8px;
        top: 31px;
        color: #6fbd4a;
      }
      p {
        color: #7d7d7d;
        padding-left: 24px;
      }
    }
    .notail {
      padding-left: 9px;
      padding-right: 14px;
      padding-top: 14px;
      padding-bottom: 14px;
      border-bottom: 0.63rem solid #f0f0f0;
      p {
        padding: 5px 0;
      }
      p:first-child {
        font-weight: bolder;
      }
    }
    .like {
      padding-left: 9px;
      padding-right: 14px;
      padding-top: 14px;
      padding-bottom: 14px;
      p {
        font-weight: bolder;
      } 
      ul {
        overflow: hidden;
        li {
          float: left;
          padding: 4px;
          i {
            font-size: 45px;
          }
        }
      }
    }
    }
    footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 10;
      .van-row {
        .van-col {
          height: 45px;
          text-align: center;
        }
        .van-col:first-child {
          background-color: #fff;
          padding-top: 3px;
          i {
            font-size: 20px;
          }
          p {
            font-size: 10px;
          }
        }
        .van-col:nth-child(2) {
          background-color: #9a9aa6;
          color: #fff;
          line-height: 45px;
        }
        .van-col:last-child {
          background-color: #2e2e2e;
          line-height: 45px;
          color: #fff;
        }
      }
    }
  }
</style>
