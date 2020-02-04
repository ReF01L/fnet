<template>
    <div id="app">
        <div class="page">
            <div v-if="check()" class="page__left"></div>
            <router-view></router-view>
            <div v-if="check()" class="page__right"></div>
        </div>
        <Footer v-if="check()" />
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    export default {
        name: 'App',
        components: {Footer},
        methods: {
            check() {
                return this.$router.currentRoute.name !== 'Login' && this.$router.currentRoute.name !== 'Auth' && this.$router.currentRoute.name !== 'RememberPassword'
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');

    * {
        max-width: 100vw;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Comfortaa', cursive;
        --main-bg-color: #f1f1f1;
        --status-input-bg-color: #ea6a47;
        --status-btn-color: #ac3e31;
        --status-short-text-color: #7e909a;
        --status-full-text-color: #202020;
        --basic-btn-color: #0091d5;
        --basic-placeholder-color: #202020;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    button {
        border: none;
    }
    button:focus {
        outline: none;
    }
    input:focus {
        outline: none;
    }
    .circle-img {
        object-fit: cover;
        width: 507px;
        height: 507px;
        border-radius: 50%;
    }

    .page {
        display: flex;
        justify-content: center;
        &__left, &__right {
            width: 300px;
            background: linear-gradient(270deg, #F1F1F1 41.17%, rgba(241, 241, 241, 0) 100%, rgba(241, 241, 241, 0) 100%), #DADADA;;
        }
        &__right {
            background: linear-gradient(90deg, #F1F1F1 41.17%, rgba(241, 241, 241, 0) 100%, rgba(241, 241, 241, 0) 100%), #DADADA;;
        }
    }
</style>
