<template>
    <main>
        <div class="login">
            <h2>&lt;login_here/&gt;</h2>
            <span class="login-error" v-if="error">{{error}}</span>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="<email/>" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="<password/>" class="form-control">
                </div>
                <div class="btns">
                    <div class="btns__main">
                        <button @click="sign_up" class="btn_sign">&lt;sign_up/&gt;</button>
                        <button @click="login" type="button" class="btn_login">&lt;login&gt;</button>
                    </div>
                    <span @click="rememberPassword" class="rpass">Remember password</span>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Registration from "@/components/Pages/Registration";
    import Profile from "@/components/Pages/Profile";
    import RememberPassword from "@/components/Pages/RememberPassword";

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                },
                success: '',
                error: ''
            }
        },
        methods: {
            rememberPassword() {
                this.$router.replace({name: RememberPassword.name})
            },
            sign_up() {
                this.$router.replace({name: Registration.name})
            },
            login() {
                let t = this;
                window.axios
                    .post('http://20.188.3.202:5000/api/auth/login', t.user)
                    .then(response => {
                        t.success = response.data.status;
                        if (t.success === 'auth_success') {
                            t.error = '';
                            try {
                                localStorage.setItem('user_id', response.data.user_id);
                                localStorage.setItem('token', response.data.token);

                                this.$router.replace({name: Profile.name})
                            } catch (e) {
                                alert('У тебя хуёвое локальное хранилище: \n' + e)
                            }
                        } else {
                            t.error = response.data.error_message;
                        }
                    })
                    .catch(error => {
                        // eslint-disable-next-line no-console
                        console.log(error);
                        alert("Хуёвое соединение с сервером: \n" + error);
                    });
            },
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.$router.replace({name: Profile.name});
            }
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
                .btn_sign, .btn_login {
                    border-radius: 50px;
                    border: none;
                    width: 40%;
                    padding: 10px;
                }
                .btn_sign {
                    background-color: #ced2cc;
                    color: #484848;
                    &:hover {
                        background-color: #202020;
                        color: #ced2cc;
                        cursor: pointer;
                    }
                }
                .btn_login {
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
            .rpass {
                color: #f1f1f1;
                margin: 15px auto auto;
                font-size: 10px;
                &:hover {
                    text-decoration: underline;
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
                margin: 10px;
                color: #EA6A47;
            }
            & h2 {
                font-size: 30px;
                color: #f1f1f1;
            }
            &-form {
                margin: auto 30px 30px;
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