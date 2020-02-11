<template>
    <div class="profile">
        <div class="profile__hero">
            <div class="profile__hero-img">
                <div class="profile__hero-img-crutch"></div>
                <img src="../../assets/profileImage.png" alt="" class="circle-img">
                <div class="profile__hero-img-crutch"></div>
            </div>
            <div class="info">
                <div class="info-status">
                    <span>Profile</span>
                    <i @keypress.enter="changeStatus" @click="changeStatus" class="fa fa-cog" aria-hidden="true"></i>
                </div>
                <div class="info-body">
                    <div class="info-body__name">
                        <span class="info-body__name-tag">&lt;Name&gt;</span>
                        <textarea disabled="disabled" class="info-body__status-status" v-model="name" ></textarea>
                        <span class="info-body__name-tag">&lt;/Name&gt;</span>
                    </div>
                </div>
                <div class="info-body__password">
                    <label>
                        &lt;old_password/&gt;
                        <input v-model="old_password" type="password">
                    </label>
                    <label>
                        &lt;new_password/&gt;
                        <input v-model="new_password" type="password">
                    </label>
                    <label>
                        &lt;repeat_password/&gt;
                        <input v-model="repeat_password" type="password">
                    </label>
                    <button @click="changePassword" class="btn info-body__btn">&lt;edit_password/&gt;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileEdit',
        data() {
            return {
                name: '',
                old_password: '',
                new_password: '',
                repeat_password: '',
            }
        },
        methods: {
            changeStatus() {
                event.target.preventDefault;
                document.querySelectorAll('.info-body__status-status').forEach(elem => {
                    elem.disabled = !elem.disabled;
                    elem.addEventListener('keydown', (e) => {
                        if (e.keyCode === 13 && !e.shiftKey) {
                            e.preventDefault();
                            elem.disabled = !elem.disabled;
                            window.axios
                                .put(`http://20.188.3.202:5000/api/users/update_name`, {
                                    token: localStorage.getItem('token'),
                                    first_name: this.name.split(' ')[1],
                                    last_name: this.name.split(' ')[0],
                                })
                        }
                    });
                });
            },
            changePassword() {
                if (this.new_password === this.repeat_password) {
                    window.axios
                        .put(`http://20.188.3.202:5000/api/users/update_password`, {
                            token: localStorage.getItem('token'),
                            old_password: this.old_password,
                            new_password: this.new_password
                        })
                        .then(response => {
                            // eslint-disable-next-line no-console
                            console.log(response);
                            localStorage.setItem('token', response.data.token);
                        });
                }
            }
        },
        mounted() {
            window.axios
                .get('http://20.188.3.202:5000/api/users/' + localStorage.getItem('user_id'))
                .then(response => {
                    this.name = `${response.data.last_name} ${response.data.first_name}`;
                });
        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        width: 100%;
        min-height: 100vh;
        background-color: var(--main-bg-color);
        &__hero {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding-top: 40px;
            margin-left: 10%;
            &-img {
                position: relative;
                & img {
                    position: absolute;
                    z-index: 3;
                    transform: translate(-50%, 25%);
                }
                &-crutch {
                    z-index: 2;
                    position: absolute;
                    width: 750px;
                    height: 150px;
                    transform: translate(-50%, 175%) rotate(133.79deg);
                    background: #4CB5F5;
                    &:last-child {
                        transform: translate(-50%, 175%) rotate(31.74deg);
                    }
                }
            }
        }
        & .info {
            width: 30%;
            min-width: 340px;
            &-status {
                min-height: 40px;
                background: #484848;
                width: 100%;
                border-radius: 32px 32px 0 0;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                & span {
                    font-size: 24px;
                    text-align: center;
                    color: #dadada;
                    margin-left: 25px;
                }
                & i {
                    margin-right: 25px;
                    font-size: 25px;
                    color: #f1f1f1;
                    transition: 2s ease-in-out;
                    &:hover {
                        transform: rotate(720deg);
                    }
                }
            }
            &-body {
                background: #202020;
                border-radius: 0 0 32px 32px;
                &__status-status {
                    background: transparent;
                    bottom: 0;
                    outline: none;
                    font-size: 24px;
                    color: #dadada;
                    padding: 15px;
                    margin: 0 auto;
                    border: none;
                    -ms-overflow-style: none; /* IE 10+ */
                    scrollbar-width: none; /* Firefox */
                    resize: none;

                    &::-webkit-scrollbar {
                        width: 0;
                        background: transparent;
                    }
                }
                &__password {
                    align-self: center;
                    width: 80%;
                    margin: 35px 10%;
                    padding: 25px 0;
                    display: flex;
                    flex-direction: column;
                    background: #202020;
                    color: #f1f1f1;
                    border-radius: 32px;
                    & label {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 10px;
                        & input {
                            margin-top: 5px;
                            background: #c4c4c4;
                            min-height: 30px;
                            width: 50%;
                            border-radius: 10px;
                            padding-left: 15px;
                        }
                    }
                }
                &__btn {
                    background: #6AB187;
                    width: 40%;
                    align-self: center;
                    border-radius: 32px;
                    min-height: 40px;
                    margin-bottom: 15px;
                    transition: .5s;
                    &:hover {
                        cursor: pointer;
                        transform: scale(1.03);
                    }
                }
                &__name {
                    display: flex;
                    flex-direction: column;

                    &-tag {
                        color: #ea6a47;
                        align-self: flex-start;
                        font-size: 24px;
                        padding: 15px;

                        &:nth-child(3) {
                            align-self: flex-end;
                        }
                    }

                    &-name {
                        color: #dadada;
                        font-size: 36px;
                        padding: 15px;
                    }
                }
            }
        }
        &__friends {
            margin: 10% auto;
        }
    }
    @media (max-width: 1375px) {
        .profile {
            &__hero {
                margin: auto;
            }
            & .info {
                margin-left: 30%;
            }
            & .notation {
                margin: auto;
                width: 100%;
            }
        }
    }
    @media (max-width: 1225px) {
        .profile {
            &__hero {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 35px;
                &-img {
                    & img {
                        transform: translate(0);
                        position: relative;
                    }
                    &-crutch {
                        display: none;
                    }
                }
                & .info {
                    width: 80%;
                    margin: 25px auto auto;
                }
            }
        }
        .profile__friends {
            display: none;
        }
    }
    @media (max-width: 760px) {
        .profile {
            &__hero {
                &-img {
                    & img {
                        width: 300px;
                        height: 300px;
                    }
                }
                & .info {
                    width: 90%;
                }
            }
        }
    }
    @media (max-width: 420px) {
        .info {
            &-body {
                &__btn {
                    font-size: 10px;
                }
            }
        }
    }
</style>
