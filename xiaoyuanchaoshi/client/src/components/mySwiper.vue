<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in carouselList" :key="index">
              <img :src="item.imgUrl" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
import { getCarouselList } from "@/api/home";
export default {
    data(){
        return {
            carouselList:[]
        }
    },
    async created(){
      const carouselList = await getCarouselList();
      this.carouselList = carouselList.data.data;
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
                loop:true,
                autoplay:true
            })
        })
    }
}
</script>

<style>

</style>