<template>
    <main>
        <div class="login-left">
            <img src="../../assets/logo.png" alt="logo">
            <h3>Join us</h3>
            <p>If you have not registered yet, click here.</p>
            <button @click="swapWindow" class="btn">Sign Up</button>
        </div>
        <div class="login-right">
            <h2>Login Here</h2>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <button v-on:click="login" type="button" class="btn">Login</button>
            </div>
        </div>
    </main>
</template>

<script>
    import Registration from "@/components/Pages/Registration";
    import Profile from "@/components/Pages/Profile";

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            swapWindow() {
                this.$router.replace({name: Registration.name})
            },
            login() {
                if (this.user.email !== '' && this.user.password !== '') {
                    window.axios
                        .post('http://20.188.3.202:5000/auth/login', this.user)
                        .then(response => {
                            // eslint-disable-next-line no-console
                            console.log(response)
                        })
                        .catch(error => {
                            // eslint-disable-next-line no-console
                            console.log(error)
                        })
                }
                this.$router.replace({name: Profile.name})
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
        background: linear-gradient(to right, #ff9f43, #ee5253);
    }

    .login-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #ffffff;
    }

    .login-left img {
        margin-top: 60px;
        margin-bottom: 18px;
        width: 80px;
        -webkit-animation: mover 1s infinite alternate;
        -o-animation: mover 1s infinite alternate;
        animation: mover 1s infinite alternate;
    }

    .login-left h3 {
        font-size: 30px;
    }

    .login-left p {
        padding: 20px 20px;
        font-style: italic;
        font-size: 20px;
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

    .login-left .btn:hover {
        background-color: #555555;
        color: #f8f8f8;
        cursor: pointer;
    }

    .login-right {
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

    .login-right h2 {
        text-align: center;
        font-size: 30px;
        color: #555555;
        margin-bottom: 10px;
        color: #555555;
    }

    .login-form {
        padding: 30px;
        width: 100%;
    }

    .login-form input {
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

    .login-form input::placeholder {
        font-weight: 500;
        letter-spacing: 1px;
        font-style: italic;
        font-size: 15px;
        opacity: 0.8;
    }

    .login-form input:focus {
        border: 1px solid #ffdde8;
        background: linear-gradient(to right, #fff6f9, #fafafa);
    }

    .login-right .btn {
        float: right;
        background-color: #ff9800;
        margin-top: 25px;
        color: #fff;
    }

    .login-right .btn:hover {
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
