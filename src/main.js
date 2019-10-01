import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
