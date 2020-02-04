<template>
    <div class="create">
        <input type="text" class="create-input" placeholder="Создайте новую запись">
        <div class="create__btns">
            <button class="create-btn">
                <i class="fa fa-camera" aria-hidden="true"></i>
            </button>
            <button class="create-btn">
                <i class="fa fa-music" aria-hidden="true"></i>
            </button>
            <button class="create-btn">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateNoteForm"
    }
</script>

<style lang="scss" scoped>
    .create {
        display: flex;
        justify-content: center;
        position: relative;

        &__btns {
            position: absolute;
            bottom: 0;
            right: 30%;
            height: 100%;
            margin-right: 10px;
        }

        &-input {
            background-color: var(--status-input-bg-color);
            width: 40%;
            border: none;
            font-size: 16px;
            padding: 15px;
            border-radius: 10px;

            &::placeholder {
                color: var(--basic-placeholder-color);
                font-style: italic;
            }
        }

        &-btn {
            background-color: transparent;
            height: 100%;
            width: 40px;
            font-size: 25px;
            border: none;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>