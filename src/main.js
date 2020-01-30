import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from "vuex"
import axios from "axios";

import App from "./App"
import Feed from "@/components/Pages/Feed";
import Login from "@/components/Pages/Login";
import Registration from "@/components/Pages/Registration";
import Profile from "@/components/Pages/Profile";
import Messages from "@/components/Pages/Messages";
import Friends from "@/components/Pages/Friends";
import Groups from "@/components/Pages/Groups";
import Photo from "@/components/Pages/Photo";
import Music from "@/components/Pages/Music";


window.axios = axios;
Vue.use(VueRouter);

const store = () => new Vuex.Store({
    state: {
        prName: 'coronanet',
        menuState: false
    },
    getters: {
        getProjectName: state => {
            return state.prName;
        },
        getCurrentState: state => {
            return state.menuState;
        }
    },
    mutations: {

    }
});

const router = new VueRouter({
    routes: [
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/photo',
            name: 'Photo',
            component: Photo
        },
        {
            path: '/music',
            name: 'Music',
            component: Music
        },
        {
            path: '/groups',
            name: 'Groups',
            component: Groups
        },
        {
            path: '/messages',
            name: 'Messages',
            component: Messages
        },
        {
            path: '/friends',
            name: 'Friends',
            component: Friends
        },
        {
            path: '/feed',
            name: 'Feed',
            component: Feed
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Auth',
            component: Registration
        },
        {
            path: '/',
            name: 'Login',
            component: Login
        }
    ], mode: "history"
});

new Vue({
    el: '#app',
    router,
    store,
    data() {
        return {
            info: null
        }
    },
    render: h => h(App)
}).$mount('#app');