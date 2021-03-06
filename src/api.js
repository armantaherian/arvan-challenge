import axios from 'axios'
import { getToken } from '@/common/token'

const apiUrl = "https://conduit.productionready.io/api"

// Set default API URL
axios.defaults.baseURL = apiUrl;

// Request Handler
const sendRequest = (url, data, type = 'post') => {
  if (type !== 'get') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`
  }

  return axios({
    method: type,
    url: url,
    data: data,
  }).then((result) => {
    return result;
  }).catch((error) => {
    if (error) {
      throw new Error(error)
    }
  })
}

export default {
  authReq: {
    login: data => sendRequest('users/login', data),
    register: data => sendRequest('users', data),
  },
  article: {
    getAll: (query) => sendRequest(`articles?${query}`, '', 'get'),
    get: slug => sendRequest(`articles/${slug}`, '', 'get'),
    getTags: () => sendRequest(`tags`, '', 'get'),
  },
  comments: {
    get: slug => sendRequest(`articles/${slug}/comments`, '', 'get'),
    add: (slug, data) => sendRequest(`articles/${slug}/comments`, {
      comment: { body: data }
    }, 'post'),
  },
}
