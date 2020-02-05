<template>
    <main>
        <div v-show="page === 1" class="register-first">
            <h2>&lt;Registration_1/&gt;</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="user.first_name" placeholder="<first_name/>" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.last_name" placeholder="<second_name/>" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="user.birth_date" onblur="(this.type='text')"
                           onfocus="(this.type='date')"
                           placeholder="date_of_birth" class="from-control">
<!--                    TODO: icon design-->
                    <i class="far fa-calendar-check"></i>
                </div>
                <div class="radio-group">
                    <label class="radio">
                        <input v-model="user.gender" type="radio" value="male" name="gender">
                        &lt;male/&gt;
                        <span></span>
                    </label>
                    <label class="radio">
                        <input v-model="user.gender" type="radio" value="female" name="gender">
                        &lt;female/&gt;
                        <span></span>
                    </label>
                </div>
                <div class="btns">
                    <button @click="swapWindow" class="btns-sign">Sign in</button>
                    <button @click="firstNext" type="button" class="btns-btn">Next</button>
                </div>
            </form>
        </div>
        <div v-show="page === 2" class="register-second">
            <h2>&lt;Registration_2/&gt;</h2>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="email" v-model="user.email" placeholder="Email" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="user.password" placeholder="Password" class="form-control">
                </div>
                <div class="form-group">
                    <input type="password" v-model="password_repeat" placeholder="Repeat your password"
                           class="form-control">
                </div>
                <div class="btns">
                    <button @click="page -= 1" type="button" class="btns-btn">Back</button>
                    <button @click="secondNext" type="button" class="btns-btn">Next</button>
                </div>
            </form>
        </div>
        <div v-show="page === 3" class="register-third">
            <h2>&lt;Registration_3/&gt;</h2>
            <h4>/*Write code from your email*/</h4>
            <span class="register-error" v-if="error">{{error}}</span>
            <form class="register-form">
                <div class="form-group">
                    <input type="text" v-model="code" placeholder="<code/>" class="form-control">
                </div>
                <div class="btns">
                    <button @click="page -= 1" type="button" class="btns-btn">Back</button>
                    <button @click="auth" type="button" class="btns-sign">Sign up</button>
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
                password_repeat: '',
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    birth_date: '',
                    gender: ''
                },
                canMove: ''
            }
        },
        methods: {
            swapWindow() {
                this.$router.replace({name: Login.name})
            },
            firstNext() {
                if (this.user.first_name === '') {
                    this.error = 'You did not enter your name';
                } else if (this.user.last_name === '') {
                    this.error = 'You have not entered your last name';
                } else if (this.user.birth_date === '') {
                    this.error = 'You did not indicate your age';
                } else if (this.user.gender === '') {
                    this.error = 'You did not specify your gender';
                } else {
                    this.error = '';
                    this.page++;
                }
            },
            secondNext() {
                let t = this;
                if (t.user.password !== t.password_repeat) {
                    t.error = 'Different passwords'
                } else {
                    // window.axios
                    //     .post('http://20.188.3.202:5000/auth/register', this.user)
                    //     .then(response => {
                    //         t.canMove = response.data.status;
                    //         if (t.canMove === 'auth_continue') {
                    //             t.page++;
                    //             t.error = ''
                    //         } else t.error = response.data.error_message;
                    //     })
                    //     .catch(error => {
                    //         alert("Хуёвое соединение с сервером: \n" + error);
                    //     });
                    t.page++;
                }
            },
            auth() {
                let t = this;
                window.axios
                    .post('http://20.188.3.202:5000/auth/email_verify', {
                        code: this.code,
                        email: this.user.email
                    })
                    .then(response => {
                            t.canMove = response.data.status;
                            if (t.canMove === 'auth_success') {
                                t.error = '';
                                // TODO: Записать в куки user_id, token
                                this.$router.replace({name: Profile.name})
                            } else t.error = response.data.error_message;
                        }
                    )
                    .catch(error => {
                        alert("Хуёвое соединение с сервером: \n" + error);
                    });
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
        h2 {
            font-size: 30px;
            color: #f1f1f1;
        }
        .btns {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 15px;
            &-sign, &-btn {
                border-radius: 50px;
                border: none;
                width: 40%;
                padding: 10px;
            }
            &-sign {
                background-color: #ced2cc;
                color: #202020;
                &:hover {
                    background-color: #202020;
                    color: #ced2cc;
                    cursor: pointer;
                }
            }
            &-btn {
                border: 1px solid #f1f1f1;
                background-color: transparent;
                color: #f1f1f1;
                &:hover {
                    background-color: #202020;
                    cursor: pointer;
                }
            }
        }
        .register {
            &-form {
                padding: 30px;
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
            &-error {
                color: red;
            }
            &-first {
                border: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 25%;
                background: #484848;
                border-radius: 10px;
                padding: 50px;
                .radio {
                    color: #dadada;
                    position: relative;
                    padding-left: 30px;
                    cursor: pointer;
                    &-group {
                        display: flex;
                        justify-content: space-around;
                        margin: auto;
                        & + .radio {
                            margin-left: 20px;
                        }
                        & input[type="radio"] {
                            display: none;
                            &:checked ~ span:after {
                                transform: translate(-50%, -50%) scale(1);
                            }
                        }
                        & span {
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            border: 3px solid #f1f1f1;
                            background: #f1f1f1;
                            display: block;
                            position: absolute;
                            left: 0;
                            top: 0;

                            &::after {
                                content: "";
                                height: 8px;
                                width: 8px;
                                background: rgba(72, 72, 72, 0.5);
                                display: block;
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%) scale(0);
                                border-radius: 50%;
                                transition: 300ms ease-in-out 0s;
                            }
                        }
                    }
                    font-size: 20px;
                }
            }
            &-second {
                border: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 25%;
                background: #484848;
                border-radius: 10px;
                padding: 50px;
            }
            &-third {
                border: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 25%;
                background: #484848;
                border-radius: 10px;
                padding: 50px;
                h4 {
                    margin-top: 20px;
                    font-size: 13px;
                    color: #0091d5;
                }
                & .register-form {
                    padding-top: 0;
                }
            }
        }
    }
</style>
