import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import the ionic and its style
import Ionic from '@ionic/vue'
import '@ionic/core/css/ionic.bundle.css'
// then use the ionic on vue
Vue.use(Ionic)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
