<template>
    <div class="messages">
        <div class="search">
            <input type="text" placeholder="<find/>">
        </div>
        <div class="messages__box">
            <div class="dialogs">
                <Dialog class="dialog" v-for="dialog in sortedMessages" :key="dialog.id"
                        :companion="dialog.companion"
                        :text="dialog.text"
                        :image="dialog.image"
                        :time="dialog.time"
                        :count="dialog.count"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Dialog from "@/components/Components/Dialog";

    export default {
        name: "Messages",
        components: {Dialog},
        data() {
            return {
                dialogs: [
                    {
                        companion: 'Alexandr',
                        text: 'Привет, хотел у тебя спросить. Как ты делал дз по линалу, геометрии и плюсам?',
                        image: 'profileImage.png',
                        time: '16:40 { 1 feb 2020 }',
                        count: 1
                    },
                    {
                        companion: 'Ilya',
                        text: 'Привет',
                        image: '',
                        time: '16:40 { 1 feb 2020 }',
                        count: 1
                    },
                ]
            }
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
    .messages {
        padding-top: 25px;
        min-height: 100vh;
        background-color: var(--main-bg-color);
        width: 100%;
        display: flex;
        flex-direction: column;
        .search {
            background: #CED2CC;
            border-radius: 20px;
            width: 70%;
            align-self: center;
            & input {
                border-radius: 10px;
                width: 95%;
                padding: 10px;
                margin: 10px auto;
            }
        }
        &__box {
            display: flex;
            justify-content: center;
            .dialogs {
                margin: 0 25px;
                width: 100%;
                .dialog {
                    margin: 25px 0 15px 0;
                    padding: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
    }
    @media (max-width: 1120px) {
        .messages {
            padding-top: 10px;
            .search {
                width: 100%;
            }
            &__box {
                .dialogs {
                    .dialog {
                        padding: 10px;
                    }
                }
            }
        }
    }


</style>