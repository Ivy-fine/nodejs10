<template>
  <div class="list">
    <dl v-for="blog in list" :key="blog.bid">
      <dt>{{blog.title}}</dt>
      <dd>
        <img :src="`http://localhost:7001/public/${blog.avatar}`" alt />
        <span>{{blog.username}}</span>
        <span>{{blog.time}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from "@/utils/http";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios.get("/api/getBlogList").then(res => {
      console.log(res);
      this.list = res.data.result;
    });
  }
};
</script>

<style lang="scss">
.list {
  width: 100%;
  height: 100%;
}
dl {
  margin: 10px;
  padding: 10px;
  border: 1px solid #eee;
  dt {
    line-height: 30px;
  }
  dd {
    display: flex;
    img {
      width: 50px;
      height: 40px;
    }
    span {
      padding: 0 10px;
    }
  }
}
</style>