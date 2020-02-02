<template>
    <main>
        <div v-show="page === 1" class="register-first">
            <h2>Registration Step 1</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="user.first_name" placeholder="Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.last_name" placeholder="Surname" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.age" onblur="(this.type='text')" onfocus="(this.type='date')"
                           placeholder="Date of Birth" class="from-control">
                </div>
                <div class="radio-group">
                    <label class="radio">
                        <input v-model="user.gender" type="radio" value="male" name="gender">
                        male
                        <span></span>
                    </label>
                    <label class="radio">
                        <input v-model="user.gender" type="radio" value="female" name="gender">
                        female
                        <span></span>
                    </label>
                </div>
                <div class="btns">
                    <button @click="swapWindow" class="btn_sign">Sign in</button>
                    <button @click="firstNext" type="button" class="btn">Next</button>
                </div>
            </form>
        </div>
        <div v-show="page === 2" class="register-second">
            <h2>Registration Step 2</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password_repeat" placeholder="Repeat your password"
                           class="form-control">
                </div>
                <div class="btns">
                    <button @click="page -= 1" type="button" class="btn_sign">Back</button>
                    <button @click="secondNext" type="button" class="btn">Next</button>
                </div>
            </form>
        </div>
        <div v-show="page === 3" class="register-third">
            <h2>Registration Step 3</h2>
            <h4>Get code from your e-mail</h4>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="code" placeholder="Code" class="form-control">
                </div>
                <div class="btns">
                    <button @click="page -= 1" type="button" class="btn_sign">Back</button>
                    <button @click="auth" type="button" class="btn">Sign up</button>
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
                page: 1,
                code: '',
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_repeat: '',
                    age: '',
                    gender: ''
                }
            }
        },
        methods: {
            swapWindow() {
                this.$router.replace({name: Login.name})
            },
            firstNext() {
                if (this.user.first_name === '') {
                    this.error = 'Вы не ввели ваше имя!';
                } else if (this.user.last_name === '') {
                    this.error = 'Вы не ввели вашу фамилию!';
                } else if (this.user.age === '') {
                    this.error = 'Вы не указали ваш возраст!';
                } else if (this.user.gender === '') {
                    this.error = 'Вы не указали ваш пол!';
                } else {
                    this.error = '';
                    this.page++;
                }
            },
            secondNext() {
                if (this.user.email === '') {
                    this.error = 'Вы не ввели вашу почту!';
                } else if (this.user.password === '' || this.user.password_repeat === '') {
                    this.error = 'Вы не ввели пароль!';
                } else if (this.user.password !== this.user.password_repeat) {
                    this.error = 'Пароли отличаются друг от друга!'
                } else {
                    this.error = '';
                    this.page++;
                }
            },
            auth() {
                if (this.code !== '') {
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
                } else {
                    this.error = 'Вы не ввели код!';
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
