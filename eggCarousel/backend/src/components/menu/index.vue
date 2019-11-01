<template>
  <el-menu :default-openeds="['1', '3']" background-color="#E9EEF3">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>系统首页
      </template>
      <el-menu-item index="1-1" @click="gotoBanner">广告管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>商品管理
      </template>
      <el-menu-item index="2-1" @click="gotoProduct">商品列表</el-menu-item>
      <el-menu-item index="2-2">分类管理</el-menu-item>
      <el-menu-item index="2-3">评论管理</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>订单管理
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods:{
    gotoBanner(){
      this.$router.push("/home/banner")
    },
    gotoProduct(){
      this.$router.push("/home/product")
    }
  }
};
</script>

<style>
</style>