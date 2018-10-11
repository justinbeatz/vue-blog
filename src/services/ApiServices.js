import Api from './Api';

export default {
  login(params) {
    return Api().post('http://kationdev.com/dev/vue-blog/api/v1/signIn', {
      email: params.username,
      password: params.password,
    });
  },
  register(params) {
    return Api().post('http://kationdev.com/dev/vue-blog/api/v1/register', {
      email: params.username,
      password: params.password,
    });
  },
  feed() {
    return Api().get('http://kationdev.com/dev/vue-blog/api/v1/newsfeed');
  },
};
