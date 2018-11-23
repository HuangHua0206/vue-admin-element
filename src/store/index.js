import Vue from 'vue'
import Vuex from 'vuex'
import getters from 'store/getters'
import test from 'store/modules/test'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
  	test
  },
  getters
})

export default store