<template>
    <div class="feed">
        <div class="header">
            <div class="header__search">
                <label>
                    <input type="text" placeholder="<find/>">
                    <span>&lt;try/&gt;</span>
                </label>
            </div>
            <div class="header__mode">
                <span>&lt;properties/&gt;</span>
                <span>&lt;properties/&gt;</span>
            </div>
        </div>
        <div class="create">
            <div class="create__title">
                <div class="create__title-tag">Base()</div>
                <div class="create__title-date">&lt;16:40 { 1 feb 2020 }/&gt;</div>
            </div>
            <div class="create__body">
                <textarea v-model="new_post.text" placeholder="<text/>" class="create__body-input"></textarea>
                <div class="create__body__btns">
                    <span @click="add_photo">&lt;add_photo/&gt;</span>
                    <span @click="push_post">&lt;push_it/&gt;</span>
                </div>
            </div>
        </div>
        <Notation class="notation" v-for="notation in posts" :key="notation.id" :sender="notation.sender"
                  :text="notation.text" :image="notation.image"
                  :likes="notation.likes" :date="notation.date"/>
    </div>
</template>

<script>
    import Notation from "@/components/Components/Notation";

    export default {
        name: "Feed",
        components: {Notation},
        data() {
            return {
                posts: [
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        image: 'profileImage.png',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: '',
                        image: 'profileImage.png',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Hello World!',
                        image: '',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        image: '',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        image: '',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        image: '',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {
                        sender: 'Салушкин Дмитрий',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        image: '',
                        likes: 0,
                        views: 1,
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                ],
                new_post: {
                    image: false,
                    text: ''
                }
            }
        },
        methods: {
            add_photo() {
                this.new_post.image = !this.new_post.image;
                if (event.target.style.color.toString() === 'rgb(179, 193, 0)') {
                    event.target.style.color = '#DBAE58';
                }
                else {
                    event.target.style.color = '#B3C100';
                }
            },
            push_post() {
                window.axios
                    .post(`http://20.188.3.202:5000/api/posts/`, {token: localStorage.getItem('token'), text: this.new_post.text})
                    .catch(error => {
                        alert("Отсутствует соединение с сервером: \n" + error);
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .create {
        margin: 25px auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__title {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            color: #f1f1f1;
            background: #484848;
            border-radius: 20px 20px 0 0;
            padding: 10px;
        }
        &__body {
            display: flex;
            flex-direction: column;
            background: #202020;
            border-radius: 0 0 20px 20px;
            &-input {
                font-size: 20px;
                padding: 20px;
                background: transparent;
                color: #f1f1f1;
                border: none;
                outline: none;
                -ms-overflow-style: none; /* IE 10+ */
                scrollbar-width: none; /* Firefox */
                resize: none;
                height: 200px;

                &::-webkit-scrollbar {
                    width: 0;
                    background: transparent;
                }

                &::placeholder {
                    opacity: 1;
                }
            }
            &__btns {
                display: flex;
                justify-content: flex-end;
                margin: 10px;
                & span {
                    padding: 10px;
                    margin: 5px;
                    font-size: 16px;
                    color: #DBAE58;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .feed {
        width: 100%;
        height: 100%;
        background: var(--main-bg-color);
        padding-top: 25px;

        .header {
            width: 54%;
            margin: auto;

            &__search {
                background: #484848;
                border-radius: 20px;

                & label {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    padding: 5px;

                    & input {
                        height: 80%;
                        padding: 12px;
                        margin: 5px 0 5px 10px;
                        width: 100%;
                        border: none;
                        outline: none;
                        border-radius: 5px;
                    }

                    & span {
                        display: block;
                        margin: 5px 0;
                        padding: 11px;
                        color: #F1F1F1;
                        border-radius: 0 20px 20px 0;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }

            &__mode {
                display: flex;
                justify-content: space-between;

                & span {
                    background: #C4C4C4;
                    padding: 15px 9%;
                    border-radius: 20px;
                    margin: 5px auto;
                }
            }
        }

        .notation {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 90%;
            margin: 35px auto;
        }
    }
    @media (max-width: 630px) {
        .feed {
            .header {
                width: 100%;

                &__search {
                    & label {
                        justify-content: space-between;

                        & input {
                            width: 70%;
                        }

                        & span {
                            margin: auto;
                        }
                    }
                }

                &__mode {
                    justify-content: space-around;

                    & span {
                        margin: 5px 0;
                    }
                }
            }

            .notation {
                width: 100%;
            }
        }
    }
    @media (max-width: 1375px) {
        .create {
            width: 100%;
        }
    }
    @media (max-width: 450px) {
        .create {
            &__title {
                font-size: 12px;
            }
            &__body {
                &-input {
                    font-size: 15px;
                }
                &__btns {
                    & span {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>