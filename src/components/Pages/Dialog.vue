<template>
    <div class="dialog">
        <div class="dialog__info">
            <div class="dialog__info__title"></div>
            <div class="dialog__info__body">
                <span class="dialog__info__body-username">{{friend}}</span>
                <span class="dialog__info__body-status">&lt;{{status}}/&gt;</span>
                <div class="dialog__info__body__img">
                    <img class="dialog__info__body__img-img circle-img" src="../../assets/profileImage.png" alt=""/>
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
        mounted() {
            let d = document.querySelectorAll('.dialog__main');
            d.scrollTo(0, d.scrollHeight);
            // eslint-disable-next-line no-console
            console.log(d.scrollHeight);
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        padding-top: 35px;
        min-height: 100vh;
        background-color: var(--main-bg-color);
        width: 70%;

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
                justify-content: space-between;
                align-items: center;

                &-username {
                    color: #f1f1f1;
                    padding-left: 5%;
                    font-size: 30px;
                }

                &-status {
                    color: rgba(106, 177, 135, 0.5);
                    align-self: flex-end;
                    padding-bottom: 2%;
                }

                &__img {
                    margin: 10px 25px;

                    &-img {
                        width: 100px;
                        height: 100px;
                    }
                }
            }
        }

        .dialog__main {
            height: 600px;
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
                    width: 10%;
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
    @keyframes anim-ramka-5 {
        100% {
            transform: rotate(1turn);
        }
    }
</style>