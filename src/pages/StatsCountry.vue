<template>
  <div class="hero is-fullheight">
    <navbar></navbar>
    <br><br>
    <br><br>
    <h3 class="has-text-centered is-size-2">Situazione nelle regioni</h3>
    <tablestats></tablestats>
    <foot></foot>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import TableStats from '../components/TableStats.vue'

  export default {
    name: 'StatsCountry',
    components: {
      'navbar': Navbar,
      'tablestats': TableStats,
      'foot': Footer
    }
  }
</script>