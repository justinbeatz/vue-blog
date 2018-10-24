import Vue from 'vue';
import Router from 'vue-router';
// import BlogFeed from '@/components/blog/BlogFeed';
// import Home from '@/components/Home';
import BlogPost from '@/components/blog/BlogPost';
import BlogFeed from '@/components/blog/BlogFeed';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'BlogFeed',
      component: BlogFeed,
    },
    {
      path: '/blog/:id',
      name: 'BlogPost',
      component: BlogPost,
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
    { path: '*', redirect: '/' },
  ],
});
