<template>
    <main>
        <div v-show="step === 1" class="login">
            <h2>&lt;remember_password/&gt;</h2>
            <div class="login-form">
                <div class="form-group">
                    <input type="email" v-model="email" placeholder="<email/>" class="form-control">
                </div>
                <div class="btns">
                    <div class="btns__main">
                        <button class="btn_trans btn_ub">&lt;back/&gt;</button>
                        <button @click="step++" type="button" class="btn_trans">&lt;next/&gt;</button>
                    </div>
                    <button @click="exit" type="button" class="btn_bg" style="align-self: center; margin-top: 15px;">&lt;exit/&gt;</button>
                </div>
            </div>
        </div>
        <div v-show="step === 2" class="login">
            <h2>&lt;remember_password/&gt;</h2>
            <h4>/*Write code from your email*/</h4>
            <div class="login-form">
                <div class="form-group">
                    <input type="text" v-model="code" placeholder="Code" class="form-control">
                </div>
                <div class="btns">
                    <div class="btns__main">
                        <button @click="step--" type="button" class="btn_trans">&lt;back/&gt;</button>
                        <button @click="goToLast" type="button" class="btn_trans">&lt;next/&gt;</button>
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
            exit() {
                this.$router.replace({name: Login.name});
            },
            goToLast() {
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
            .btn_ub {
                border: 1px solid rgba(241, 241, 241, 0.2);
                color: rgba(241, 241, 241, 0.2);
                &:hover {
                    background: transparent;
                    cursor: default;
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
            &-error {
                margin: 10px;
                color: #EA6A47;
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
