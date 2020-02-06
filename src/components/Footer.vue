<template>
    <footer class="footer">
        <ul class="list">
            <li class="list-item" @click="goToFeed">
                <span class="content">Feeds</span>
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            </li>
            <li class="list-item" @click="goToMessages">
                <span class="content">Messages</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
            </li>
            <li class="list-item" @click="goToProfile">
                <img src="../assets/logo.png" alt="">
            </li>
            <li class="list-item" @click="goToFriends">
                <span class="content">Friends</span>
                <i class="fa fa-user" aria-hidden="true"></i>
            </li>
            <li class="list-item" @click="exit">
                <span class="content">Sign out</span>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </li>
        </ul>
    </footer>
</template>

<script>
    import Profile from "@/components/Pages/Profile";
    import Feed from "@/components/Pages/Feed";
    import Messages from "@/components/Pages/Messages";
    import Friends from "@/components/Pages/Friends";
    import Login from "@/components/Pages/Login";
    import ProfileEdit from "@/components/Pages/ProfileEdit";

    export default {
        name: 'Footer',
        methods: {
            goToProfile() {
                if (this.$router.currentRoute.name === Profile.name)
                    this.$router.replace({name: ProfileEdit.name});
                else if (this.$router.currentRoute.name === ProfileEdit.name)
                    this.$router.replace({name: Profile.name, params: {id: localStorage.getItem('user_id')}});
                else
                    this.$router.push({name: Profile.name, params: {id: localStorage.getItem('user_id')}});
            },
            goToFeed() {
                if (this.$router.currentRoute.name !== Feed.name)
                    this.$router.push({name: Feed.name})
            },
            goToMessages() {
                if (this.$router.currentRoute.name !== Messages.name)
                    this.$router.push({name: Messages.name})
            },
            goToFriends() {
                if (this.$router.currentRoute.name !== Friends.name)
                    this.$router.push({name: Friends.name})
            },
            exit() {
                if (!confirm('Are you sure you want to sign out?'))
                    return;
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                this.$router.replace({name: Login.name})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        border-top: 1px solid #4CB5F5;
        width: 60%;
        position: fixed;
        bottom: 0;
        left: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        & .content {
            opacity: 0;
            font-size: 15px;
            margin-bottom: 5px;
        }
        & ul {
            display: flex;
            & li {
                font-size: 25px;
                justify-content: flex-end;
                list-style: none;
                padding: 15px;
                display: flex;
                flex-direction: column;
                &:hover {
                    cursor: pointer;
                }
                & img {
                    width: 50px;
                }
                &:hover .content, li {
                    opacity: 1;
                }
            }
        }
    }
    @media (max-width: 981px) {
        .footer {
            width: 100%;
            left: 0;
        }
    }
    @media (max-width: 450px) {
        .footer {
            & .content {
                font-size: 10px;
                margin-bottom: auto;
            }
            & ul {
                & li {
                    font-size: 15px;
                    padding: 10px;
                    & img {
                        width: 25px;
                    }
                }
            }
        }
    }
</style>
