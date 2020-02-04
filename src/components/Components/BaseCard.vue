<template>
    <div class="place">
        <img src="../../assets/profileImage.png" alt="" class="place__img">
        <div class="main">
            <div class="place__main">
                <span class="place__main-name">{{name}}</span>
                <span v-if="info" class="place__main-info">{{info}}</span>
                <span v-if="btn === ''" class="place__main-message">Написать сообщение</span>
                <button v-else class="place__main__btn">{{btn}}</button>
            </div>
            <span v-if="status" class="status">{{status}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseCard",
        props: {
            name: String,
            info: String,
            status: String,
            btn: String
        }
    }
</script>

<style lang="scss" scoped>
    .place {
        margin: 5px 0;
        padding: 5px 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        .main {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .status {
                margin-right: 25px;
            }
        }
        &__img {
            width: 120px;
            height: 80px;
            border-radius: 15%;
            margin-left: 2%;
            align-self: center;
        }
        &__main {
            display: flex;
            flex-direction: column;
            margin-left: 25px;
            &__btn {
                padding: 5px 0;
                margin-top: 10%;
                outline: none;
                border: 1px solid #2c3e50;
                border-radius: 3px;
                -webkit-transition: 0.2s;
                -moz-transition: 0.2s;
                -ms-transition: 0.2s;
                -o-transition: 0.2s;
                transition: 0.2s;
                &:hover {
                    background: #2c3e50;
                    color: #f1f1f1;
                    cursor: pointer;
                }
            }
            & span {
                padding: 5px;
            }
            &-name {

            }
            &-info {

            }
            &-message {
                & a{
                    text-decoration: none;
                }
            }
        }
    }
</style>