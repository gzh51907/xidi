import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
  preLoad: 1.5,
  loading: './assets/loading.gif',
  err:'./imgs/No-picture.png'
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)

new Vue({
  Vue,
  router,
  render: h => h(App),
}).$mount('#app')
