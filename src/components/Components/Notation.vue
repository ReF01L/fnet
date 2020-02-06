<template>
    <div class="notations">
        <div class="notation">
            <div class="notation__title">
                <span class="notation__title-name">{{sender}}</span>
                <span class="notation__title-date">{{date}}</span>
            </div>
            <div class="notation__body">
                <div v-if="image !== ''" class="notation__body__img">
                    <span class="notation__body__img-tag">&lt;img&gt;</span>
                    <img class="notation__body__img-img" :src="require('../../assets/' + image)"/>
                    <span class="notation__body__img-tag">&lt;/img&gt;</span>
                </div>
                <div v-if="text !== ''" class="notation__body__text">
                    <span class="notation__body__text-tag">&lt;text&gt;</span>
                    <span class="notation__body__text-text">{{text}}</span>
                    <span class="notation__body__text-tag">&lt;/text&gt;</span>
                </div>
                <div class="notation__coop">
                    <span class="notation__coop-views">&lt;views:{{views}}&gt;</span>
                    <span @click="do_like" class="notation__coop-likes">&lt;likes:{{likes}}&gt;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notation",
        props: {
            sender: String,
            text: String,
            image: String,
            likes: Number,
            date: String,
            views: Number,
            id: Number
        },
        data() {
            return {
                like: false
            }
        },
        methods: {
            do_like() {
                if (!this.like) {
                    this.like++;
                    window.axios
                        .post(`http://20.188.3.202:5000/api/likes/post${this.id}`, {token: localStorage.getItem('token')})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notation {
        width: 60%;

        &__title {
            background: #484848;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #f1f1f1;
            min-height: 40px;
            border-radius: 30px 32px 0 0;

            & span {
                margin: auto 25px;
            }
        }

        &__body {
            background: #202020;
            color: #f1f1f1;
            border-radius: 0 0 30px 30px;

            &__img {
                display: flex;
                flex-direction: column;
                padding: 15px;

                &-tag {
                    align-self: flex-start;
                    color: #EA6A47;
                    text-transform: capitalize;
                    font-size: 24px;

                    &:last-child {
                        align-self: flex-end;
                    }
                }

                &-img {
                    margin: 25px;
                }
            }

            &__text {
                display: flex;
                flex-direction: column;
                padding: 15px;

                &-tag {
                    align-self: flex-start;
                    color: #4cb5f5;
                    text-transform: capitalize;
                    font-size: 24px;

                    &:last-child {
                        align-self: flex-end;
                    }
                }

                &-text {
                    margin: 25px;
                }
            }
        }

        &__coop {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;

            & span {
                padding: 15px;
                color: #B3C100;

                &:hover {
                    cursor: pointer;
                }

                &:last-child {
                    color: #DBAE58;
                }
            }
        }
    }

    @media (max-width: 1375px) {
        .notation {
            width: 100%;
        }
    }

    @media (max-width: 450px) {
        .notation {
            &__title {
                justify-content: space-around;

                & span {
                    margin: auto 5px;
                    font-size: 12px;
                }
            }

            &__body {
                &__img {
                    &-tag {
                        font-size: 20px;
                    }

                    &-img {
                        margin: 15px;
                    }
                }

                &__text {
                    padding: 15px;

                    &-tag {
                        font-size: 20px;
                    }

                    &-text {
                        margin: 15px;
                    }
                }
            }

            &__coop {
                padding-right: 5px;

                & span {
                    padding: 7px;
                }
            }
        }
    }
</style>