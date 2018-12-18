import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import loading from './common/imgs/loading.gif'		//引入图片懒加载所需的gif

Vue.config.productionTip = false

//项目全局引入lazyload
Vue.use(VueLazyLoad,{
	loading
})

new Vue({
	el:'#app',
	render: h=> h(App),
	router,
	store,
})
