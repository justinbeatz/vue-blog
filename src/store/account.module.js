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
  },
  test() {
    ApiServices.test();
  },
  register({ dispatch, commit }, userdata) {
    commit('registerRequest', userdata);

    ApiServices.register(userdata)
      .then(
        (response) => {
          commit('registerSuccess', response);
          router.push('/login');
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true });
          });
        },
        (error) => {
          commit('registerFailure', error);
          dispatch('alert/error', error, { root: true });
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
    // state.user.token = response.data.token;
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
  registerSuccess(state, user) {
    state.status = {};
  },
  registerFailure(state, error) {
    state.status = {};
  },
};

const getters = {
  getLoggedIn: state => state.status.loggedIn,
  getToken: state => state.token || localStorage.getItem('token'),
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
