<template>
    <div class="friends">
        <div class="friends__search">
            <input type="search" class="search" placeholder="<Find/>">
        </div>
        <div class="friends__place">
            <div class="friends__request">
                <div class="friends__request__title">
                    <span class="friends__request__title-title">&lt;friend_requests/&gt;</span>
                </div>
                <div class="friends__request__body">
                    <div class="friends__request__body__card" v-for="f in request" :key="f.id">
                        <div class="friends__request__body__card-img">
                            <img class="circle-img" src="../../assets/profileImage.png" alt="">
                        </div>
                        <span class="friends__request__body__card-add">+</span>
                    </div>
                </div>
            </div>
            <div class="friends__current">
                <BaseCard class="friends__current-card" v-for="friend in friends" :key="friend.id"
                    :name="friend.name" :status="friend.status"/>
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
                friends: [
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''},
                    {name: 'Дмитрий Салушкин', status: ''},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                ],
                request: [
                    {name: 'Дмитрий Салушкин'},
                    {name: 'Дмитрий Салушкин'},
                    {name: 'Дмитрий Салушкин'}
                ]
            }
        },
        computed: {
            cardByTitle() {
                return this.friends.filter(friend => friend.name.indexOf(this.search) !== -1);
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