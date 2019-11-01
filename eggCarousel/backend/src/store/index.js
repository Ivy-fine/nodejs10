import Vue from 'vue'
import Vuex from 'vuex'
import {getCarouselList,addCarousel} from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carouselList:[],
    ind:0,
    pageSize:8,
    total:0,
    userinfo:{}
  },
  mutations: {
    setCarouselList(state,opt){
      state.carouselList = opt.data
      state.total = opt.total
    },
    setInd(state,ind){
      state.ind = ind
    },
    setUserInfo(state,info){
      state.userinfo = {...info}
    }
  },
  actions: {
    _getCarouselList({commit,state}){
      getCarouselList({ind:state.ind,pageSize:state.pageSize}).then(res => {
        commit('setCarouselList',{data:res.data.result,total:res.data.count})
      });
    },
    _addCarousel({dispatch},params){
      addCarousel(params).then(res=>{
        if(res.data.code===1){
          dispatch('_getCarouselList')
        }
      })
    }
  },
  modules: {
  }
})
