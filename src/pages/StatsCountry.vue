<template>
  <div class="hero is-fullheight">
    <navbar></navbar>
    <h3 class="has-text-centered is-size-2">Monitoraggio della situazione nelle regioni</h3>
    <foot></foot>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'StatsCountry',
    components: {
      'navbar': Navbar,
      'foot': Footer
    }
  }
</script>