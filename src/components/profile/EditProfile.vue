<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Edit Profile</h5>
                        <form class="form-profile" @submit.prevent="handleSubmit">
                        <div class="form-label-group text-left">
                            <label for="username"><b>Username</b></label>
                            <input type="text" id="username" class="form-control"
                             placeholder="username" v-model="user.username" required autofocus>
                        </div>

                        <div class="form-label-group text-left">
                            <label for="firstname"><b>First Name</b></label>
                            <input type="text" id="firstname" class="form-control"
                             placeholder="John" v-model="user.firstname" required>
                        </div>

                        <div class="form-label-group text-left">
                            <label for="lastname"><b>Last Name</b></label>
                            <input type="text" id="lastname" class="form-control"
                             placeholder="Doe" v-model="user.lastname" required>
                        </div>
                        <div class="form-label-group text-left">
                          <label for="avatar"><b>Avatar</b></label>
                          <v-gravatar email="user.email" />
                        </div>
                        <div class="form-label-group text-left">
                            <label for="description"><b>Description</b></label>
                            <input type="text" id="description" class="form-control"
                             placeholder="Bio" v-model="user.bio">
                        </div>
                        <div class="form-label-group text-left">
                          <label for="type"><b>Type of Profile</b></label>
                          <br>
                          <input type="radio" id="private" value="private" v-model="user.type">
                          <label for="private">Private</label>
                          <input type="radio" id="public" value="public" v-model="user.type">
                          <label for="public">Public</label>
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
/* eslint-disable no-console */
import Vue from 'vue';
import { mapActions } from 'vuex';
import Gravatar from 'vue-gravatar';
import ApiServices from '../../services/ApiServices';

Vue.component('v-gravatar', Gravatar);

export default {
  name: 'EditProfile',
  data() {
    return {
      user: {
        email: '',
        username: '',
        firstname: '',
        lastname: '',
        bio: '',
        type: '',
      },
      submitted: false,
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    ...mapActions('account', ['updateProfile', 'logout']),
    async getProfile() {
      try {
        const response = await ApiServices.getProfile();
        // console.log(response);
        if (response.data.length !== 0) {
          const data = response.data.user;
          this.user.email = data.email;
          this.user.username = data.username;
          this.user.firstname = data.firstname;
          this.user.lastname = data.lastname;
          this.user.bio = data.bio;
          this.user.type = data.type;
        }
      } catch (e) {
        if (e.response.status === 401 && e.response.data.error === 'token_expired') {
          this.logout();
        }
      }
    },
    handleSubmit() {
      this.submitted = true;
      this.updateProfile(this.user);
    },
  },
};
</script>
