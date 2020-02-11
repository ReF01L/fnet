<template>
    <div class="messages">
        <div class="search">
            <input type="text" placeholder="<find/>">
        </div>
        <div class="messages__box">
            <div class="dialogs">
                <Dialog class="dialog" v-for="(dialog, i) in dialogs" :key="dialog.id"
                        :companion="dialog.companion_name"
                        :text="dialog.text"
                        :time="dialog.time"
                        :image="''"
                        :companion_id="i"
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
                dialogs: []
            }
        },
        mounted() {
            window.axios
                .get(`http://20.188.3.202:5000/api/messages/dialogs?token=${localStorage.getItem('token')}`)
                .then(response => {
                    this.dialogs = response.data.dialogs;
                })
        },

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
                    margin: auto;
                    .dialog {
                        padding: 10px;
                    }
                }
            }
        }
    }
    @media (max-width: 440px) {
        .messages {
            &__box {
                .dialogs {
                    .dialog {
                        padding: 0;
                    }
                }
            }
        }
    }


</style>