<template>
  <div>
    <div class="title">
      <h3>首页Banner</h3>
      <addBtn />
    </div>
    <div class="bannerContent">
      <dl v-for="(item) in carouselList" :key="item.id">
        <dt>
          <img :src="`/api/public/${item.pic_url}`" alt />
        </dt>
        <dd>
          <p>标题：{{item.title}}</p>
          <p>链接：{{item.link}}</p>
          <!-- <p>{{new Date(item.start_time).toLocaleString('chinese',{hour12:false})}}-{{new Date(item.end_time).toLocaleString('chinese',{hour12:false})}}</p> -->
        </dd>
      </dl>
    </div>
    <div class="footer">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="changePage"></el-pagination>
    </div>
  </div>
</template>

<script>
import addBtn from "@/components/addBtn";
import { mapState,mapMutations,mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed:{
    ...mapState(['carouselList','ind','pageSize','total'])
  },
  components: {
    addBtn
  },
  created() {
    this._getCarouselList()
  },
  methods:{
    ...mapActions(['_getCarouselList']),
    ...mapMutations(['setInd']),
    changePage(page){
      const ind = (page-1)*8 
      this.setInd(ind)
      this._getCarouselList()
    }
  }
};
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  line-height: 100px;
}
.bannerContent {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  min-height: 600px;
  dl {
    width: 25%;
    padding: 10px;
    dt {
      img {
        width: 100%;
        height: 200px;
      }
    }
    dd {
      line-height: 30px;
      text-align: left;
      padding-left: 10px;
      font-size: 14px;
    }
  }
}
.footer{
    text-align: center;
    margin-top: 50px;
}
</style>