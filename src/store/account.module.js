import router from '../router';
import ApiServices from '../services/ApiServices';

/* eslint-disable no-console */
const actions = {
  login({ dispatch, commit }, { username, password, remember }) {
    commit('loginRequest', { username });

    ApiServices.login({ username, password, remember })
      .then((response) => {
        commit('loginSuccess', response);
        router.push('/');
      },
      (error) => {
        commit('loginFailure', error);
        dispatch('alert/error', error, { root: true });
      });
  },
  logout({ commit }) {
    const user = JSON.parse(localStorage.getItem('user'));
    const rememberToken = user.remember_token;
    const token = JSON.parse(localStorage.getItem('token'));
    ApiServices.logout({ rememberToken, token });
    commit('logout');
    router.push('/login');
  },
  updateProfile({ dispatch }, userdata) {
    /* eslint-disable no-console */
    ApiServices.updateProfile(userdata)
      .then((response) => {
        dispatch('alert/success', response.data, { root: true });
      },
      (error) => {
        dispatch('alert/error', error.response, { root: true });
      });
  },
  register({ dispatch, commit }, userdata) {
    commit('registerRequest', userdata);

    ApiServices.register(userdata)
      .then((response) => {
        if (response.data !== '') {
          commit('registerSuccess', response.data);
          router.push(`/profile/${response.data.user.id}`);
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', response.data, { root: true });
          });
        } else {
          router.push('/register');
        }
      },
      (error) => {
        commit('registerFailure', error);
        dispatch('alert/error', error.response, { root: true });
      });
  },
};

/* eslint-disable no-unused-vars */
const mutations = {
  loginRequest(state, username) {
    state.status = { loggingIn: true };
    state.user = username;
  },
  loginSuccess(state, response) {
    state.status = { loggedIn: true };
    state.user = response.data.user;
    state.token = response.data.token;
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', JSON.stringify(state.token));
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
    localStorage.removeItem('user');
    localStorage.getItem('token');
  },
  registerRequest(state, user) {
    state.status = { registering: true };
  },
  registerSuccess(state, data) {
    state.status = { loggedIn: true };
    state.user = data.user;
    state.token = data.token;
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', JSON.stringify(state.token));
    console.log(data);
  },
  registerFailure(state, error) {
    state.status = {};
  },
};

const getters = {
  getLoggedIn: state => state.status.loggedIn,
  getToken: state => state.token || JSON.parse(localStorage.getItem('token')),
  getUser: state => state.user || JSON.parse(localStorage.getItem('user')),
};

const user = JSON.parse(localStorage.getItem('user'));
const token = user ? user.token : null;

const state = user
  ? { status: { loggedIn: true }, user, token }
  : { status: {}, user: null, token: null };

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
