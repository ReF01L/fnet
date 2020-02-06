<template>
    <div class="card">
        <div class="card__title">
            <span class="card__title-title">{{name}}</span>
            <span class="card__title-status">&lt;{{status !== '' ? 'online' : 'offline'}}/&gt;</span>
        </div>
        <div class="card__body">
            <div class="card__body__img">
                <img src="../../assets/profileImage.png" alt="" class="card__body__img-img circle-img">
            </div>
            <div class="card__body__interaction">
                <span>dialog->join()</span>
                <span>friend->detach()</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseCard",
        props: {
            name: String,
            status: String,
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        &__title {
            background: #484848;
            color: #f1f1f1;
            border-radius: 30px 30px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 40px;
            &-status {
                font-style: italic;
                color: #6AB187;
            }
            & span {
                margin: 0 20px;
            }
        }
        &__body {
            background: #202020;
            border-radius: 0 0 32px 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            &__img {
                margin: 20px auto;
                &-img {
                    width: 200px;
                    height: 200px;
                }
            }
            &__interaction {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px;
                & span {
                    display: block;
                    width: 100%;
                    color: #B3C100;
                    padding: 10px 15px;
                    background: #484848;
                    border-radius: 30px;
                    margin: 10px 0;
                    &:last-child {
                        color: #D32D41;
                    }
                }
            }
        }
    }
    @media (max-width: 1645px) {
        .card {
            &__title {
                & span {
                    margin: 0 20px;
                }
            }
            &__body {
                &__interaction {
                    padding: 60px;
                    & span {
                        display: block;
                        width: 100%;
                        color: #B3C100;
                        padding: 10px 15px;
                        background: #484848;
                        border-radius: 30px;
                        margin: 10px 0;
                        &:last-child {
                            color: #D32D41;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 510px) {
        .card {
            &__body {
                &__img {
                    &-img {
                        width: 120px;
                        height: 120px;
                        margin-left: 15%;
                    }
                }
            }
        }
    }
    @media (max-width: 373px) {
        .card {
            font-size: 12px;
            &__body {
                &__img {
                    display: none;
                    &-img {
                        width: 120px;
                        height: 120px;
                        margin-left: 15%;
                    }
                }
                &__interaction {
                    padding: 20px;
                    width: 100%;
                    & span {
                        width: 100%;
                        color: #B3C100;
                        padding: 10px 15px;
                        background: #484848;
                        border-radius: 30px;
                        margin: 10px auto;
                        &:last-child {
                            color: #D32D41;
                        }
                    }
                }
            }
        }
    }
</style>