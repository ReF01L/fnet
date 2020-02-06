<template>
    <div class="dialog">
        <div class="dialog__info">
            <div class="dialog__info__title"></div>
            <div class="dialog__info__body">
                <img class="dialog__info__body-img circle-img" src="../../assets/profileImage.png" alt=""/>
                <div class="dialog__info__body__block">
                    <span class="dialog__info__body__block-username">{{friend}}</span>
                    <span class="dialog__info__body__block-status">&lt;{{status}}/&gt;</span>
                </div>
            </div>
        </div>
        <div class="dialog__main">
            <Message v-for="message in messages" :key="message.id"
                     :date="message.date" :img="message.img" :message="message.message"/>
        </div>
        <div class="commit">
            <label>
                <input type="text" placeholder="Message">
                <span>&lt;commit/&gt;</span>
            </label>
        </div>
    </div>
</template>

<script>
    import Message from "@/components/Components/Message";

    export default {
        name: "Dialog",
        components: {Message},
        props: {
            friend: {
                type: String,
                default: 'Username'
            },
            status: {
                type: String,
                default: 'online'
            }
        },
        data() {
            return {
                messages: [
                    {img: 'profileImage.png', message: ')', date: '<16:40 { 1 feb 2020 }/>'},
                    {
                        img: 'profileImage.png',
                        message: 'Может ты сам лох!??????????!?!?!?!? \n' +
                            'ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы',
                        date: '<16:40 { 1 feb 2020 }/>'
                    },
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                    {img: 'profileImage.png', message: 'Привет ты лох)', date: '<16:40 { 1 feb 2020 }/>'},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .dialog {
        padding-top: 15px;
        max-height: 100vh;
        background-color: var(--main-bg-color);
        width: 100%;

        &__info {
            display: flex;
            flex-direction: column;
            min-height: 60px;
            z-index: 999;

            &__title {
                padding: 10px;
                width: 100%;
                background: #404040;
                border-radius: 30px 30px 0 0;
            }

            &__body {
                background: #202020;
                display: flex;
                justify-content: center;
                align-items: center;

                &__block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    &-username {
                        color: #f1f1f1;
                        padding-left: 5%;
                        font-size: 30px;
                    }

                    &-status {
                        padding: 10px;
                        color: rgba(106, 177, 135, 0.5);
                    }
                }

                &-img {
                    margin: 10px 25px;
                    width: 100px;
                    height: 100px;
                }
            }
        }

        .dialog__main {
            height: 70vh;
            overflow: auto;
            padding: 10px;
            display: flex;
            flex-direction: column;
            -ms-overflow-style: none; /* IE 10+ */
            scrollbar-width: none; /* Firefox */
            background: #202020;

            &::-webkit-scrollbar {
                width: 0;
                background: transparent;
            }
        }

        .commit {
            padding: 10px;
            background: #CED2CC;
            border-radius: 0 0 20px 20px;

            & label {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: #20283E;
                font-size: 18px;

                & span {
                    position: relative;
                    z-index: 0;
                    width: 20%;
                    padding: 20px 0;
                    border-radius: 10px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        cursor: pointer;
                    }
                }

                & input {
                    padding: 10px;
                    width: 100%;
                    border-radius: 10px;
                    border: none;
                }
            }
        }
    }
    @media (max-width: 1200px) {
        .dialog {
            min-height: 100vh;
            padding-top: 15px;

            &__info {
                &__body {
                    &-img {
                        margin: 10px 25px;
                        width: 80px;
                        height: 80px;
                    }
                }
            }

            .dialog__main {
            }

            .commit {
                padding: 15px;

                & label {
                    font-size: 18px;

                    & span {
                        width: 30%;
                    }

                    & input {
                        padding: 10px;
                        width: 100%;
                        border-radius: 10px;
                        border: none;
                    }
                }
            }
        }
    }
    @media (max-width: 830px) {
        .dialog {
            &__info {
                &__body {
                    &__block {
                        &-username {
                            font-size: 20px;
                        }
                        &-status {
                            font-size: 12px;
                        }
                    }
                }
            }
            .commit {
                & label {
                    font-size: 14px;
                    justify-content: space-between;
                    & span {
                        width: 40%;
                    }
                    & input {
                        width: 60%;
                    }
                }
            }
        }
    }
</style>