<template>
  <div class="tabBar">
      <div class="tabNav">
          <span v-for="(item,index) in navArr" :key="index" :class="{active:curInd==index}" @click="handleClick(index,item.type)">{{item.text}}</span>
      </div>
      <div class="tablist">
          <dl v-for="(item,index) in list" :key="index" @click="gotoDetail(item.id)">
              <dt>
                  <img :src="'api/'+item.pimg" alt="">
              </dt>
              <dd>
                  <p>{{item.pname}}</p>
                  <p>{{item.desc}}</p>
                  <p>￥{{item.price}}</p>
              </dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:Array,
    },
    data(){
        return{
            navArr:[
                {
                    type:"",
                    text:'全部'
                },
                {
                    type:'1',
                    text:'水果'
                },{
                    type:'2',
                    text:'干果'
                },
                {
                    type:'3',
                    text:'蔬菜'
                },
                {
                    type:'4',
                    text:'乳制品'
                }
            ],
            curInd:0
        }
    },
    methods:{
        handleClick(index,type){
            this.curInd = index
            this.$emit('changeType',type)
        },
        gotoDetail(id){
            this.$router.push("/detail/"+id)
        }
    }
}
</script>

<style lang="scss">
    .tabBar{
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .tabNav{
        display: flex;
        justify-content: space-around;
        line-height: 44px;
        height: 44px;
        flex-shrink: 0;
        border: 1px solid #eee;
        border-width: 1px 0;
        span{
            &.active{
                color: red;
            }
        }
    }
    .tablist{
        flex: 1;
        // overflow-y: auto;
        dl{
            display: flex;
            padding: 10px;
            dt{
                width: 100px;
                height: 100px;
                margin-right: 10px;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
    }
</style>