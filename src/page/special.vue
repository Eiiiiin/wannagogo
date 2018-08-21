<template>
<div id="special">
    <header>
        <div class="toptip"><span>专题</span> </div>
    </header>
    <div class="banner">
         <swiper :options="swiperOption" ref="mySwiper" style="height:35rem">
    <!-- slides -->
    <swiper-slide v-for="(item,i) in bannerImg" :key="i">
        <img :src="item.imgSrc" alt="">
    </swiper-slide>
  </swiper>

    </div>
</div>
</template>
<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
    name: '',
    data(){
        return{
            bannerImg:[],
            swiperOption: {
		        // autoplay:{
                //     delay: 3000,
                //     stopOnLastSlide: false,
                // },
                effect : 'coverflow',
                speed:500,
	        },

            
        }
    },
    created(){
        this.getBanner("",data=>{
            this.getBanner.data
        })
    },
    methods: {
        getBanner:function(){
            let that = this;
            that.$axios.get('../../static/mock/bannerImg.json').then(function(res){
                that.bannerImg=res.data.list
            })
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>
<style lang="less" scoped>
#special{
    header{
        .toptip{
            
            font-size: 1.3rem;
            text-align: center;
            position: relative;
            color:#4a4a4a;
            margin-top:1.19rem;
            margin-bottom:.78rem;
            span{
                display: inline-block;
                padding:0 .4rem;
            }
        &:before{
            content:'';
            display: block;
            width:4.56rem;
            height:.13rem;
            background-color: #dbdbdb;
            position:absolute;
            top:50%;
            left:5.81rem;
            margin-right:1rem;
        }
         &:after{
            content:'';
            display: block;
            width:4.56rem;
            height:.13rem;
            background-color: #dbdbdb;
            position:absolute;
            top:50%;
            margin-left:1rem;
            right:5.81rem;
        }
        }
    }
    .banner{
         img{
             display: block;
             width:100%;
             height:100%;
         }
    }
}
</style>
