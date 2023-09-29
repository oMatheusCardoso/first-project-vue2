import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}

new Vue({
  vuetify: new Vuetify(opts),
  render: h => h(App),
}).$mount('#app')

