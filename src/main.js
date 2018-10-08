// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';
// setup fake backend
import { configureFakeBackend } from './helpers/export-star';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

configureFakeBackend();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
