<template>
  <div class="app">
    <v-header class="header">
      <div>
        <h3>校园超市</h3>
        <p>
          <input type="text" placeholder="请输入搜索内容" />
          <i class="fa fa-search"></i>
        </p>
      </div>
    </v-header>
    <section class="content">
      <slot></slot>
    </section>
    <v-footer class="footer"></v-footer>
  </div>
</template>

<script>
import vHeader from "./header";
import vFooter from "./footer";
export default {
  components: {
    vHeader,
    vFooter
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.content {
  flex: 1;
  overflow-y: auto;
}
.header {
  border-bottom: 1px solid #ccc;
  text-align: center;
  h3 {
    padding: 10px 0;
  }
  p {
    display: flex;
    align-items: center;
    input {
      line-height: 30px;
      border: 0;
      text-indent: 15px;
      flex: 1;
      outline: none;
    }
    i{
        margin-right: 10px;
    }
  }
}
.footer {
  height: 44px;
  border-top: 1px solid #ccc;
}
</style>