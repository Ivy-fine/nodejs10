<template>
  <footer>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <dl>
          <dt>
            <i :class="item.icon"></i>
          </dt>
          <dd>{{item.text}}</dd>
        </dl>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {
          text:'首页',
          icon:'fa fa-home'
        },
        {
          text:'分类',
          icon:'fa fa-th-large'
        },
        {
          text:'购物车',
          icon:'fa fa-shopping-cart'
        },
        {
          text:'我的',
          icon:'fa fa-user'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  ul{
    display: flex;
    padding-top: 3px;
    li{
      flex: 1;
      text-align: center;
      dl{
        dd{
          font-size: 12px;
        }
      }
    }
  }
</style>