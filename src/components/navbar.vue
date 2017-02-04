<template>
    <nav class="nav has-shadow">
        <div class="container">
            <div class="nav-left">
                <a class="nav-item">
                    <img src="../assets/logo.png" alt="TO-Do logo"/>
                </a>
                <router-link 
                    to="/" 
                    class="nav-item is-tab is-hidden-mobile is-active">
                    Home
                </router-link>
                <a class="nav-item is-tab is-hidden-mobile">Schedule</a>
                </div>
                <span 
                    v-on:click="toggleNav" 
                    class="nav-toggle" 
                    v-bind:class="{'is-active': navBarOpen}">
                <span></span>
                <span></span>
                <span></span>
                </span>


                <div 
                    class="nav-right nav-menu" 
                    v-bind:class="{'is-active': navBarOpen}">
                <router-link 
                    class="nav-item is-tab is-hidden-tablet is-active"
                    to="/">
                        Home
                </router-link>
                <a class="nav-item is-tab is-hidden-tablet">
                    Features
                </a>
                <a class="nav-item is-tab is-hidden-tablet">
                    Pricing
                </a>
                <a class="nav-item is-tab is-hidden-tablet">
                    About
                </a>
                <a class="nav-item is-tab">
                    <i class="fa fa-google fa-fw"></i>
                    Profile
                </a>
                <a class="nav-item is-tab">
                    Log out
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        data: function getNavBarData() {
            return {
                navBarOpen: false,
            };
        },
        methods: {
            toggleNav: function toggleNavBar() {
                this.navBarOpen = !this.navBarOpen;
            },
        },
    };
</script>

<style>
    div.navbar{
        margin-bottom: 20px;
    }

    .nav-item {
        font-size: 23px;
    }
</style>
