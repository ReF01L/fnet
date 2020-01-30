<template>
    <div class="dialog">
        <img src="../../assets/profileImage.png" alt="" class="dialog__img">
        <div class="dialog-content">
            <div class="dialog-content-title">
                <span class="dialog-content-title__companion">{{companion}}</span>
                <span class="dialog-content-title__time">{{time}}</span>
            </div>
            <div class="dialog-content__message">
                <span class="dialog-content__message-text">{{text.length > 50 ? text.substring(0, 60) + ' ...' : text}}</span>
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
            isGroup: Boolean,
            time: String
        }
    }
</script>

<style lang="scss" scoped>
    .dialog {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        &__img {
            width: 60px;
            height: 50px;
            border-radius: 50%;
        }
        &-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 27vw;
            margin-left: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
            &-title {
                display: flex;
                justify-content: space-between;
                width: 100%;
                &__companion {

                }

                &__time {

                }
            }

            &__message {
                padding-top: 7px;
                align-self: flex-start;
            }
        }
    }
</style>