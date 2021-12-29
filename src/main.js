import './plugins/bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import bootstrapVue from './plugins/bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  bootstrapVue
}).$mount('#app')
