<template>
    <div class="profile">
        <div class="profile__hero">
            <div class="profile__hero-img">
                <div class="profile__hero-img-crutch"></div>
                <img src="../../assets/profileImage.png" alt="" class="circle-img">
                <div class="profile__hero-img-crutch"></div>
            </div>
            <div class="info">
                <div class="info-status">
                    <span>Profile</span>
                    <i @keypress.enter="changeStatus" @click="changeStatus" class="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div class="info-body">
                    <div class="info-body__name">
                        <span class="info-body__name-tag">&lt;Name&gt;</span>
                        <span class="info-body__name-name">{{user.name}}</span>
                        <span class="info-body__name-tag">&lt;/Name&gt;</span>
                    </div>
                    <div class="info-body__status">
                        <span class="info-body__status-tag">&lt;Status&gt;</span>
                        <textarea disabled="disabled" class="info-body__status-status" v-model="user.status" ></textarea>
                        <span class="info-body__status-tag">&lt;/Status&gt;</span>
                    </div>
                </div>
                <div v-if="!isMe" class="info-btns">
                    <button class="btn info-btns-btn">&lt;Get_Chat/&gt;</button>
                    <button v-show="!isFriend" @click="add_friend" class="btn info-btns-btn">&lt;Add_Friend/&gt;
                    </button>
                </div>
            </div>
        </div>
        <ProfileFriends :slider-items="friends" class="profile__friends"/>
        <Notation class="notation" v-for="post in getPosts" :key="post.id" :sender="user.name"
                  :text="post.text" :views="post.views_count"
                  :likes="post.likes_count" :date="post.time" :id="post.id"/>
    </div>
</template>

