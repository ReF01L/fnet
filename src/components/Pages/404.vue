<template>
    <div class="main">
        <div class="main__img">
            <img src="../../assets/404.png" alt="" class="main__img-img">
        </div>
        <div class="main__message">
            <span>&lt;404/&gt;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Error"
    }
</script>

<style lang="scss" scoped>
    .main {
        min-height: calc(100vh + 60px);
        background-color: var(--main-bg-color);
        width: 100%;
        &__img {
            &-img {
            }
            margin: 20px;
        }
        &__message {
            & span {
                color: #484848;
                font-size: 144px;
            }
        }
    }
</style>