<template>
    <div id="app">
        <router-view></router-view>
        <!--    <RStartPage v-if="RWindowActive && !isLogin" @RWindowActive="swapWindow" @login="isLogin = true" />-->
        <!--    <LStartWindow v-if="!RWindowActive && !isLogin" @RWindowActive="swapWindow" @login="isLogin = true" />-->
        <!--    <div v-show="isLogin" class="mainPage">-->
        <!--      <main class="mainBlock">-->
        <!--        <LeftSide class="droppable" />-->
        <!--        <Middle msg="Welcome to Your Vue.js App"/>-->
        <!--        <RightSide class="droppable" />-->
        <!--      </main>-->
        <!--    </div>-->
    </div>
</template>

<script>
    // import Middle from '@/components/Middle.vue'
    // import Footer from '@/components/Footer.vue'
    // import RStartPage from '@/components/RStartPage'
    // import LStartWindow from '@/components/LStartWindow'
    // import LeftSide from '@/components/LeftSide'
    // import RightSide from '@/components/RightSide'

    export default {
        name: 'App',
        // data () {
        //   return {
        //     isLogin: false,
        //     page: 'main',
        //     RWindowActive: true,
        //     prName: 'IT Project',
        //     languages: []
        //   }
        // },
        // components: {
        // RightSide,
        // LeftSide,
        // LStartWindow,
        // RStartPage,
        // Footer,
        // Middle
        // },
        // methods: {
        //   swapWindow () {
        //     this.RWindowActive = !this.RWindowActive
        //   }
        // },
        // mounted: function () {
        //   [...document.querySelectorAll('.droppable')].forEach(function (item) {
        //     item.addEventListener('dragover', () => {
        //       event.preventDefault()
        //     })
        //     item.addEventListener('drop', function () {
        //       this.style.backgroundColor = 'lightcyan'
        //     })
        //   })
        // }
    }
</script>

<style>
    @import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    * {
        margin: 0;
        padding: 0;
        --main-bg-color: #ffeabd;
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
