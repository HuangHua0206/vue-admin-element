import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import 'styles/iconfont/iconfont.css'
import App from './App'
import router from './router'
import i18n from './lang'
import store from 'store'

Vue.use(ElementUI, { 
	zIndex: 3000, 
	i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

Vue.use({
  vm
})