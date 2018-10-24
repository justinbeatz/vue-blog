<template>
    <!-- Page Content -->
    <div class="container">

      <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

          <h1 class="my-4">Page Heading
            <small>Secondary Text</small>
          </h1>

          <!-- Blog Post -->
          <ul>
            <li v-for="post in feed" :key="post.id" @mouseover="isUserLogged = true"
             @mouseout="isUserLogged = false">
              <div v-show="isUserLogged"><font-awesome-icon :icon="['far', 'times-circle']"/></div>
              <div class="card mb-4">
              <img class="card-img-top" :src="post.imgUrl" :alt="post.title">
              <div class="card-body">
                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-text">{{ post.excerpt}}</p>
                <router-link :to="`/blog/${ post.id }`" @click="setList()">
                Read More &rarr;</router-link>
              </div>
              <div class="card-footer text-muted">
                <router-link :to="`/blog/${ post.id }`" @click="setList()">
                Posted on {{ post.date }}</router-link> by
                <a href="#">{{ post.author }}</a>
              </div>
            </div>
            </li>
          </ul>

          <!-- Pagination -->
          <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
              <a class="page-link" href="#">&larr; Older</a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Newer &rarr;</a>
            </li>
          </ul>

        </div>

        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

          <!-- Search Widget -->
          <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Side Widget -->
          <div class="card my-4">
            <h5 class="card-header">Side Widget</h5>
            <div class="card-body">
              You can put anything you want inside of these side widgets.
              They are easy to use, and feature the new Bootstrap 4 card containers!
            </div>
          </div>

        </div>

      </div>
      <!-- /.row -->

    </div>
    <!-- /.container -->
</template>
<script>

import ApiServices from '../../services/ApiServices';

export default {
  name: 'blog-feed',
  resource: 'BlogFeed',
  data() {
    return {
      feed: [],
      showDelete: true,
      isUserLogged: false,
    };
  },
  mounted() {
    this.getFeed();
  },
  methods: {
    async getFeed() {
      try {
        const response = await ApiServices.feed();
        if (response.data.length !== 0) {
          this.feed = response.data;
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.log(e);
      }
    },
    setList() {
      this.$store.commit('setBlogPost', true);
    },
  },
};
</script>
<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
