<template>

</template>
<script>
// import $http from '@/utils/http.js'       //ajax请求
import VueScroller from 'vue-scroller'
import Vue from 'vue'
Vue.use(VueScroller)

export default {
    name: 'demo',
  components: {
 },
data () {
  return {
    items: [],
    offset: 0 
  }
},
mounted () {
  // this.getDate(1)
},
methods: {
  getDate (offset, fn) {
    // $http.get({
    //   url: 'api/goods?',
    //   data: {
    //     'authToken': this.$route.params.authToken, 
    //     'offset': offset,
    //     'limit': 10
    //   },
    //   success: data => {
    //     if (data.length < 10) {    //每次请求数据是10条，如果数据不够10条，就是没数据了 让页数=0；
    //       this.offset = 0
    //       fn(true)
    //       return
    //     } else {
    //       if (fn) fn()
    //     }
    //     if (offset === 1) {
    //       this.items = data   //如果是想下滑动，刷新数据 就让items等于最新数据
    //     } else {
    //       this.items = this.items.concat(data) //否则就把数据拼接
    //     }
    //   },
    //   error: err => {
    //     console.log(err, '----------err')
    //     // let message = err.response
    //     // toastr.toastrUtil(message.data[0].errorMessage)
    //   }
    // })
  },
  infinite (done) {
    this.offset++    //每当向上滑动的时候就让页数加1
    this.getDate(this.offset, done)
  },
  refresh (done) { //这是向下滑动的时候请求最新的数据
    this.offset = 0
    this.getDate(1, done)
  }
}

}
</script>

<style lang="less" scoped>
.row {
  display: block;
  width: 100%;
  height: 50px;
  padding: 10px 0 10px 15px;
  font-size: 16px;
  line-height: 30px;
  color: #444; 
  background-color: #fff;
 }
.grey-bg {
    background-color: #eee;
}

</style>
