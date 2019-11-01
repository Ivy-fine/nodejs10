<template>
    <layout>
      <router-view/>
    </layout>
</template>
<script>
import layout from '@/components/layout'
export default {
  components:{
    layout
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;
}
html,body {
  width: 100%;
  height: 100%;
}

</style>
