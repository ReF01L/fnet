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
                <span>&lt;properties/&gt;</span>
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>