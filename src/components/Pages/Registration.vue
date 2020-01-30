<template>
    <main>
        <div class="register-left">
            <img src="../../assets/logo.png" alt="logo">
            <h3>Login</h3>
            <p>If you are already registered, click here.</p>
            <button @click="swapWindow" class="btn">Sign in</button>
        </div>
        <div class="register-right">
            <h2>Register Here</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="name" placeholder="Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="surname" placeholder="Surname" class="form-control">
                </div>
                <div class="form-group">
                    <input type="email" v-model="email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password_1" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password_2" placeholder="Repeat your password" class="form-control">
                </div>
                <button v-on:click="auth" type="button" class="btn">Register</button>
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
                name: '',
                surname: '',
                email: '',
                password_1: '',
                password_2: '',
            }
        },
        methods: {
            swapWindow() {
                this.$router.replace({name: Login.name})
            },
            auth() {
                if (this.name === '') {
                    this.error = 'Вы не ввели ваше имя!';
                }
                else if (this.surname === '') {
                    this.error = 'Вы не ввели вашу фамилию!';
                }
                else if (this.email === '') {
                    this.error = 'Вы не ввели вашу почту!';
                }
                else if (this.password_1 === '' || this.password_2 === '') {
                    this.error = 'Вы не ввели пароль!';
                }
                else if (this.password_1 !== this.password_2) {
                    this.error = 'Пароли отличаются друг от друга!'
                }
                else {
                    // проверить не занята ли почта
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
        background: linear-gradient(to right, #ee5253, #ff9f43);
    }

    .register-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #ffffff;
    }

    .register-left img {
        margin-top: 60px;
        margin-bottom: 18px;
        width: 80px;
        -webkit-animation: mover 1s infinite alternate;
        -o-animation: mover 1s infinite alternate;
        animation: mover 1s infinite alternate;
    }

    .register-left p {
        padding: 20px 20px;
        font-style: italic;
        font-size: 20px;
    }

    .register-left h3 {
        font-size: 30px;
    }

    .register-error {
        color: red;
    }

    .btn {
        border-radius: 1.5rem;
        border: none;
        width: 120px;
        background-color: #f8f8f8;
        font-weight: 600;
        color: #555555;
        padding: 10px;
    }

    .register-left .btn:hover {
        background-color: #555555;
        color: #f8f8f8;
        cursor: pointer;
    }

    .register-right {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background-color: #f8f8f8;
        border-top-left-radius: 10% 50%;
        border-bottom-left-radius: 10% 50%;
        padding: 50px;
    }

    .register-right h2 {
        text-align: center;
        font-size: 30px;
        color: #555555;
        margin-bottom: 10px;
        color: #555555;
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

    .register-right .btn {
        float: right;
        background-color: #ff9800;
        margin-top: 25px;
        color: #fff;
    }

    .register-right .btn:hover {
        background-color: #ff5722;
        cursor: pointer;
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
