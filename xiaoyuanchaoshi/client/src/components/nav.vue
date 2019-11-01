<template>
  <div class="nav">
      <dl v-for="(item,index) in list" :key="index">
          <dt><i :class="`fa ${item.icon}`" aria-hidden="true"></i></dt>
          <dd>{{item.text}}</dd>
      </dl>
  </div>
</template>

<script>
import "@/assets/font-awesome/css/font-awesome.min.css"
export default {
    props:{
        list:Array
    }
}
</script>

<style lang="scss">
    .nav{
        width:100%;
        display: flex;
        justify-content: space-around;
        margin:20px 0 10px 0;
        flex-wrap: wrap;
        dl{
            width: 25%;
            text-align: center;
            margin-bottom: 10px;
            dt{
                margin:0 25px;
                font-size: 32px;
                background: orange;
                border-radius: 5px;
                i{
                    color: #333;
                }
            }
            dd{
                font-size: 14px;
            }
        }
    }
</style>