<template>
  <div class="detail">
      <img :src="`/api/${detailInfo.pimg}`" alt="">
      <p>{{detailInfo.pname}}</p>
      <p>￥{{detailInfo.price}}</p>
      <p>描述{{detailInfo.description}}</p>
  </div>
</template>

<script>
import {getDetail} from '@/api/home.js'
export default {
    data(){
        return {
            detailInfo:{pimg:""},
            id:1
        }
    },
    mounted(){
        getDetail(this.id).then(res=>{
            this.detailInfo = res.data.data
        })
    },
    created(){
        this.id = this.$route.params.id
    }
}
</script>

<style>
img{
    width: 100%;
}
</style>