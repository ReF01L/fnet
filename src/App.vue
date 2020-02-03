<template>
    <div id="app">
        <router-view></router-view>
        <Footer v-if="this.$router.currentRoute.name !== 'Login' && this.$router.currentRoute.name !== 'Auth' && this.$router.currentRoute.name !== 'RememberPassword'" />
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    export default {
        name: 'App',
        components: {Footer}
    }
</script>

<style>
    @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    * {
        margin: 0;
        padding: 0;

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

    button:focus {
        outline: none;
    }

    input:focus {
        outline: none;
    }
</style>
