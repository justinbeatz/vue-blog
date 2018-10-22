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
            <li class="nav-item active">
                <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item" v-show="blogpost">
              <router-link class="nav-link" to="/" @click="goList('post')">
              Volver al listado</router-link>
            </li>
            <li class="nav-item" v-show="blogsearch">
              <router-link class="nav-link" to="/" @click="goList('search')">
              Volver a la Busqueda</router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Navigation',
  data() {
    return {
      links: [],
    };
  },
  computed: {
    ...mapState('blog', {
      blogpost: 'blogpost',
      blogsearch: 'blogsearch',
    }),
    ...mapActions({
      togglePost: 'blog/toggleBlogPost',
      toggleSearch: 'blog/toggleBlogSearch',
    }),
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
  },
};
</script>
