import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:5000/'

Vue.use(VueFirestore)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
