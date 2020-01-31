<template>
    <div class="friends">
        <div class="friends__left">
            <button class="btn left_btn friends__left__btn-add left_active">Add as friend</button>
            <button class="btn left_btn friends__left__btn-request">Outgoing request</button>
            <div v-if="left_add" class="friends__left__friends">
                <BaseCard v-for="friend in add" :key="friend.id" :name="friend.name" :status="friend.status" :btn="'Add as friend'"/>
            </div>
            <div v-else class="friends__left__friends">
                <BaseCard v-for="friend in request" :key="friend.id" :name="friend.name" :status="friend.status" :btn="'Cancel'"/>
            </div>
        </div>
        <div class="friends__right">
            <SearchForm :place="'Friend'"/>
            <button class="btn right_btn friends__right__btn-all right_active">All friends</button>
            <button class="btn right_btn friends__right__btn-online">Friends online</button>
            <div class="friends__right__friends">
                <BaseCard v-for="friend in friends" :key="friend.id" :info="friend.info" :name="friend.name" :status="friend.status" :btn="''"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchForm from "@/components/Components/SearchForm";
    import BaseCard from "@/components/Components/BaseCard";

    export default {
        name: "Friends",
        components: {BaseCard, SearchForm},
        data() {
            return {
                left_add: true,
                friends : [
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                    {name: 'Дмитрий Салушкин', info: '', status: ''},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: ''},
                    {name: 'Дмитрий Салушкин', info: 'ДВФУ', status: 'online'},
                ],
                add : [
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''},
                    {name: 'Дмитрий Салушкин', status: 'online'},
                    {name: 'Дмитрий Салушкин', status: ''}
                ],
                request : [
                    {name: 'Дмитрий Салушкин', }
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
                    document.querySelector('.left_active').classList.remove('left_active');
                    elem.classList.add('left_active');
                    this.left = !this.left;
                })
            })
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
</style>