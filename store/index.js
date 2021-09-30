const state = () => ({
  user: null
})

const getters = {
  getUser(state) {
    return state.user
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // claims = null
      // Perform logout operations
      state.commit('SET_USER', null)
      this.$router.push({
        path: 'auth/login'
      })
    } else {
      const { uid, email} = authUser
      state.commit('SET_USER', {
        uid,
        email
      })
      // Do something with the authUser and the claims object...
    }
  }
}

export default {
  state,
  getters, 
  mutations, 
  actions
}