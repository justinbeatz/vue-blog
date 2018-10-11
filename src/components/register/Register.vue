<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Register</h5>
                        <form class="form-signin" @submit.prevent="handleSubmit">
                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control"
                             placeholder="Email address" v-model="user.username" required autofocus>
                            <div v-if="submitted && errors.has('username')"
                            class="invalid-feedback">{{ errors.first('username') }}</div>
                        </div>

                        <div class="form-label-group">
                            <input type="password" v-model="user.password" placeholder="Password"
                            v-validate="{ required: true, min: 6 }" name="password"
                            class="form-control" :class="{ 'is-invalid':
                            submitted && errors.has('password') }" />
                            <div v-if="submitted && errors.has('password')"
                            class="invalid-feedback">{{ errors.first('password') }}</div>
                        </div>

                        <div class="form-label-group">
                            <input type="password" placeholder="Password Confirmation"
                            v-model="user.passwordConfirmation"
                            v-validate="{ required: true, min: 6 }" name="password-confirmation"
                            class="form-control" :class="{ 'is-invalid':
                            submitted && errors.has('password-confirmation') }" />
                            <div v-if="submitted && errors.has('password-confirmation')"
                            class="invalid-feedback">{{ errors.first('password-confirmation') }}
                            </div>
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit">Register</button>
                         <router-link to="/login" class="btn btn-link">Login</router-link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        passwordConfirmation: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>
