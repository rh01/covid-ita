<template>
    <nav class="navbar has-navbar-fixed-top is-spaced" role="navigation" aria-label="main navigation">
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
                <a class="navbar-item style-navbar-link">
                    Home
                </a>
                <a class="navbar-item style-navbar-link">
                    Statistiche per regione
                </a>
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
