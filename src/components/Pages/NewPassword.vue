<template>
    <main>
        <div class="register-second">
            <h2>Registration Step 2</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password_repeat" placeholder="Repeat your password"
                           class="form-control">
                </div>
                <div class="btns">
                    <button @click="exit" type="button" class="btn_sign">Exit</button>
                    <button @click="finish" type="button" class="btn">Finish</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import Login from "@/components/Pages/Login";
    import Profile from "@/components/Pages/Profile";

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
            exit() {
                this.$router.replace({name: Login.name})
            },
            finish() {
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


    .register-first {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background: #2c3e50;
        border-radius: 10px;
        padding: 50px;
    }

    .register-second {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background: #2c3e50;
        border-radius: 10px;
        padding: 50px;
    }

    .register-third {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        background: #2c3e50;
        border-radius: 10px;
        padding: 50px;
    }

    .radio {
        &-group {
            display: flex;
            justify-content: flex-start;
            margin: auto 3%;
        }

        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
        display: inline-block;
        vertical-align: middle;
        color: #ac3e31;
        position: relative;
        padding-left: 30px;
        cursor: pointer;

        & + .radio {
            margin-left: 20px;
        }

        & input[type="radio"] {
            display: none;

            &:checked ~ span:after {
                -webkit-transform: translate(-50%, -50%) scale(1);
                -moz-transform: translate(-50%, -50%) scale(1);
                -ms-transform: translate(-50%, -50%) scale(1);
                -o-transform: translate(-50%, -50%) scale(1);
                transform: translate(-50%, -50%) scale(1);
            }
        }

        & span {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 3px solid #0091d5;
            display: block;
            position: absolute;
            left: 0;
            top: 0px;

            &::after {
                content: "";
                height: 8px;
                width: 8px;
                background: #0091d5;
                display: block;
                position: absolute;
                left: 50%;
                top: 50%;
                -webkit-transform: translate(-50%, -50%) scale(0);
                -moz-transform: translate(-50%, -50%) scale(0);
                -ms-transform: translate(-50%, -50%) scale(0);
                -o-transform: translate(-50%, -50%) scale(0);
                transform: translate(-50%, -50%) scale(0);
                border-radius: 50%;
                -webkit-transition: 300ms ease-in-out 0s;
                -moz-transition: 300ms ease-in-out 0s;
                -ms-transition: 300ms ease-in-out 0s;
                -o-transition: 300ms ease-in-out 0s;
                transition: 300ms ease-in-out 0s;
            }
        }
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

        &:hover {
            background-color: #202020;
            color: #ced2cc;
            cursor: pointer;
        }
    }

    .btn {
        border-radius: 1.5rem;
        border: 1px solid #202020;
        width: 120px;
        background-color: transparent;
        font-weight: 600;
        color: #fff;
        padding: 10px;

        &:hover {
            background-color: #202020;
            cursor: pointer;
        }
    }

    h2 {
        width: calc(30px * 12 / 2);
        text-align: center;
        font-size: 30px;
        color: #f1f1f1;
        margin-bottom: 10px;
    }

    h4 {
        text-align: center;
        color: #0091d5;
    }

    .register-form {
        padding: 30px;
        width: 100%;

        & input {
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

            &:focus {
                border: 1px solid #ffdde8;
                background: linear-gradient(to right, #fff6f9, #fafafa);
            }

            &::placeholder {
                font-weight: 500;
                letter-spacing: 1px;
                font-style: italic;
                font-size: 15px;
                opacity: 0.8;
            }
        }
    }
</style>
