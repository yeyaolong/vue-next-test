import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    test: {
      a: 1
    }
  },
  mutations: {
    setTestA(state, value) {
      console.log('mutations setTestA is called')
      state.test.a = value;
    }
  },
  actions: {
  },
  modules: {
  }
});
