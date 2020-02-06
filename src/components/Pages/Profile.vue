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
                    <i class="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div class="info-body">
                    <div class="info-body__name">
                        <span class="info-body__name-tag">&lt;Name&gt;</span>
                        <span class="info-body__name-name">Чешко Илья</span>
                        <span class="info-body__name-tag">&lt;/Name&gt;</span>
                    </div>
                    <div class="info-body__status">
                        <span class="info-body__status-tag">&lt;Status&gt;</span>
                        <span class="info-body__status-status">Программирование на С похоже на быстрые танцы на только что отполированном полу людей с острыми бритвами в руках</span>
                        <span class="info-body__status-tag">&lt;/Status&gt;</span>
                    </div>
                </div>
                <div class="info-btns">
                    <button class="btn info-btns-btn">&lt;Get_Chat/&gt;</button>
                    <button class="btn info-btns-btn">&lt;Add_Friend/&gt;</button>
                </div>
            </div>
        </div>
        <ProfileFriends class="profile__friends"/>
        <Notation class="notation" v-for="post in posts" :key="post.id" :sender="post.sender"
                  :text="post.text" :image="post.image"
                  :likes="post.likes" :date="post.date"/>
    </div>
</template>

<script>
    import ProfileFriends from "@/components/Components/ProfileFriends";
    import Notation from "@/components/Components/Notation";

    export default {
        name: 'Profile',
        components: {Notation, ProfileFriends},
        data() {
            return {
                posts: [
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'profileImage.png', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        min-height: calc(100vh + 60px);
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
                        font-size: 24px;
                        color: #dadada;
                        padding: 15px;
                        margin: 0 auto;
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
                        transform: scale(1.05);
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
