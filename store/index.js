export const actions = {
  login({commit}) {
    commit('setToken', 'true')
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  // logaut
  clearToken(state, token) {
    state.token = null
  }
}

export const getters = {
  // !!state.token - приведем к булеву значению
  isAuth: state => !!state.token
}