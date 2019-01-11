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
      console.warn(url, error.message)
    }
  })
}

export default {
  authReq: {
    login: data => sendRequest('users/login', data),
    register: data => sendRequest('users', data),
  },
  article: {
    get: slug => sendRequest(`articles/${slug}`, '', 'get'),
  },
  comments: {
    get: slug => sendRequest(`articles/${slug}/comments`, '', 'get'),
    add: (slug, data) => sendRequest(`articles/${slug}/comments`, {
      comment: { body: data }
    }, 'post'),
  },
}
