<template>
    <div class="message">
        <div class="message__img">
            <img :src="require('../../assets/profileImage.png')" alt="" class="message__img-img circle-img">
        </div>
        <div class="message__body">
            <div class="message__body-companion">{{companion}} |</div>
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
            message: String,
            date: String,
            companion: String
        }
    }
</script>

<style lang="scss" scoped>
    .message {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto 15px;
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
            &-companion {
                position: absolute;
                right: 23%;
                top: 5px;
                font-size: 10px;
            }
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
    @media (max-width: 830px) {
        .message {
            &__img {
                margin: auto 5px;
                &-img {
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }
</style>