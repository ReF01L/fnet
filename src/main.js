import Vue from 'vue'
import axios from "axios";
import VueCookie from 'vue-cookie'
import store from './store'
import router from './router'

import App from "./App"

window.axios = axios;

Vue.use(VueCookie);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount('#app');