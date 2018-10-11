import Vue from 'vue';
import Router from 'vue-router';
// import BlogFeed from '@/components/blog/BlogFeed';
import Home from '@/components/Home';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
  ],
});
