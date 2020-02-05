<template>
    <div class="message">
        <div class="message__img">
            <img :src="require('../../assets/' + img)" alt="" class="message__img-img circle-img">
        </div>
        <div class="message__body">
            <div class="message__body-date">{{date}}</div>
            <span class="message__body-tag">/*</span>
            <div class="message__body-message">{{message}}</div>
            <span class="message__body-tag">*/</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            img: String,
            message: String,
            date: String
        }
    }
</script>

<style lang="scss" scoped>
    .message {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 15px auto;
        &__img {
            margin: 0 30px auto 0;
            display: flex;
            align-items: flex-end;
            &-img {
                width: 100px;
                height: 100px;
            }
        }
        &__body {
            background: #A5D8DD;
            border-radius: 6px 6px 6px 32px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            position: relative;
            &-date {
                position: absolute;
                right: 10px;
                top: 5px;
                font-size: 10px;
            }
            &-tag {
                padding: 5px;
                &:last-child {
                    align-self: flex-end;
                }
            }
            &-message {
                margin: auto 20px;
                max-width: 100%;
                word-break: break-all;
                text-align: left;
            }
        }
    }
</style>