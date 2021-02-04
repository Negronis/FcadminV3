import { createStore } from 'vuex'
import accessModule from './access/index';
export default createStore({
  state() {
    return {
      height: window.innerHeight,
      isPc: true
    }
  },
  mutations: {
    setHeight(state) {
      state.height = window.innerHeight;
    },
    setIsPc(state, n) {
      state.isPc = n;
    }
  },
  getters: {
    getHeight(state) {
      return state.height;
    },
    getIsPc(state){
      return state.isPc;
    }
  },
  actions: {

  },
  modules: {
    accessModule
  }
})
