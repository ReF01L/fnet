<template>
    <main>
        <div class="login-right">
            <h2>Login Here</h2>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <div class="btns">
                    <button @click="swapWindow" class="btn_sign">Sign Up</button>
                    <button v-on:click="login" type="button" class="btn">Login</button>
                </div>
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


<style lang="scss" scoped>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background: #f1f1f1;
    }
    .btns {
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

    .login-right {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background: #2c3e50;
        border-radius: 10px 10px 10px 10px;
        padding: 50px;
    }

    .login-right h2 {
        text-align: center;
        font-size: 30px;
        color: #f1f1f1;
        margin-bottom: 10px;
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
</style>
