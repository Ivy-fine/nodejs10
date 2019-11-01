<template>
  <el-container>
    <el-header>
      <h1 class="logo">校园超市管理系统</h1>
      <span>用户:{{username}}</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <leftsidemenu/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftsidemenu from "@/components/menu";
import { mapState } from "vuex";
export default {
  components:{
    leftsidemenu
  },
  computed:{
    ...mapState(['userinfo']),
    username(){
      return this.userinfo.username || sessionStorage.username
    }
  }
};
</script>

<style>
.el-header{
    color: #333;
    text-align: left;
    line-height: 60px;
    display: flex;
    box-shadow: 0px 3px 13px 3px #eee;
    justify-content: space-between;
  }
  
  .el-aside {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    color: #333;
    overflow-y: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
  
</style>