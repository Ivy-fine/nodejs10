<template>
  <div>
    <input type="text" placeholder="用户名" v-model="username" />
    <br />
    <input type="password" placeholder="密码" v-model="password" />
    <br />
    <button @click="login">login</button>
  </div>
</template>

<script>
import axios from "@/utils/http";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const { username, password } = this;
      axios.post("/api/user/login", { username, password }).then(res => {
        if (res.data.code === 1) {
          window.sessionStorage.token = res.data.token;
        }
        this.$router.replace("/list");
      });
    }
  }
};
</script>

<style>
</style>