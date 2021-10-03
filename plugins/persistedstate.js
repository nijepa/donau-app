import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'yourkey',
    paths: ['data']
  })(store)
}