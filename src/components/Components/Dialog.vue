<template>
    <div class="m">
        <div class="message">
            <div class="message__title">
                <span class="message__title-username">{{companion}}</span>
                <span v-show="count > 0" class="message__title-count">{{count}}</span>
            </div>
            <div class="message__body">
                <div v-if="image !== ''" class="message__body__img">
                    <img :src="require('../../assets/' + image)" alt="" class="message__body__img-img circle-img">
                </div>
                <div v-else class="message__body__img-circle" :style="{'background': color}">nullptr</div>
                <div class="message__body__text">
                    <span class="message__body__text-tag">/*</span>
                    <div class="message__body__text__body">
                        <span class="message__body__text__body-text">{{text.length > 50 ? text.substring(0, 50) + '&lt;...&gt;' : text}}</span>
                        <span class="message__body__text__body-date">&lt;{{time}}&gt;</span>
                    </div>
                    <span class="message__body__text-tag">*/</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            companion: String,
            text: String,
            image: String,
            time: String,
            count: Number
        },
        data() {
            return {
                color: ''
            }
        },
        mounted() {
            if (this.image === '') {
                let r = Math.floor(Math.random() * (256)),
                    g = Math.floor(Math.random() * (256)),
                    b = Math.floor(Math.random() * (256));
                this.color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .m {
        & .message {
            width: 80%;
            &__title {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: #484848;
                border-radius: 30px 30px 0 0;

                & span {
                    margin: 0 10px;
                    color: #f1f1f1;
                    padding: 10px;
                    text-transform: uppercase;
                    font-size: 18px;

                    &:first-child {
                        margin-right: auto;
                    }
                }
            }
            &__body {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: #202020;
                border-radius: 0 0 32px 32px;
                &__img {
                    margin: 20px;
                    &-circle {
                        margin: 20px;
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    &-img {
                        width: 120px;
                        height: 120px;
                    }
                }
                &__text {
                    position: relative;
                    background: #A5D8DD;
                    border-radius: 6px 6px 6px 32px;
                    width: calc(100% - 180px);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    &-tag {
                        padding: 5px;
                        font-size: 24px;
                        color: rgba(0, 0, 0, 0.5);

                        &:last-child {
                            align-self: flex-end;
                        }
                    }

                    &__body {
                        &-text {
                            margin-left: 35px;
                            color: #20283E;
                            font-size: 18px;
                        }

                        &-date {
                            color: rgba(0, 0, 0, 0.5);
                            font-size: 10px;
                            position: absolute;
                            top: 5px;
                            right: 5px;
                        }
                    }
                }
            }
        }
    }
</style>