<template>
    <div class="feed">
        <CreateNoteForm />
        <Notation class="notation" v-for="notation in notations" :key="notation.id" :sender="notation.sender"
                  :text="notation.text" :image="notation.image !== ''"
                  :likes="notation.likes" :com="notation.likes" :share="notation.share"/>
    </div>
</template>

<script>
    import CreateNoteForm from "@/components/Components/CreateNoteForm";
    import Notation from "@/components/Components/Notation";

    export default {
        name: "Feed",
        components: {CreateNoteForm, Notation},
        data() {
            return {
                notations: [
                    {sender: 'Alexandr', text: 'AlexandrText', image: '', likes: 0, com: 0, share: 0},
                    {sender: 'ReF0iL', text: 'ReF0iLText', image: 'dsaf', likes: 0, com: 0, share: 0},
                    {sender: 'Maksim', text: 'MaxText', image: 'dsaf', likes: 0, com: 0, share: 0}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .feed {
        width: 100%;
        height: 100%;
        background: var(--main-bg-color);
        padding-top: 2%;
    }
    .notation {
        margin-left: 45px;
        padding-bottom: 20px;
        margin-top: 80px;
        display: flex;
        min-height: 120px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: 2px solid #2c3e50;
        border-bottom: 2px solid #2c3e50;
        width: 90%;

        &:first-child {
            margin-top: 0;
        }
    }
</style>