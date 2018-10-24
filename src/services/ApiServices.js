import Api from './Api';

export default {
  login(params) {
    return Api.post('/signIn', {
      email: params.username,
      password: params.password,
      remember: params.remember,
    });
  },
  logout(params) {
    return Api.post('/signOut', {
      remember_token: params.rememberToken,
      token: params.token,
    });
  },
  register(params) {
    return Api.post('/register', {
      email: params.username,
      password: params.password,
    });
  },
  feed() {
    return Api.get('/newsfeed');
  },
  getPost(params) {
    return Api.get(`/getpost/${params.id}`);
  },
};
