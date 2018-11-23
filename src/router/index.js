import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'
import Menu from 'views/layout/menu'
import Demo from 'views/test/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: Menu,
		children: [{
			path: '/hello',
			name: 'hello',
			component: HelloWorld
		},
		{
			path: '/demo',
			name: 'demo',
			component: Demo
		}]
    }
  ]
})
