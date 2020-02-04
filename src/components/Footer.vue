<template>
    <footer class="footer">
        <ul class="list">
            <li class="list-item" v-on:click="goToProfile">
                <span class="content">Main Page</span>
                <i class="fa fa-home" aria-hidden="true"></i>
            </li>
            <li class="list-item" v-on:click="goToFeed">
                <span class="content">Feeds</span>
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
            </li>
            <li class="list-item" v-on:click="goToMessages">
                <span class="content">Messages</span>
                <i class="fa fa-comments" aria-hidden="true"></i>
            </li>
            <li class="list-item" v-on:click="goToFriends">
                <span class="content">Friends</span>
                <i class="fa fa-user" aria-hidden="true"></i>
            </li>
            <li class="list-item" v-on:click="goToGroups">
                <span class="content">Groups</span>
                <i class="fa fa-users" aria-hidden="true"></i>
            </li>
            <li class="list-item" v-on:click="goToPhoto">
                <span class="content">Photos</span>
                <i class="fa fa-camera" aria-hidden="true"></i>
            </li>
        </ul>
    </footer>
</template>

<script>
    import Profile from "@/components/Pages/Profile";
    import Feed from "@/components/Pages/Feed";
    import Messages from "@/components/Pages/Messages";
    import Friends from "@/components/Pages/Friends";
    import Groups from "@/components/Pages/Groups";
    import Photo from "@/components/Pages/Photo";

    export default {
        name: 'Footer',
        methods: {
            goToProfile() {
                if (this.$router.currentRoute.name !== Profile.name)
                    this.$router.push({name: Profile.name})
            },
            goToFeed() {
                if (this.$router.currentRoute.name !== Feed.name)
                    this.$router.push({name: Feed.name})
            },
            goToMessages() {
                if (this.$router.currentRoute.name !== Messages.name)
                    this.$router.push({name: Messages.name})
            },
            goToFriends() {
                if (this.$router.currentRoute.name !== Friends.name)
                    this.$router.push({name: Friends.name})
            },
            goToGroups() {
                if (this.$router.currentRoute.name !== Groups.name)
                    this.$router.push({name: Groups.name})
            },
            goToPhoto() {
                if (this.$router.currentRoute.name !== Photo.name)
                    this.$router.push({name: Photo.name})
            },
        }
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer ul {
        display: flex;
    }

    .footer li {
        font-size: 25px;
        justify-content: flex-end;
        list-style: none;
        padding: 15px;
        display: flex;
        flex-direction: column;
    }

    .footer li:hover .content, li {
        opacity: 1;
        cursor: pointer;
    }

    .footer .content {
        opacity: 0;
        font-size: 15px;
        margin-bottom: 5px;
    }
</style>
