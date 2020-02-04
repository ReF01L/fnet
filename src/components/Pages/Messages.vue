<template>
    <div class="messages">
        <SearchForm :place="'Dialog'"/>
        <div class="messages__box">
            <div class="dialogs">
                <Dialog class="dialog" v-for="dialog in sortedMessages" :key="dialog.id"
                        :companion="dialog.companion"
                        :text="dialog.text"
                        :image="dialog.image"
                        :is-group="false"
                        :time="dialog.time"
                        :count="dialog.count"
                />
            </div>
            <div class="sort">
                <ul>
                    <li data-active="1" class="sort__type active">Все сообщения</li>
                    <li data-active="2" class="sort__type">Непрочитанные</li>
                    <li data-active="3" class="sort__type">Важные</li>
                    <li data-active="4" class="sort__type">Избранные</li>
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
                active: 2,
                dialogs: [
                    {
                        companion: 'Alexandr',
                        text: 'Привет, хотел у тебя спросить. Как ты делал дз по линалу, геометрии и плюсам?',
                        image: '',
                        time: '25:52',
                        count: 0
                    },
                    {
                        companion: 'ReF0iL',
                        text: 'Привет',
                        image: '',
                        time: '22:11',
                        count: 3
                    },
                    {
                        companion: 'Max',
                        text: 'Привет',
                        image: '',
                        time: '20:19',
                        count: 6
                    },
                    {
                        companion: 'Ilya',
                        text: 'Привет',
                        image: '',
                        time: '23:00',
                        count: 1
                    },
                    {
                        companion: 'Vlad',
                        text: 'Привет',
                        image: '',
                        time: '23:01',
                        count: 0
                    }
                ]
            }
        },
        mounted() {
            document.querySelectorAll('.sort__type').forEach(elem => {
                elem.addEventListener('click', () => {
                    document.querySelector('.active').classList.remove('active');
                    elem.classList.add('active');
                    this.active = elem.getAttribute('data-active');
                })
            })
        },
        computed: {
            sortedMessages() {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.dialogs.sort((m1, m2) => {
                        return m1.time < m2.time ? 1 : -1;
                    }
                )
            }
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