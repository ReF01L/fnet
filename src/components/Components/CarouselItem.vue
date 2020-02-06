<template>
    <div class="CarouselItem">
        <img @click="friend" class="circle-img" :src="require('../../assets/profileImage.png')" alt="">
    </div>
</template>

<script>
    import Profile from "@/components/Pages/Profile";

    export default {
        name: "CarouselItem",
        props: {
            item_data: Object
        },
        data() {
            return {}
        },
        methods: {
            friend() {
                this.$router.replace({name: Profile.name, params: {id: this.item_data.friend_id.toString()}});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .circle-img {
        width: 15%;
        height: 150px;
        margin: 0 15px;
        &:hover {
            cursor: pointer;
        }
    }
    @media (max-width: 1500px) {
        .circle-img {
            height: 100px;
            margin: 25px 10px;
        }
    }
</style>