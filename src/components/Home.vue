<template>
    <main class="blog">
    <blog-nav />
    <blog-feed/>
    </main>
</template>
<script>
import BlogNav from './BlogNav';
import BlogFeed from './blog/BlogFeed';

export default {
  name: 'Blog',
  components: { BlogNav, BlogFeed },
  data() {
    return {

    };
  },
};
</script>
