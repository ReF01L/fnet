import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import token from './modules/token'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        post,
        token
    }
})