// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import outer from './router'
import Header from './components/Header'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About'
import VueLeaflet from './components/VueLeaflet'
import VueRouter from '../node_modules/vue-router'
import VueResource from 'vue-resource'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//配置路由
const router = new VueRouter({
  routes:[
    {path: "/", component: VueLeaflet},
    {path: "/menu", component: Menu},
    {path: "/admin", component: Admin},
    {path: "/about", component: About},
    {path: "*", redirect:'/'}  //当输入错误的路由地址时，跳转到主页面
  ],
  mode:"history"

})

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
