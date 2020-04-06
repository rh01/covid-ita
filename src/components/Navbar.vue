<template>
    <nav class="navbar is-fixed-top has-navbar-fixed-top" role="navigation" aria-label="main navigation" :fixed-top="true">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://github.com/pcm-dpc/COVID-19">
                <img src="../assets/logo.png">
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="drawer" @click="showNav = !showNav" 
               :class="{ 'is-active': showNav }">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="drawer" class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">
                <router-link a class="navbar-item style-navbar-link" to="/">
                    Home
                </router-link>
                <router-link class="navbar-item style-navbar-link" to="/stats">
                    Statistiche per regione
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data: function() {
            return {
                showNav: false
            }
        }
    }
</script>
