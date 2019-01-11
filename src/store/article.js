import api from "../api"

const initialState = {
  article: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  },
  comments: [],
}

export const state = {
  ...initialState,
}

export const actions = {
  getArticle: ({ dispatch, commit, state, rootState }, slug) => {
    return api.article.get(slug).then(r => {
      commit('getArticle', r.data)
    })
  },
  getComment: ({ commit }, slug) => {
    return api.comments.get(slug).then(r => {
      commit('getComment', r.data)
    })
  },
  addComment: (_, data) => {
    return api.comments.add(data.slug, data)
  },
};

export const mutations = {
  getArticle(state, data) {
    state.article = data.article
  },
  getComment(state, data) {
    state.comments = data.comments
  },
}

const getters = {
  article: state => state.article,
  comments: state => state.comments,
}

export default {
  state,
  actions,
  mutations,
  getters
}
