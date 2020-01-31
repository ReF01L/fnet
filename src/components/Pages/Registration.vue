<template>
    <main>
        <div class="register-right">
            <h2>Register Here</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="user.first_name" placeholder="Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.last_name" placeholder="Surname" class="form-control">
                </div>
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password_repeat" placeholder="Repeat your password" class="form-control">
                </div>
                <div class="btns">
                    <button @click="swapWindow" class="btn_sign">Sign in</button>
                    <button @click="auth" type="button" class="btn">Register</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Login from "@/components/Pages/Login";
    import Profile from "@/components/Pages/Profile";

    export default {
        name: 'Auth',
        data() {
            return {
                error: '',
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_repeat: '',
                }
            }
        },
        methods: {
            swapWindow() {
                this.$router.replace({name: Login.name})
            },
            auth() {
                if (this.user.first_name === '') {
                    this.error = 'Вы не ввели ваше имя!';
                } else if (this.user.last_name === '') {
                    this.error = 'Вы не ввели вашу фамилию!';
                } else if (this.user.email === '') {
                    this.error = 'Вы не ввели вашу почту!';
                } else if (this.user.password === '' || this.user.password_repeat === '') {
                    this.error = 'Вы не ввели пароль!';
                } else if (this.user.password !== this.user.password_repeat) {
                    this.error = 'Пароли отличаются друг от друга!'
                } else {
                    // проверить не занята ли почта
                    window.axios
                        .post('http://20.188.3.202:5000/auth/register', this.user)
                        .then(response => {
                            // eslint-disable-next-line no-console
                            console.log(response)
                        })
                        .catch(error => {
                            // eslint-disable-next-line no-console
                            console.log(error)
                        })
                    this.$router.replace({name: Profile.name})
                }
            }
        }
    }
</script>

<style scoped>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: #f1f1f1;
    }

    .register-error {
        color: red;
    }

    .btns {
        margin-top: 15px;
        display: flex;
        justify-content: flex-end;
        padding-right: 15px;
    }
    .btn_sign {
        border-radius: 1.5rem;
        border: none;
        width: 120px;
        background-color: #ced2cc;
        font-weight: 600;
        color: #202020;
        padding: 10px;
        margin-right: 15px;
    }
    .btn_sign:hover {
        background-color: #202020;
        color: #ced2cc;
        cursor: pointer;
    }

    .btn {
        border-radius: 1.5rem;
        border: 1px solid #202020;
        width: 120px;
        background-color: transparent;
        font-weight: 600;
        color: #fff;
        padding: 10px;
    }

    .btn:hover {
        background-color: #202020;
        cursor: pointer;
    }

    .register-right {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background: #2c3e50;
        border-radius: 10px 10px 10px 10px;
        padding: 50px;
    }

    .register-right h2 {
        text-align: center;
        font-size: 30px;
        color: #f1f1f1;
        margin-bottom: 10px;
    }

    .register-form {
        padding: 30px;
        width: 100%;
    }

    .register-form input {
        width: 90%;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        border: 1px solid rgba(192, 192, 192, 0.4);
        font-weight: 500;
        letter-spacing: 1px;
        font-style: italic;
        font-size: 18px;
        color: #59001e;
    }

    .register-form input::placeholder {
        font-weight: 500;
        letter-spacing: 1px;
        font-style: italic;
        font-size: 15px;
        opacity: 0.8;
    }

    .register-form input:focus {
        border: 1px solid #ffdde8;
        background: linear-gradient(to right, #fff6f9, #fafafa);
    }

    @keyframes mover {
        0% {
            -webkit-transform: translateY(0);
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -o-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-20px);
            -moz-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            -o-transform: translateY(-20px);
            transform: translateY(-20px);
        }
    }
</style>
