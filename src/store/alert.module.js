import Vue from 'vue';
import Toastr from 'vue-toastr';
import 'vue-toastr/dist/vue-toastr.css';

Vue.use(Toastr);

const self = new Vue();

const actions = {
  success({ commit }, message) {
    commit('success', message);
  },
  error({ commit }, message) {
    commit('error', message);
  },
  clear({ commit }, message) {
    commit('success', message);
  },
};
/* eslint-disable no-console */
const mutations = {
  success(state, data) {
    state.type = 'alert-success';
    state.message = data.message;
    self.$toastr.s(data.message, data.status);
  },
  error(state, response) {
    state.type = 'alert-danger';
    state.message = response.data.message;
    self.$toastr.e(response.data.message, response.data.error);
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

const state = {
  type: null,
  message: null,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
