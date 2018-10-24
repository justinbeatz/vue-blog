<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
        <a class="navbar-brand" href="/">Blog</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" v-show="blogpost">
                <router-link class="nav-link" to="/" @click="goList('post')">
                Volver al listado</router-link>
              </li>
              <li class="nav-item" v-show="blogsearch">
                <router-link class="nav-link" to="/" @click="goList('search')">
                Volver a la Busqueda</router-link>
              </li>
              <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item" v-show="loggedIn">
                  <router-link class="nav-link" to="/new-post">Create New Post</router-link>
              </li>
              <li class="nav-item" v-show="!loggedIn">
                  <router-link class="nav-link" to="/register">Register</router-link>
              </li>
              <li class="nav-item" v-show="!loggedIn">
                  <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item" v-show="loggedIn">
                  <a href="#" class="nav-link" @click="logOut()">Logout</a>
              </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Navigation',
  data() {
    return {
      links: [],
    };
  },
  mounted() {
    // this.loggedIn = localStorage.getItem('user') !== null;
  },
  computed: {
    ...mapState('blog', {
      blogpost: 'blogpost',
      blogsearch: 'blogsearch',
    }),
    ...mapGetters('account', {
      userIn: 'getLoggedIn',
      token: 'getToken',
    }),
    ...mapActions({
      togglePost: 'blog/toggleBlogPost',
      toggleSearch: 'blog/toggleBlogSearch',
    }),
    loggedIn() {
      return this.userIn;
    },
  },
  watch: {
    $route(to, from) {
      /* eslint-disable no-console */
      if (from.name === 'BlogFeed' && to.name === 'BlogPost') {
        this.$store.dispatch('blog/toggleBlogPost', true);
      } else if (from.name === 'BlogPost' && to.name === 'BlogFeed') {
        this.$store.dispatch('blog/toggleBlogPost', false);
      }
    },
  },
  methods: {
    goList(from) {
      if (from === 'post') {
        this.togglePost(true);
      } else if (from === 'search') {
        this.toggleSearch(true);
      }
    },
    logOut() {
      this.$store.dispatch('account/logout');
      this.$router.push('/');
    },
  },
};
</script>
