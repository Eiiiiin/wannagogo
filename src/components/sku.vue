<template>
    <div id="sku">
        <div class="skubox">
            <li class="skuTittle">
                <div class="fl">
                    <img src="../../static/img/shoplist1.png" alt="">
                </div>
                <div  class="fl">
                    <p><span>￥:</span><span>1111</span></p>
                    <p><span>已选:</span><span>{{goods.color}}</span><span>{{goods.size}}</span><span>{{goods.num}}</span></p>
                </div>
                <i class="iconfont icon-cha fr" @click="closeSku"></i>
            </li>
            <li class="goodscolor">
                <p>颜色分类</p>
                <span @click="goodsColor">红色</span>
            </li>
            <li class="goodssize">
                <p>尺寸</p>
                <span @click="goodsSize">L</span>
            </li>
            <li class="goodsnum">
                <div>数量</div>
                <div>
                    <span class="fl" @click="reduceNum">-</span>
                    <input class="fl" type="text" maxlength="2" v-model="goods.num">
                    <span class="fl" @click="addNum">+</span>
                </div>
            </li>
        </div>
           <button class="suresku">确定</button>
    </div>
</template>
<script>
export default {
  name: "sku",
  data() {
    return {
      goodsNum: 1,
      goods:{
          color:'',
          size:'',
          num:''
      }
    };
  },
  methods: {
    closeSku: function() {
      this.$emit("closeSku", false);
    },
    goodsColor:function(e){//颜色
      this.goods.color=e.target.innerText
    },
    goodsSize:function(e){
this.goods.size=e.target.innerText
    },
    addNum: function() {//加
      if (this.goods.num < 99) {
        this.goods.num++;
      } else {
        return false;
      }
    },
    reduceNum: function() {//减
      if (this.goods.num > 1) {
        this.goods.num--;
      } else if (this.goods.num == 1) {
        return false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
#sku {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 20;
overflow-y: scroll;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  .skubox {
    font-size: 14px;
    padding: 0 1%;
    li {
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      padding: 0.44rem 0;
      .fl {
        float: left;
      }
      .fr {
        float: right;
      }
    }
    .skuTittle {
      //   padding: 0.44rem 0;

      div:first-child {
        width: 4.06rem;
      }
      div:nth-child(2) {
        padding-left: 0.44rem;
        p {
          span {
            display: inline-block;
            padding-right: 5px;
          }
        }
      }
      img {
        width: 100%;
      }
    }
    .goodscolor {
      p {
        font-size: 16px;
        color: #838283;
        padding-bottom: 0.63rem;
      }
      span {
        display: inline-block;
        border: 1px solid #d2d2d2;
        text-align: center;
        width: 3.13rem;
        line-height: 1.35rem;
      }
    }
    .goodssize {
      p {
        font-size: 16px;
        color: #838283;
        padding-bottom: 0.63rem;
      }
      span {
        display: inline-block;
        border: 1px solid #d2d2d2;
        text-align: center;
        width: 3.13rem;
        line-height: 1.35rem;
      }
    }
    .goodsnum {
      border: none;
      span {
        display: inline-block;
        width: 1.81rem;
        height: 1.75rem;
        text-align: center;
        line-height: 1.75rem;
      }
      span:first-child {
        background-color: #ccc;
      }
      span:last-child {
        background-color: #333;
      }
      input {
        width: 2rem;
        border: none;
        padding: 0;
        height: 1.75rem;
        text-align: center;
      }
    }
  }
  .suresku {
    width: 100%;
    height: 2.75rem;
    background-color: #2e2e2e;
    border: none;
  }
}
</style>
