import Vue from 'vue';
import Router from 'vue-router';
// import BlogFeed from '@/components/blog/BlogFeed';
// import Home from '@/components/Home';
import BlogPost from '@/components/blog/BlogPost';
import BlogFeed from '@/components/blog/BlogFeed';
import NewPost from '@/components/blog/NewPost';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';
import EditProfile from '@/components/profile/EditProfile';

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
      path: '/new-post',
      name: 'NewPost',
      component: NewPost,
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
    {
      path: '/profile/:id',
      name: 'EditProfile',
      component: EditProfile,
    },
    { path: '*', redirect: '/' },
  ],
});
