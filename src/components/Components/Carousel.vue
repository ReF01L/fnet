<template>
    <div class="wrapper">
        <div class="carousel"
             :style="{'margin-top': '-' + (153 * currentSlideIndex) + 'px' }">
            <CarouselItem v-for="item in carousel_data"
                          :key="item.id" :item_data="item"/>
        </div>
        <div class="carousel__btns">
            <button class="carousel__btns-btn" @click="prevSlide">&lt;&#11014;&gt;</button>
            <button class="carousel__btns-btn" @click="nextSlide">&lt;&#11015;&gt;</button>
        </div>
    </div>
</template>

<script>
    import CarouselItem from "@/components/Components/CarouselItem";

    export default {
        name: "Carousel",
        components: {CarouselItem},
        props: {
            carousel_data: {
                type: Array,
                default: () => []
            },
            interval: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                currentSlideIndex: 0,
                tmpInterval: 0
            }
        },
        methods: {
            prevSlide() {
                if (this.currentSlideIndex > 0)
                    this.currentSlideIndex--;
            },
            nextSlide() {
                if (this.currentSlideIndex >= this.carousel_data.length - 1)
                    this.currentSlideIndex = 0;
                else
                    this.currentSlideIndex++;
            }
        },
        mounted() {
            if (this.interval > 0) {
                let vm = this;
                setInterval(() => {
                    vm.tmpInterval = vm.interval;
                    vm.nextSlide();
                }, vm.interval)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        max-height: 150px;
        overflow: hidden;
        margin: 0 auto;

        & .carousel {
            display: flex;
            flex-direction: column;
            transition: 1.5s;
            &__btns {
                position: absolute;
                bottom: 25%;
                left: 0;
                width: 6%;
                display: flex;
                flex-direction: column;
                &-btn {
                    border-radius: 1.5rem;
                    background: #202020;
                    color: #ced2cc;
                    border: 1px solid #ced2cc;
                    font-weight: 400;
                    padding: 3px;
                    text-transform: capitalize;
                    font-size: 20px;
                    margin-bottom: 15px;
                    &:hover {
                        background: #ced2cc;
                        color: #202020;
                        cursor: pointer;
                    }
                    &:last-child {
                        background: #2c3e50;
                        color: #ced2cc;
                        left: 16%;
                        border: none;
                        &:hover {
                            background: #ced2cc;
                            color: #202020;
                        }
                    }
                }
            }
        }
    }
</style>