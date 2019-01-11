import api from "../api"

const initialState = {
  articles: [],
  articlesCount: 0,
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
  getArticles: ({ commit }, page) => {
    let query = `offset=${(page-1) * 20}&limit=20`

    return api.article.getAll(query).then(r => {
      commit('getArticles', r.data)
      commit('articlesCount', r.data)
    })
  },
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
  articlesCount(state, data) {
    state.articlesCount = data.articlesCount
  },
  getArticles(state, data) {
    state.articles = data.articles
  },
  getArticle(state, data) {
    state.article = data.article
  },
  getComment(state, data) {
    state.comments = data.comments
  },
  destroyArticle(state) {
    state.article = {
      author: {},
      title: "",
      description: "",
      body: "",
      tagList: []
    }
    state.comments = []
  },
}

const getters = {
  article: state => state.article,
  comments: state => state.comments,
  articles: state => state.articles,
}

export default {
  state,
  actions,
  mutations,
  getters
}
