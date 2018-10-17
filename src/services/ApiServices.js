import Api from './Api';

export default {
  login(params) {
    return Api().post('/signIn', {
      email: params.username,
      password: params.password,
    });
  },
  register(params) {
    return Api().post('/register', {
      email: params.username,
      password: params.password,
    });
  },
  feed() {
    return Api().get('/newsfeed');
  },
};
