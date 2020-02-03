import VueRouter from "vue-router"
import Vue from 'vue'

import Feed from "@/components/Pages/Feed";
import Login from "@/components/Pages/Login";
import Registration from "@/components/Pages/Registration";
import Profile from "@/components/Pages/Profile";
import Messages from "@/components/Pages/Messages";
import Friends from "@/components/Pages/Friends";
import Groups from "@/components/Pages/Groups";
import Photo from "@/components/Pages/Photo";
import RememberPassword from "@/components/Pages/RememberPassword";
import NewPassword from "@/components/Pages/NewPassword";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/profile',
            name: Profile.name,
            component: Profile
        },
        {
            path: '/photo',
            name: Photo.name,
            component: Photo
        },
        {
            path: '/groups',
            name: Groups.name,
            component: Groups
        },
        {
            path: '/messages',
            name: Messages.name,
            component: Messages
        },
        {
            path: '/friends',
            name: Friends.name,
            component: Friends
        },
        {
            path: '/feed',
            name: Feed.name,
            component: Feed
        },
        {
            path: '/login',
            name: Login.name,
            component: Login
        },
        {
            path: '/login/remember',
            name: RememberPassword.name,
            component: RememberPassword
        },
        {
            path: '/login/remember/settings',
            name: NewPassword.name,
            component: NewPassword,
            props: true
        },
        {
            path: '/register',
            name: Registration.name,
            component: Registration
        },
        {
            path: '/',
            name: Login.name,
            component: Login
        }
    ], mode: "history"
});