<template>
    <main>
        <div class="login">
            <h2>&lt;remember_password/&gt;</h2>
            <h4>/*Write new password*/</h4>
            <div class="login-form">
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="<new_password/>" class="form-control">
                    <input type="password" v-model="user.password_repeat" placeholder="<repeat_password/>" class="form-control">
                </div>
                <div class="btns">
                    <div class="btns__main">
                        <button @click="back" type="button" class="btn_trans">&lt;back/&gt;</button>
                        <button @click="commit" type="button" class="btn_trans">&lt;commit/&gt;</button>
                    </div>
                    <button @click="exit" type="button" class="btn_bg" style="align-self: center; margin-top: 15px;">
                        &lt;exit/&gt;
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Login from "@/components/Pages/Login";
    import Profile from "@/components/Pages/Profile";
    import RememberPassword from "@/components/Pages/RememberPassword";

    export default {
        name: 'NewPassword',
        data() {
            return {
                error: '',
                user: {
                    email: '',
                    password: '',
                    password_repeat: ''
                }
            }
        },
        props: {
            email: String
        },
        methods: {
            back() {
                this.$router.replace({name: RememberPassword.name});
            },
            commit() {
                this.user.email = this.email;
                if (this.user.password === '' || this.user.password_repeat === '') {
                    this.error = 'Вы не ввели пароль!';
                } else if (this.user.password !== this.user.password_repeat) {
                    this.error = 'Пароли отличаются друг от друга!'
                } else {
                    this.error = '';
                    // Запрос на смену пароля
                    this.$router.replace({name: Profile.name});
                }
            },
            exit() {
                this.$router.replace({name: Login.name})
            },
        }
    }
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: #f1f1f1;
        .btns {
            display: flex;
            flex-direction: column;
            margin-top: 5px;
            &__main {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .btn_bg, .btn_trans {
                border-radius: 50px;
                border: none;
                width: 40%;
                padding: 10px;
            }
            .btn_bg {
                background-color: #ced2cc;
                color: #484848;
                &:hover {
                    background-color: #202020;
                    color: #ced2cc;
                    cursor: pointer;
                }
            }
            .btn_trans {
                border-radius: 50px;
                border: 1px solid #f1f1f1;
                background-color: transparent;
                color: #f1f1f1;
                &:hover {
                    background-color: #202020;
                    cursor: pointer;
                }
            }
        }
        .login {
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 25%;
            background: #484848;
            border-radius: 10px;
            padding: 50px;
            /*TODO: ошибка*/
            &-error {
                color: red;
            }
            & h2 {
                font-size: 30px;
                color: #f1f1f1;
            }
            & h4 {
                margin: 15px auto;
                color: #f1f1f1;
                font-weight: 400;
            }
            &-form {
                margin: auto;
                width: 100%;

                & input {
                    width: 90%;
                    padding: 10px;
                    margin: 10px;
                    border-radius: 10px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    font-style: italic;
                    font-size: 16px;
                    color: #484848;
                    background: #DADADA;

                    &::placeholder {
                        color: rgba(0, 0, 0, 0.4);
                        font-weight: 500;
                        letter-spacing: 1px;
                        font-style: italic;
                        font-size: 15px;
                        opacity: 0.8;
                    }
                }
            }
        }
    }
</style>
