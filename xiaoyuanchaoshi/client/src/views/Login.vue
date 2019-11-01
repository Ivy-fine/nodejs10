<template>
  <div class="login">
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <button @click="login">login</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            pwd:''
        }
    },
    methods:{
        login(){
                
        }
    }
}
</script>

<style>

</style>