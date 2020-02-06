<template>
    <form class="search-form">
        <input class="search-form__input" type="text" :placeholder="place">
        <input class="search-form__submit" type="submit" value="Search">
    </form>
</template>

<script>
    export default {
        name: "SearchForm",
        props: {
            place: String
        }
    }
</script>

<style lang="scss" scoped>
    .search-form {
        & input {
            position: relative;
            display: inline-block;
            font-size: 20px;
            box-sizing: border-box;
            transition: .5s;
        }

        &__input {
            background-color: lightsalmon;
            width: 70%;
            height: 50px;
            border: none;
            outline: none;
            padding: 0 25px;
            border-radius: 25px 0 0 25px;
        }

        &__submit {
            position: relative;
            border-radius: 0 25px 25px 0;
            height: 50px;
            width: 30%;
            max-width: 150px;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: #ff9800;
            color: #fff;

            &:hover {
                background-color: #ff5722;
            }
        }
    }
</style>