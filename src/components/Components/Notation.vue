<template>
    <div class="notations">
        <h2 class="title">{{ sender }}:</h2>
        <div class="record">
            <div v-if="text" class="record-text">{{ text }}
            </div>
            <img v-if="image" class="record-image"
                 src="../../assets/profileImage.png" draggable="false" alt="Notation image">
        </div>
        <div class="panel">
            <div class="panel__pin">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span class="panel__pin-like">{{ likes }}</span>
            </div>
            <div class="panel__pin">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <span class="panel__pin-comments">{{ com }}</span>
            </div>
            <div class="panel__pin">
                <i class="fa fa-share" aria-hidden="true"></i>
                <span class="panel__pin-share">{{ share }}</span>
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
            image: Boolean,
            likes: Number,
            com: Number,
            share: Number
        }
    }
</script>

<style lang="scss" scoped>
    .notations {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title {
        margin: 15px;
        font-size: 20px;
    }
    .record {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 25px;
        min-width: 40%;
        &-text {
            width: 80%;
            margin-bottom: 15px;
        }
        &-image {
            min-width: 40px;
            max-width: 720px;
            width: 80%;
            max-height: 1080px;
            min-height: 20px;
        }
    }
    .panel {
        display: flex;
        font-size: 18px;

        &__pin {
            padding-right: 10px;
            margin-right: 10px;

            &:hover {
                cursor: pointer;
            }

            &-like {
                padding-left: 3px;
            }

            &-comments {
                padding-left: 3px;
            }

            &-share {
                padding-left: 3px;
            }
        }
    }
</style>