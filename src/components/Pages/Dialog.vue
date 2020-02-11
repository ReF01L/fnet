<template>
    <div class="dialog">
        <div class="dialog__info">
            <div class="dialog__info__title"></div>
            <div class="dialog__info__body">
                <img class="dialog__info__body-img circle-img" src="../../assets/profileImage.png" alt=""/>
                <div class="dialog__info__body__block">
                    <span class="dialog__info__body__block-username">{{$route.params.companion_name}}</span>
                </div>
            </div>
        </div>
        <div class="dialog__main">
            <Message v-for="message in messages" :key="message.id"
                     :date="message.time"
                     :companion="message.sender_name"
                     :message="message.text"/>
        </div>
        <div class="commit">
            <label>
                <input v-model="message" type="text" placeholder="Message">
                <span @click="commit">&lt;commit/&gt;</span>
            </label>
        </div>
    </div>
</template>

<script>
    import Message from "@/components/Components/Message";

    export default {
        name: "Dialog",
        components: {Message},
        data() {
            return {
                messages: [],
                companion_name: '',
                companion_id: 0,
                my_name: '',
                message: '',
            }
        },
        mounted() {
            window.axios
                .get(`http://20.188.3.202:5000/api/users/${localStorage.getItem('user_id').toString()}`)
                .then(response => {
                    this.my_name = `${response.data.first_name} ${response.data.last_name}`
                });
            window.axios
                .get(`http://20.188.3.202:5000/api/users/${this.$route.params.companion_id.toString()}`)
                .then(response => {
                    this.companion_name = `${response.data.first_name} ${response.data.last_name}`
                });
            this.fetch_messages();
        },
        methods: {
            fetch_messages() {
                window.axios
                .get(`http://20.188.3.202:5000/api/messages/${this.$route.params.companion_id.toString()}?token=${localStorage.getItem('token')}`)
                .then(response => {
                    for (let key in response.data.messages) {
                        let message = response.data.messages[key];
                        if (localStorage.getItem('user_id') === message.sender_id.toString()) {
                            message['sender_name']  = this.my_name;
                        } else {
                            message['sender_name']  = this.companion_name;
                        }
                        this.messages.push(message)
                    }
                });
            },
            commit() {
                if (this.message !== '') {
                    window.axios.defaults.headers.post['Content-Type'] = 'application/json';
                    window.axios
                        .post(`http://20.188.3.202:5000/api/messages/`, {
                            token: localStorage.getItem('token'),
                            receiver_id: this.$route.params.companion_id.toString(),
                            text: this.message
                        })
                        .then(() => {
                            this.messages = [];
                            this.fetch_messages();
                            this.message = '';
                        })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        padding-top: 15px;
        min-height: 100vh;
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