<template>
    <div class="friends">
        <div class="friends__left">
            <button class="btn left_btn friends__left__btn-add left_active">Add as friend</button>
            <button class="btn left_btn friends__left__btn-request">Outgoing request</button>
            <div v-if="left_add" class="friends__left__friends">
                <BaseCard v-for="friend in add" :key="friend.id" :name="friend.name" :status="friend.status"
                          :btn="'Add as friend'"/>
            </div>
            <div v-else class="friends__left__friends">
                <BaseCard v-for="friend in request" :key="friend.id" :name="friend.name" :status="friend.status"
                          :btn="'Cancel'"/>
            </div>
        </div>
        <div class="friends__right">
            <form class="search-form">
                <input v-model="search" class="search-form__input" type="text" placeholder="friends">
                <input class="search-form__submit" type="submit" value="Search">
            </form>
            <button class="btn right_btn friends__right__btn-all right_active">All friends</button>
            <button class="btn right_btn friends__right__btn-online">Friends online</button>
            <div class="friends__right__friends">
                <BaseCard v-for="friend in cardByTitle" :key="friend.id" :info="friend.info" :name="friend.name"
                          :status="friend.status" :btn="''"/>
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
                left_add: true,
                search: '',
                friends: [
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                    {name: 'Дмитрий Салушкин', info: '', status: ''},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: ''},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                ],
                add: [
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''}
                ],
                request: [
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''}
                ]
            }
        },
        mounted() {
            document.querySelectorAll('.right_btn').forEach(elem => {
                elem.addEventListener('click', () => {
                    document.querySelector('.right_active').classList.remove('right_active');
                    elem.classList.add('right_active');
                })
            })
            document.querySelectorAll('.left_btn').forEach(elem => {
                elem.addEventListener('click', () => {
                    if (!elem.classList.contains('left_active'))
                        this.left_add = !this.left_add;
                    document.querySelector('.left_active').classList.remove('left_active');
                    elem.classList.add('left_active');
                })
            })
        },
        computed: {
            cardByTitle() {
                return this.friends.filter(friend => friend.name.indexOf(this.search) !== -1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-form {
        width: 100%;
    }

    .btn {
        width: 120px;
        height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    .left_active {
        background: red;
        color: #f1f1f1;
    }

    .right_active {
        background: red;
        color: #f1f1f1;
    }

    .friends {
        width: 100%;
        height: 100vh;
        background: var(--main-bg-color);
        display: flex;
        justify-content: space-around;

        &__left {
            width: 30%;
            display: flex;
            flex-direction: column;

            &__btn-add {
                width: 100%;
                border: 1px solid red;

                &:hover {
                    cursor: pointer;
                }
            }

            &__btn-request {
                width: 100%;
                border: 1px solid red;

                &:hover {
                    cursor: pointer;
                }
            }

            &__friends {

            }
        }

        &__right {
            width: 50%;

            &__btn-all {
                width: 45%;
                border: 1px solid red;

                &:hover {
                    cursor: pointer;
                }
            }

            &__btn-online {
                width: 45%;
                border: 1px solid red;

                &:hover {
                    cursor: pointer;
                }
            }

            &__friends {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .search-form {
        & input {
            position: relative;
            display: inline-block;
            font-size: 20px;
            box-sizing: border-box;
            -webkit-transition: .5s;
            -moz-transition: .5s;
            -ms-transition: .5s;
            -o-transition: .5s;
            transition: .5s;
        }

        &__input {
            background-color: lightsalmon;
            width: 70%;
            height: 50px;
            border: none;
            outline: none;
            padding: 0 25px;
            border-radius: 25px 0 0 25px;
        }

        &__submit {
            position: relative;
            border-radius: 0 25px 25px 0;
            height: 50px;
            width: 30%;
            max-width: 150px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #ff9800;
            color: #fff;

            &:hover {
                background-color: #ff5722;
            }
        }
    }
</style>