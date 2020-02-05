import Vue from 'vue'
import axios from "axios";
import VueScrollTo from 'vue-scrollto'
import store from './store'
import router from './router'

import App from "./App"

window.axios = axios;
Vue.use(VueScrollTo);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');