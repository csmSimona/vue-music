import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'common/stylus/index.styl'
import 'swiper/dist/css/swiper.css'

// FastClick消除点击300毫秒的延时 提高程序的运行效率
fastclick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
