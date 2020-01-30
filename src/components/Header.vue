<template>
    <header class="header">
        <div :class="menuActive ? 'menu menu_active' : 'menu'">
            <div class="container">
                <nav class="menu__nav">
                    <a v-for="item in menuBar" v-bind:href="item.link" class="menu__link">{{ item.name }}</a>
                </nav>
            </div>
        </div>
        <div class="navbar">
            <div class="navbar-wrap">
                <button v-on:click="menuActive = !menuActive" class="menu-btn">
                    <span class="menu-btn__line"></span>
                    <span class="menu-btn__line"></span>
                    <span class="menu-btn__line"></span>
                </button>
                <div class="navbar_logo">
                    <strong class="logo__text">{{ projectName }}</strong>
                    <span class="logo__description">First project on VueJS</span>
                </div>

                <div class="navbar_profile">
                    <img src="../assets/profileImage.png" alt="ProfileImage" class="profile_image">
                    <div class="profile_data">
                        <span class="profile_fio">Салушкин Дмитрий</span>
                        <span class="profile_status">Online</span>
                    </div>
                    <div v-on:click="menuActive = !menuActive" class="showMenu">
                        <span class="menu__line"></span>
                        <span class="menu__line"></span>
                    </div>
                </div>
                <div class="navbar__register-panel">
                    <span v-on:click="openLogin" class="navbar__login">
                        <a href="#">Sign In</a>
                    </span>
                    <span v-on:click="openRegistration" class="navbar__register">
                        <a href="#">Sign Up</a>
                    </span>
                </div>
            </div>
        </div>
        <!-- /.navbar -->
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            projectName: String
        },
        data() {
            return {
                menuActive: false,
                menuBar: [
                    {name: "Main", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"},
                    {name: "smth", link: "#"}
                ],
            }
        },
        methods: {
            openLogin() {
                this.$emit('loginActive', {
                    loginActive: this.loginActive
                })
            },
            openRegistration() {
                this.$emit('registrationActive', {
                    registrActive: this.registrActive
                })
            }
        }
    }
</script>

<style scoped>
    .navbar__register-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 10%;
    }
    .navbar__register-panel span {
        border-radius: 5px;
        height: 25px;
        width: 50%;
        background-color: #e69a00;
        border: none;
        line-height: 25px;
        margin: 5px auto;
        text-align: center;
    }
    .navbar__register-panel span:hover {
        cursor: pointer;
        background-color: #ff411a;
    }
    .navbar__register-panel a {
        text-decoration: none;
        color: #fafafa;
        font-size: 17px;
        text-shadow: 1px 0 0 #fafafa;
    }
    .navbar_logo:hover {
        cursor: pointer;
    }
    .container {
        max-width: 1170px;
        margin: auto;
    }
    .menu {
        width: 100%;
        position: fixed;
        left: 0;
        top: 100px;
        padding: 16px 0;
        background: linear-gradient(to right, #ffaa00, #b74dff);
        opacity: 0;
        -webkit-transform: translateY(-100%);
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
        -webkit-transition: 1.3s;
        -moz-transition: 1.3s;
        -o-transition: 1.3s;
        transition: 1.3s;
    }
    .menu_active {
        -webkit-transition: 1.3s;
        -moz-transition: 1.3s;
        -o-transition: 1.3s;
        transition: 1.3s;
        opacity: 0.8;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .menu__nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .menu__link {
        text-decoration: none;
        font-size: 17px;
        text-transform: uppercase;
        color: #fafafa;
        text-shadow: 2px 2px 1px black;
    }
    .menu__link:hover {
        border-bottom: 1px solid #fafafa;
    }
    .menu-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        border-right: 1px solid rgba(81,11,186, 0.1);
        border-left: 1px solid rgba(81,11,186, 0.1);
        height: 80px;
        width: 70px;
    }
    .menu-btn:hover {
        cursor: pointer;
    }
    .menu-btn:focus {
        outline: none;
    }
    .menu-btn__line {
        display: block;
        width: 20px;
        height: 3px;
        background-color: #ff7b00;
        margin: 2px auto;
    }
    .navbar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        background-color: #ffaa00;
    }
    .navbar-wrap {
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo__text {
        display: block;
        margin-bottom: 5px;
        font-size: 25px;
        text-transform: uppercase;
        text-shadow: 3px 1px 1px black;
    }
    .logo__description {
        display: block;
        font-size: 14px;
        font-weight: 600;
        font-style: italic;
        text-shadow: 0 1px 1px black;
    }
    .navbar_profile {
        display: flex;
        width: 40%;
        align-items: center;
        justify-content: flex-end;
    }
    .profile_data {
        display: flex;
        flex-direction: column;
        padding-left: 25px;
    }
    .profile_data > span {
        font-size: 16px;
        text-transform: uppercase;
        padding: 5px;
        font-weight: 600;
        font-style: italic;
    }
    .profile_image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .profile_status {
        color: #4caf50;
    }
    .profile_fio:hover {
        cursor: pointer;
    }
    .showMenu {
        width: 30px;
        height: 30px;
        margin-left: 25px;
    }
    .showMenu:hover {
        cursor: pointer;
    }
    .menu__line {
        display: block;
        width: 50%;
        height: 2px;
        background-color: rgba(	255, 42, 0, 0.6);
        -webkit-transform: translateY(13px) translateX(8px) rotateZ(60deg);
        -moz-transform: translateY(13px) translateX(8px) rotateZ(60deg);
        -ms-transform: translateY(13px) translateX(8px) rotateZ(60deg);
        -o-transform: translateY(13px) translateX(8px) rotateZ(60deg);
        transform: translateY(13px) translateX(8px) rotateZ(60deg);
    }
    .menu__line:nth-child(2) {
        -webkit-transform: translateY(11px) translateX(15px) rotateZ(-60deg);
        -moz-transform: translateY(11px) translateX(15px) rotateZ(-60deg);
        -ms-transform: translateY(11px) translateX(15px) rotateZ(-60deg);
        -o-transform: translateY(11px) translateX(15px) rotateZ(-60deg);
        transform: translateY(11px) translateX(15px) rotateZ(-60deg);
    }

</style>