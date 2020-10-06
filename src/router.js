import Vue from 'vue'
import Router from 'vue-router'

import Shop from './views/Shop.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Shop
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})