<template>
    <div class="profile">
        <div class="profile-header">
            <div class="profile-header__hero">
                <div class="profile-header__hero-leftside">
                    <span class="profile-header__hero-leftside__info">Followers 123</span>
                    <span class="profile-header__hero-leftside__info">Friend 222</span>
                    <span class="profile-header__hero-leftside__info">Online 89</span>
                </div>
                <img src="../../assets/profileImage.png" alt="" class="profile-header__img" draggable="false">
                <div class="profile-header__hero-rightside">
                    <span class="profile-header__hero-rightside__info">182 Music</span>
                    <span class="profile-header__hero-rightside__info">12 Photo</span>
                    <span class="profile-header__hero-rightside__info">46 Groups</span>
                </div>
            </div>
            <div class="profile-header__status">
                <!--                eslint-disable-next-line-->
                <span v-show="!showStatus" class="profile-header__status-text">{{status.length === 0 ? 'Ты без статуса' : status.length <= 50 ? status : status.substring(0, 50) + ' ...' }}</span>
                <span v-show="showStatus" class="profile-header__status-text-full">
                    {{ status }}
                </span>
                <button v-show="status.length !== 0 && status.length >= 50" v-on:click="showStatus = !showStatus"
                        class="profile-header__status-text__btn">{{ showStatus ? 'Hide' : 'Show all'}}
                </button>
                <div class="profile-header__status-form">
                    <input maxlength="220" v-model="status" type="text" class="profile-header__status-form-input"
                           placeholder="Input your status: ">
                    <button class="profile-header__status-form-send">
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="profile-header__buttons">
                <button class="profile-header__buttons-add">Add as friend</button>
                <button class="profile-header__buttons-message">
                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="profile-hero">
            <CreateNoteForm/>
            <Notation class="notation" v-for="notation in notations" :key="notation.id" :sender="notation.sender"
                      :text="notation.text" :image="notation.image !== ''" :music="notation.music !== ''"
                      :likes="notation.likes" :com="notation.likes" :share="notation.share"/>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Notation from "@/components/Components/Notation";
    import Footer from "@/components/Footer";
    import CreateNoteForm from "@/components/Components/CreateNoteForm";

    export default {
        name: 'Profile',
        components: {CreateNoteForm, Footer, Notation},
        data() {
            return {
                status: '',
                showStatus: false,
                notations: [
                    {sender: 'Alexandr', text: 'AlexandrText;', image: 'sdaf', music: 'df', likes: 0, com: 0, share: 0},
                    {sender: 'ReF0iL', text: 'ReF0iLText', image: 'dsaf', music: 'df', likes: 0, com: 0, share: 0},
                    {sender: 'Maksim', text: 'MaxText', image: 'dsaf', music: 'df', likes: 0, com: 0, share: 0}
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notation {
        margin-left: 45px;
        padding-bottom: 20px;
        margin-top: 80px;
        display: flex;
        min-height: 120px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: 2px solid #2c3e50;
        border-bottom: 2px solid #2c3e50;
        width: 90%;

        &:first-child {
            margin-top: 0;
        }
    }

    .profile {
        --status-input-bg-color: cyan;
        --status-btn-color: lightblue;
        --status-short-text-color: #2c3e50;
        --status-full-text-color: #555555;
        --basic-btn-color: darkcyan;
        --basic-placeholder-color: #555555;

        width: 100%;
        height: 100%;
        background-color: var(--main-bg-color);

        &-header {
            padding-top: 50px;
            display: flex;
            flex-direction: column;

            &__img {
                min-width: 120px;
                min-height: 80px;
                max-width: 250px;
                max-height: 250px;
                border-radius: 25px;
            }

            &__hero {
                display: flex;
                width: 100%;
                justify-content: space-evenly;
                align-items: center;

                &-leftside {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;

                    &__info {
                        margin-top: 15px;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                &-rightside {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;

                    &__info {
                        margin-top: 15px;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }

            &__status {
                margin-top: 25px;
                display: flex;
                flex-direction: column;
                align-items: center;

                &-form {
                    margin-top: 15px;
                    display: flex;
                    justify-content: center;

                    &-send {
                        width: 35px;
                        border: none;
                        border-bottom-right-radius: 10px;
                        border-top-right-radius: 10px;
                        background-color: var(--status-btn-color);
                        opacity: 0.8;

                        &:hover {
                            opacity: 1;
                            cursor: pointer;
                        }
                    }

                    &-input {
                        width: 80%;
                        background-color: var(--status-input-bg-color);
                        border: none;
                        padding: 15px;
                        border-bottom-left-radius: 10px;
                        border-top-left-radius: 10px;
                        font-size: 18px;

                        &::placeholder {
                            font-size: 17px;
                            font-style: italic;
                        }
                    }
                }

                &-text {
                    font-size: 13px;
                    color: var(--status-short-text-color);
                    margin: 15px;
                    font-weight: 600;

                    &-full {
                        font-size: 14px;
                        color: var(--status-full-text-color);
                        margin: 15px;
                        font-weight: 600;
                        width: 30%;
                    }

                    &__btn {
                        background-color: #00bebe;
                        font-weight: 700;
                        width: 120px;
                        padding: 8px 20px;
                        border: 2px solid #2c3e50;
                        border-radius: 1px;
                        -webkit-transition: 0.5s;
                        -moz-transition: 0.5s;
                        -ms-transition: 0.5s;
                        -o-transition: 0.5s;
                        transition: 0.5s;

                        &:hover {
                            cursor: pointer;
                            background-color: rgba(0, 139, 139, 0.4);
                        }

                        &:active {
                            background-color: rgba(0, 88, 88, 1);
                        }
                    }
                }
            }

            &__buttons {
                margin-top: 15px;
                height: 35px;

                & button {
                    border: none;
                    border-radius: 7%;
                    background-color: var(--basic-btn-color);
                    opacity: 0.8;

                    &:hover {
                        cursor: pointer;
                        opacity: 1;
                    }

                    &:focus {
                        outline: none;
                    }
                }

                &-add {
                    margin-right: 5px;
                    height: 100%;
                    width: 25%;
                    font-size: 20px;
                }

                &-message {
                    height: 100%;
                    font-size: 20px;
                    width: 35px;
                }
            }
        }

        &-hero {
            margin-top: 120px;
        }
    }
</style>
