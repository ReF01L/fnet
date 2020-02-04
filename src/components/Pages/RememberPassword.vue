<template>
    <main>
        <div v-show="step === 1" class="login-right">
            <h2>Remember password</h2>
            <h4>Write your email</h4>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" v-model="email" placeholder="Email" class="form-control">
                </div>
                <div class="btns">
                    <button @click="goToLogin" type="button" class="btn_exit">Exit</button>
                    <button @click="step++" type="button" class="btn">Next</button>
                </div>
            </div>
        </div>
        <div v-show="step === 2" class="login-right">
            <h2>Remember password</h2>
            <h4>Write code from your email</h4>
            <div class="login-form">
                <div class="form-group">
                    <input type="text" v-model="code" placeholder="Code" class="form-control">
                </div>
                <div class="btns">
                    <button @click="goToLogin" type="button" class="btn_exit">Exit</button>
                    <button @click="step--" type="button" class="btn">Back</button>
                    <button @click="changePassword" type="button" class="btn_change">Next</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Login from "@/components/Pages/Login";
    import NewPassword from "@/components/Pages/NewPassword";

    export default {
        name: "RememberPassword",
        data() {
            return {
                email: '',
                code: '',
                step: 1
            }
        },
        methods: {
            goToLogin() {
                this.$router.replace({name: Login.name});
            },
            changePassword() {
                if (this.code !== '') {
                    let email = this.email;
                    this.$router.replace({name: NewPassword.name, params: {email}});
                }
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

    .btn_exit {
        border-radius: 1.5rem;
        border: none;
        width: 120px;
        background-color: #ced2cc;
        font-weight: 600;
        color: #202020;
        padding: 10px;
        margin-right: 15px;
    }

    .btn_exit:hover {
        background-color: #202020;
        color: #ced2cc;
        cursor: pointer;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
        padding-right: 15px;
    }

    .btn_change {
        margin-left: 15px;
    }

    .btn, .btn_change {
        border-radius: 1.5rem;
        border: 1px solid #202020;
        width: 120px;
        background-color: transparent;
        font-weight: 600;
        color: #fff;
        padding: 10px;
    }

    .btn:hover, .btn_change:hover {
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


    h2 {
        text-align: center;
        font-size: 30px;
        color: #f1f1f1;
        margin-bottom: 10px;
    }

    h4 {
        text-align: center;
        color: #0091d5;
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
