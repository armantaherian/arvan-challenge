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
  latestPosts: [],
  tags: [],
}

export const state = {
  ...initialState,
}

export const actions = {
  getArticles: ({ commit }, params) => {
    let query = `offset=${(params.page-1) * 20}&limit=20`

    if (params.tag) {
      query += `&tag=${params.tag}`
    }

    return api.article.getAll(query).then(r => {
      commit('getArticles', r.data)
      commit('articlesCount', r.data)
    })
  },
  // eslint-disable-next-line
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
  getLatestPosts: ({ commit }) => {
    let query = `offset=0&limit=5`

    return api.article.getAll(query).then(r => {
      commit('getLatestPosts', r.data)
    })
  },
  getTags: ({ commit }) => {
    return api.article.getTags().then(r => {
      commit('getTags', r.data)
    })
  }
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
  getLatestPosts(state, data) {
    state.latestPosts = data.articles
  },
  getTags(state, data) {
    state.tags = data.tags
  },
}

const getters = {
  article: state => state.article,
  comments: state => state.comments,
  articles: state => state.articles,
  latestPosts: state => state.latestPosts,
  tags: state => state.tags,
}

export default {
  state,
  actions,
  mutations,
  getters
}
