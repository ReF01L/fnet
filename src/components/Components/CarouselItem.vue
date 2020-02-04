<template>
    <div class="CarouselItem">
        <img v-for="item in item_data" :key="item.id" class="circle-img" :src="require('../../assets/' + item.img)" alt="">
    </div>
</template>

<script>
    export default {
        name: "CarouselItem",
        props: {
            item_data: {
                type: Array,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .circle-img {
        width: 150px;
        height: 150px;
        margin: 0 15px;
    }
</style>