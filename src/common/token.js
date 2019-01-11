export const getToken = () => window.localStorage.getItem('token_key')

export const saveToken = token => window.localStorage.setItem('token_key', token)

export const clearToken = () => window.localStorage.removeItem('token_key')
