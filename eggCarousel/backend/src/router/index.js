import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import ("@/views/home/Home"),
    redirect:'/home/banner',
    meta:{
      requiredLogined:true
    },
    children:[
      {
        path:'/home/banner',
        name:'banner',
        component:()=>import("@/views/home/banner")
      },
      {
        path:'/home/product',
        name:'product',
        component:()=>import("@/views/home/product")
      }
    ]
  },
  {
    path:'/user/login',
    component:()=>import('@/views/user/login')
  },
  {
    path:'/',
    redirect:'/home'
  }  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.matched.some(record=>record.meta.requiredLogined)){
//     if(sessionStorage.token){
//       next()
//     }else{
//       next({path:"user/login"})
//     }
//   }else{
//     next()
//   }
// })
export default router
