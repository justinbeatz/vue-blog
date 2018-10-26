// import router from '../router';
import ApiServices from '../services/ApiServices';

const actions = {
  toggleBlogPost({ commit }, value) {
    commit('setBlogPost', value);
  },
  newPost({ dispatch }, postdata) {
    /* eslint-disable no-console */
    // console.log(postdata);
    ApiServices.newPost(postdata)
      .then((response) => {
        dispatch('alert/success', response.data, { root: true });
        // router.push('/');
      },
      (error) => {
        dispatch('alert/error', error, { root: true });
      });
  },
};

const mutations = {
  setBlogPost(state, value) {
    state.blogpost = value;
  },
  setBlogSearch(state, value) {
    state.blogsearch = value;
  },
};

const getters = {
  getOnBlogPost: state => state.blogpost,
  getOnBlogSearch: state => state.blogsearch,
};

const state = {
  blogpost: false,
  blogsearch: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
