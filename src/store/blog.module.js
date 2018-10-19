

const actions = {
  toggleBlogPost({ commit }, value) {
    commit('setBlogPost', value);
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
