import router from '../router';
import ApiServices from '../services/ApiServices';

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    ApiServices.login(username, password)
      .then((userdata) => {
        commit('loginSuccess', userdata);
        router.push('/');
      },
      (error) => {
        commit('loginFailure', error);
        dispatch('alert/error', error, { root: true });
      });
  },
  logout({ commit }) {
    ApiServices.logout();
    commit('logout');
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

const mutations = {
  loginRequest(state, username) {
    state.status = { loggingIn: true };
    state.user = username;
  },
  loginSuccess(state, username) {
    state.status = { loggedIn: true };
    state.user = username;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
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

const user = JSON.parse(localStorage.getItem('user'));

const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
