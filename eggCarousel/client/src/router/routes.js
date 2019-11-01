import Login from '@/views/Login/index.jsx'
import Home from '@/views/Home/index.jsx'
import Main from '@/views/Home/main'
import Classify from '@/views/Home/classify'
const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/main',
                component:Main
            },
            {
                path:'/home/classify',
                component:Classify
            },
            {
                path:'/home',
                redirect:'/home/main'
            }
        ]
    },
    {
        path:'/',
        redirect:'/home'
    }
]

export default routes;