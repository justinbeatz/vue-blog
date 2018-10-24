// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VeeValidate from 'vee-validate';
// import Toastr from 'vue-toastr';
// import 'vue-toastr/dist/vue-toastr.css';
import Api from './services/Api';
import router from './router';
import store from './store';
import App from './App';

library.add(far);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$axios = Api;
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
// Vue.use(Toastr);

// router.beforeEach((to, from, next) => {
//   if (from.name === 'BlogFeed' && to.name === 'BlogPost') {
//     store.dispatch('toggleBlogPost', true);
//     next();
//   } else if (to.name === 'BlogPost') {
//     store.dispatch('toggleBlogPost', true);
//     next();
//   } else {
//     next();
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
