import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; // 引入elementUI
import echarts from 'echarts'; // 全局引入echarts


Vue.use(ElementUI,{size: 'mini', zIndex: 3000});
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts



new Vue({
  //el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
