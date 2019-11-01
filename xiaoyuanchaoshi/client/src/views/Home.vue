<template>
  <div class="home">
    <mySwiper class="banner" />
    <myNav :list="navList" />
    <tabBar :list="productList" @changeType="changeType" />
  </div>
</template>

<script>
import mySwiper from "@/components/mySwiper.vue";
import myNav from "@/components/nav.vue";
import tabBar from "@/components/tabBar.vue";
import { getNavList, getProductList } from "@/api/home";
export default {
  name: "home",
  data() {
    return {
      carouselList: [],
      navList: [],
      productList: [],
      curType: ""
    };
  },
  components: {
    mySwiper,
    myNav,
    tabBar
  },
  methods: {
    async init() {
      const navList = await getNavList();
      const productList = await getProductList();
      this.navList = navList.data.data;
      this.productList = productList.data.data;
    },
    changeType(type) {
      this.curType = type;
      getProductList({type:this.curType}).then(res=>{
        this.productList = res.data.data;
      })
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.banner {
  width: 100%;
  height: 150px;
  img {
    width: 100%;
  }
}
</style>