<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Create New Post</h5>
                        <form class="form-profile" @submit.prevent="handleSubmit">
                          <div class="form-label-group text-left">
                              <label for="title"><b>Title</b></label>
                              <input type="text" id="title" class="form-control"
                              placeholder="Title" v-model="post.title" required autofocus>
                              <div v-if="submitted && errors.has('post.title')"
                              class="invalid-feedback">{{ errors.first('post.title') }}</div>
                          </div>

                          <div class="form-label-group text-left">
                              <label for="content"><b>Content</b></label>
                              <froala :tag="'textarea'" :config="config"
                              v-model="post.content"></froala>
                          </div>

                          <div class="form-label-group text-left ml-4">
                            <!-- <label for="type"><b>Type of Profile</b></label> -->
                            <br>
                            <input type="checkbox" class="custom-control-input" id="allowComments"
                              v-model="post.allowComments">
                              <label class="custom-control-label"
                              for="allowComments">Allow Comments</label>
                          </div>
                          <div class="form-label-group mt-3">
                            <button class="btn btn-lg btn-primary btn-block text-uppercase"
                          type="submit">Save</button>
                          </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewPost',
  data() {
    return {
      post: {
        title: '',
        content: '',
        allowComments: false,
        userid: '',
      },
      submitted: false,
      config: {
        // iconsTemplate: 'font_awesome_5l',
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false,
      },
    };
  },
  computed: {
    ...mapGetters('account', {
      userIn: 'getLoggedIn',
      user: 'getUser',
    }),
    loggedIn() {
      return this.userIn;
    },
    userId() {
      return this.user ? this.user.id : null;
    },
  },
  methods: {
    ...mapActions('blog', ['newPost']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.post.userid = this.userId;
          /* eslint-disable no-console */
          this.newPost(this.post);
        }
      });
    },
  },
};
</script>