<script>
    // TODO: адаптивный дизайн V, почта X , редактирование профиля V, сообщения + доработать лайки, динамические страницы
    import ProfileFriends from "@/components/Components/ProfileFriends";
    import Notation from "@/components/Components/Notation";

    export default {
        name: 'Profile',
        components: {Notation, ProfileFriends},
        data() {
            return {
                posts: [],
                friends: [
                    {friend_id: 0, first_name: '', last_name: ''},
                ],
                user: {
                    name: '',
                    status: '',
                    id: ''
                },
                main_friends: []
            }
        },
        computed: {
            isFriend() {
                let t = false;
                this.main_friends.forEach((friend) => {
                    if (this.$route.params.id == friend.friend_id)
                        t = true;
                });
                if (!this.isMe) {
                    document.querySelectorAll('.info-btns-btn').forEach(elem => {
                        elem.style.borderRadius = '25px';
                        elem.style.width = '100%';
                    });
                }
                return t;
            },
            isMe() {
                return this.user.id === this.$route.params.id;
            },
            getPosts() {
                return this.posts;
            }
        },
        methods: {
            changeStatus() {
                event.target.preventDefault;
                document.querySelectorAll('.info-body__status-status').forEach(elem => {
                    elem.disabled = !elem.disabled;
                    elem.addEventListener('keydown', (e) => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            e.preventDefault();
                            elem.disabled = !elem.disabled;
                            window.axios
                                .post(`http://20.188.3.202:5000/api/users/status`, {token: localStorage.getItem('token'), status: this.user.status})
                                .then(response => {
                                    // eslint-disable-next-line no-console
                                    console.log(response);
                                });
                        }
                    });
                });
            },
            add_friend() {
                window.axios
                    .post(`http://20.188.3.202:5000/api/friends/${this.$route.params.id}`, {token: localStorage.getItem('token')})
                    .catch(error => {
                        alert("Отсутствует соединение с сервером: \n" + error);
                    });
            },
            fetch() {
                window.axios
                    .get('http://20.188.3.202:5000/api/users/' + this.$route.params.id)
                    .then(response => {
                        this.user.name = `${response.data.last_name} ${response.data.first_name}`;
                        this.user.status = `${response.data.status}` === 'null' ? ' ' : response.data.status;
                        window.axios
                            .get('http://20.188.3.202:5000/api/friends/' + this.$route.params.id)
                            .then(response => {
                                this.friends = response.data.friends;
                            });
                        window.axios
                            .get('http://20.188.3.202:5000/api/posts/' + this.$route.params.id)
                            .then(response => {
                                this.posts = response.data.posts;
                                // eslint-disable-next-line no-console
                                console.log(this.posts);
                            });
                    })
                    .catch(error => {
                        alert("Отсутствует соединение с сервером: \n" + error);
                    });
            }
        },
        mounted() {
            window.axios
                .get(`http://20.188.3.202:5000/api/friends/${localStorage.getItem('user_id')}`)
                .then(response => {
                    this.main_friends = response.data.friends;
                    this.fetch();
                })
                .catch(error => {
                    alert("Отсутствует соединение с сервером: \n" + error);
                });
            this.user.id = localStorage.getItem('user_id');
        },
        watch: {
            '$route': 'fetch'
        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        min-height: calc(100vh + 60px);
        width: 100vw;
        background-color: var(--main-bg-color);

        &__hero {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding-top: 40px;
            margin-left: 10%;

            &-img {
                position: relative;

                & img {
                    position: absolute;
                    z-index: 3;
                    transform: translate(-50%);
                }

                &-crutch {
                    z-index: 2;
                    position: absolute;
                    width: 750px;
                    height: 150px;
                    transform: translate(-50%, 100%) rotate(133.79deg);
                    background: #4CB5F5;

                    &:last-child {
                        transform: translate(-50%, 100%) rotate(31.74deg);
                    }
                }
            }
        }

        & .info {
            width: 30%;
            min-width: 340px;
            margin-left: 10%;

            &-status {
                min-height: 40px;
                background: #484848;
                width: 100%;
                border-radius: 32px 32px 0 0;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                & span {
                    font-size: 24px;
                    text-align: center;
                    color: #dadada;
                    margin-left: 25px;
                }

                & i {
                    margin-right: 25px;
                    font-size: 25px;
                    color: #f1f1f1;
                    transition: 2s ease-in-out;

                    &:hover {
                        cursor: pointer;
                        transform: rotate(720deg);
                    }
                }
            }

            &-body {
                background: #202020;
                border-radius: 0 0 32px 32px;

                &__name {
                    display: flex;
                    flex-direction: column;

                    &-tag {
                        color: #ea6a47;
                        align-self: flex-start;
                        font-size: 24px;
                        padding: 15px;

                        &:last-child {
                            align-self: flex-end;
                        }
                    }

                    &-name {
                        color: #dadada;
                        font-size: 36px;
                        padding: 15px;
                    }
                }

                &__status {
                    display: flex;
                    flex-direction: column;

                    &-tag {
                        color: #4cb5f5;
                        align-self: flex-start;
                        font-size: 24px;
                        padding: 15px;

                        &:last-child {
                            align-self: flex-end;
                        }
                    }

                    &-status {
                        background: transparent;
                        bottom: 0;
                        outline: none;
                        font-size: 24px;
                        color: #dadada;
                        padding: 15px;
                        margin: 0 auto;
                        border: none;
                        -ms-overflow-style: none; /* IE 10+ */
                        scrollbar-width: none; /* Firefox */
                        resize: none;

                        &::-webkit-scrollbar {
                            width: 0;
                            background: transparent;
                        }
                    }
                }
            }

            &-btns {
                margin-top: 15px;

                &-btn {
                    background: #202020;
                    width: 48%;
                    height: 64px;
                    font-size: 24px;
                    transition: 0.5s;

                    &:hover {
                        cursor: pointer;
                        transform: scale(1.03);
                    }

                    &:first-child {
                        color: #b3c100;
                        border-radius: 25px 0 0 25px;
                        margin-right: 10px;
                    }

                    &:last-child {
                        color: #dbae58;
                        border-radius: 0 25px 25px 0;
                    }
                }
            }
        }

        &__friends {
            padding-top: 35px;
            margin: 10% auto;
        }

        & .notation {
            margin-left: 45px;
            padding-bottom: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 90%;
        }
    }

    @media (max-width: 1375px) {
        .profile {
            &__hero {
                margin: auto;
            }

            & .info {
                margin-left: 30%;
            }

            & .notation {
                margin: auto;
                width: 100%;
            }
        }
    }

    @media (max-width: 1225px) {
        .profile {
            &__hero {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 35px;

                &-img {
                    & img {
                        transform: translate(0);
                        position: relative;
                    }

                    &-crutch {
                        display: none;
                    }
                }

                & .info {
                    width: 100%;
                    margin: 25px auto auto;
                }
            }
        }
        .profile__friends {
            display: none;
        }
    }

    @media (max-width: 760px) {
        .profile {
            &__hero {
                &-img {
                    & img {
                        width: 300px;
                        height: 300px;
                    }
                }

                & .info {
                    width: 90%;
                }
            }
        }
    }
</style>
