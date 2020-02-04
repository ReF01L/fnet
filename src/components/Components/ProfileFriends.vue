<template>
    <div class="social">
        <div class="social__title">
            <span class="social__title-title">social | online</span>
        </div>
        <div class="social__body">
            <span class="social__body-tag">&lt;HBox:Friends&gt;</span>
            <Carousel class="social__body-carousel" :carousel_data="sliderItems" :interval="20000"/>
            <span class="social__body-tag">&lt;/HBox:Friends&gt;</span>
        </div>
    </div>
</template>

<script>
    import Carousel from "@/components/Components/Carousel";

    export default {
        name: "ProfileFriends",
        components: {Carousel},
        data() {
            return {
                sliderItems: [
                    [
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                    ],
                    [
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                    ],
                    [
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                    ],
                    [
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                    ],
                    [
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                        {name: 'Салушкин Дмитрий', img: 'profileImage.png'},
                    ],
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .social {
        width: 70%;
        position: relative;

        &__title {
            width: 100%;
            background: #484848;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 40px;
            border-radius: 30px 30px 0 0;

            &-title {
                text-transform: uppercase;
                font-size: 24px;
                color: #f1f1f1;
                margin-left: 25px;
            }
        }

        &__body {
            display: flex;
            flex-direction: column;
            background: #202020;
            width: 100%;
            border-radius: 0 0 30px 30px;
            &-tag {
                color: #f1f1f1;
                padding: 15px;
                font-size: 24px;
                align-self: flex-start;

                &:last-child {
                    align-self: flex-end;
                }
            }

            &-carousel {
                width: 100%;
            }
        }
    }
</style>