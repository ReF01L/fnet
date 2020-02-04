<template>
    <div class="feed">
        <CreateNoteForm />
        <Notation class="notation" v-for="notation in posts" :key="notation.id" :sender="notation.sender"
                  :text="notation.text" :image="notation.image"
                  :likes="notation.likes" :date="notation.date"/>
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
                posts: [
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'profileImage.png', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
                    {sender: 'Салушкин Дмитрий', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image: '', likes: 0, views: 1, date: '<16:40 { 1 feb 2020 }/>'},
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