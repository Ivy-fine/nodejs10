import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Form,FormItem,Dialog,Button,Input,Upload,DatePicker, Container,Header,Aside,Main, Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,Pagination} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)
Vue.use(Upload)
Vue.use(DatePicker)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
