<template>
    <div class="friends">
        <div class="friends__search">
            <input v-model="search" type="search" class="search" placeholder="<Find/>">
        </div>
        <div class="friends__place">
            <div class="friends__request">
                <div class="friends__request__title">
                    <span class="friends__request__title-title">&lt;friend_requests/&gt;</span>
                </div>
                <div class="friends__request__body">
                    <div class="friends__request__body__card" v-for="(f, index) in getRequest" :key="f.id">
                        <div class="friends__request__body__card-img">
                            <img class="circle-img" src="../../assets/profileImage.png" alt="">
                        </div>
                        <span @click="accept(index)" class="friends__request__body__card-add">+</span>
                    </div>
                </div>
            </div>
            <div class="friends__current">
                <BaseCard class="friends__current-card" v-for="friend in cardByTitle" :key="friend.id"
                    :name="`${friend.first_name} ${friend.last_name}`"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BaseCard from "@/components/Components/BaseCard";

    export default {
        name: "Friends",
        components: {BaseCard},
        data() {
            return {
                search: '',
                friends: [],
                request: []
            }
        },
        methods: {
            accept(id) {
                window.axios
                    .put(`http://20.188.3.202:5000/api/friends/${this.request[id].sender_id}`, {token: localStorage.getItem('token')})
                    .then( () => {
                        this.friends.push(this.request[id]);
                        this.request.splice(id, 1);
                    })
                    .catch(error => {
                        alert("Отсутствует соединение с сервером: \n" + error);
                    });
            },
        },
        mounted() {
            window.axios
                .get(`http://20.188.3.202:5000/api/friends/${localStorage.getItem('user_id')}`)
                .then(response => {
                    this.friends = response.data.friends;
                    window.axios
                        .get(`http://20.188.3.202:5000/api/friends/requests?token=${localStorage.getItem('token')}`)
                        .then(response => {
                            this.request = response.data.followers;
                            // eslint-disable-next-line no-console
                            console.log(response);
                            if (this.request.length === 0) {
                                document.querySelectorAll('.friends__request').forEach(elem => {
                                    elem.style.opacity = 0;
                                })
                            }
                        })
                        .catch(error => {
                            alert("Отсутствует соединение с сервером: \n" + error);
                        });
                })
                .catch(error => {
                    alert("Отсутствует соединение с сервером: \n" + error);
                });
        },
        computed: {
            getRequest() {
                if (this.request.length === 0) {
                    document.querySelectorAll('.friends__request').forEach(elem => {
                        elem.style.display = 'none';
                    })
                }
                return this.request;
            },
            cardByTitle() {
                return this.friends.filter(friend => friend.first_name.indexOf(this.search) !== -1 || friend.last_name.indexOf(this.search) !== -1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .friends {
        padding-top: 40px;
        width: 100vw;
        min-height: 100vh;
        background-color: var(--main-bg-color);
        &__search {
            margin-bottom: 20px;
            background: #CED2CC;
            border-radius: 20px;
            padding: 10px;
            & input {
                outline: none;
                border: none;
                border-radius: 10px;
                width: 100%;
                padding: 10px;
            }
        }
        &__place {
            display: flex;
            justify-content: space-around;
            & .friends__request {
                width: 25%;
                &__title {
                    text-transform: capitalize;
                    font-size: 20px;
                    text-align: center;
                    height: 40px;
                    background: #484848;
                    border-radius: 30px 30px 0 0;
                    color: #f1f1f1;
                    padding: 10px;
                }
                &__body {
                    background: #202020;
                    border-radius: 0 0 30px 30px;
                    &__card {
                        position: relative;
                        padding: 10px;
                        &-img {
                            & img {
                                width: 200px;
                                height: 200px;
                            }
                        }
                        &-add {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: absolute;
                            color: #f1f1f1;
                            font-weight: 900;
                            font-size: 46px;
                            border-radius: 30px;
                            background: #6AB187;
                            padding: 5px 15px 0;
                            bottom: 5%;
                            right: 25%;
                            transition: 0.1s;
                            &:hover {
                                cursor: pointer;
                                font-size: 50px;
                            }
                        }
                    }
                }
            }
            & .friends__current {
                margin-left: 10%;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                &-card {
                    margin: 15px;
                }
            }
        }
    }
    @media (max-width: 1645px) {
        .friends {
            &__place {
                & .friends__current {
                    &-card {
                        width: 100%;
                    }
                }
            }
        }
    }
    @media (max-width: 1275px) {
        .friends {
            &__place {
                & .friends__request {
                    display: none;
                }
                & .friends__current {
                    width: 100%;
                    margin: auto;
                }
            }
        }
    }
</style>