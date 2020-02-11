import VueRouter from "vue-router"
import Vue from 'vue'

import Feed from                "@/components/Pages/Feed";
import Login from               "@/components/Pages/Login";
import Registration from        "@/components/Pages/Registration";
import Profile from             "@/components/Pages/Profile";
import Messages from            "@/components/Pages/Messages";
import Friends from             "@/components/Pages/Friends";
import RememberPassword from    "@/components/Pages/RememberPassword";
import NewPassword from         "@/components/Pages/NewPassword";
import ProfileEdit from         "@/components/Pages/ProfileEdit";
import Dialog from              "@/components/Pages/Dialog";
import Error from              "@/components/Pages/404";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/profile/:id',
            name: Profile.name,
            component: Profile,
        },
        {
            path: '*',
            name: Error.name,
            component: Error
        },
        {
            path:'/profile/edit',
            name: ProfileEdit.name,
            component: ProfileEdit
        },
        {
            path: '/messages',
            name: Messages.name,
            component: Messages
        },
        {
            path: '/messages/dialog/:companion_id',
            name: Dialog.name,
            component: Dialog
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