import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name:'wangjingwei'
    },

  getters: {
    getAllCount(state) {
        var c = 0;

        return c
      }
  }
  })