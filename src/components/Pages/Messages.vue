<template>
    <div class="messages">
        <SearchForm :place="'Dialog'"/>
        <div class="messages__box">
            <div class="dialogs">
                <Dialog class="dialog" v-for="dialog in dialogs" :key="dialog.id"
                        :companion="dialog.companion"
                        :text="dialog.text"
                        :image="dialog.image"
                        :is-group="false"
                        :time="dialog.time"
                />
            </div>
            <div class="sort">
                <ul>
                    <li class="sort__type active">Все сообщения</li>
                    <li class="sort__type">Непрочитанные</li>
                    <li class="sort__type">Важные</li>
                    <li class="sort__type">Избранные</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Dialog from "@/components/Components/Dialog";
    import SearchForm from "@/components/Components/SearchForm";

    export default {
        name: "Messages",
        components: {SearchForm, Dialog},
        data() {
            return {
                dialogs: [
                    {
                        companion: 'Alexandr',
                        text: 'Привет, хотел у тебя спросить. Как ты делал дз по линалу, геометрии и плюсам?',
                        image: '',
                        time: '23:03'
                    },
                    {
                        companion: 'ReF0iL',
                        text: 'Привет',
                        image: '',
                        time: '23:03'
                    },
                    {
                        companion: 'Max',
                        text: 'Привет',
                        image: '',
                        time: '23:03'
                    },
                    {
                        companion: 'Ilya',
                        text: 'Привет',
                        image: '',
                        time: '23:03'
                    },
                    {
                        companion: 'Vlad',
                        text: 'Привет',
                        image: '',
                        time: '23:03'
                    }
                ]
            }
        },
        mounted() {
            document.querySelectorAll('.sort__type').forEach(elem => {
                elem.addEventListener('click', () => {
                    document.querySelector('.active').classList.remove('active');
                    elem.classList.add('active')
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    .search-form {
        width: 40%;
        align-self: center;
    }
    .messages {
        padding-top: 85px;
        min-height: calc(100vh - 85px);
        background-color: var(--main-bg-color);
        display: flex;
        flex-direction: column;
        &__box {
            display: flex;
            justify-content: center;
        }
    }

    .dialogs {
        padding-left: 5%;
        margin: 0 25px;
    }

    .dialog {
        margin: 25px auto 15px auto;
        padding: 15px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }

    .sort {
        margin: 25px 15px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        position: relative;
        width: 10%;
        max-height: 200px;
        & ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            & li.sort__type {
                padding: 7px 0;
                margin: 3px 0;
                width: 100%;
                list-style: none;
                &.active {
                    background-color: blue;

                    &:hover {
                        background-color: blue;
                    }
                }

                &:hover {
                    cursor: pointer;
                    background-color: lightblue;
                }
            }
        }
    }
</style>