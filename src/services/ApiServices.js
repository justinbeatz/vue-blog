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
    return Api.post('/signup', {
      email: params.username,
      password: params.password,
      password_confirmation: params.passwordConfirmation,
    });
  },
  getProfile() {
    return Api.get('/profiles');
  },
  updateProfile(params) {
    return Api.put('/profiles', {
      first_name: params.firstname,
      last_name: params.lastname,
      bio: params.bio,
      type: params.type,
    });
  },
  feed() {
    return Api.get('/newsfeed');
  },
  getPost(params) {
    return Api.get(`/getpost/${params.id}`);
  },
  newPost(params) {
    /* eslint-disable no-console */
    console.log(params.userid);
    return Api.post('/posts', {
      title: params.title,
      content: params.content,
      user_id: params.userid,
      allow_comments: params.allowComments,
    });
  },
};
