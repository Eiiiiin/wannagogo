<template>
    <div id="designer">
        <header>
            <transition>
            <img ref='topImg' v-if="show"  class="abc" src="../../static/img/designerimgtop.png" alt="" @touchmove='ImgSize'>
            </transition>
        </header>
       <div class="main">
           <el-row :gutter="2">
  <el-col :span="12" v-for="(item,i) in designerList" :key="i">
      <img :src="item.img" alt="">
      </el-col>
 
</el-row>
       </div>
    </div>
</template>
<script>
    export default {
    name: '',
    data(){
        return{
            imgPageY:401,
            show:true,
            designerList:[]
        }
    },
    created(){
this.getDesinerList("",data=>{
    this.getDesinerList.data
})

    },
    methods: {
        getDesinerList:function(){
            let that = this;
            that.$axios.get('../../static/mock/designerList.json').then(function(res){
                
                that.designerList=res.data.list
              
            })
        },
    ImgSize:function($event){
        // debugger;
        console.log($event.changedTouches[0].pageY);
        var imgY = $event.changedTouches[0].pageY;
        this.imgPageY = imgY;
        this.show=true
// this.$refs.topImg.style[transform] = `scale(${scale})`
if(imgY>400){

}
 
        
}
    }
}
</script>
<style lang="less" scoped>
#designer{
    header{
        width:100%;
        margin-bottom:5.31rem;
        img{
            display: block;
            width:100%;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition-duration: 1s;
  transition: scale(1.5,1.5);
  transition:rotate(-80deg)
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
 transition-duration: 1s;
  transition: scale(1,1);
}
.main{
    img{
        display: inline-block;
        width:100%;
        height:100%;
    }
}
}
</style>
