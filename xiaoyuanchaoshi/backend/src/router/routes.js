import Login from '@/containers/login/login'
import Home from '@/containers/home/home'

const routes = [
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/home',
        name:'home',
        component:Home,
    },{
        path:'/',
        redirect:'/login'
    }
]
export default routes;