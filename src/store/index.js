import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    modules: {
        test
    }
})