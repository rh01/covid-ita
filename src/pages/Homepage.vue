<template>
  <div class="hero is-fullheight">
    <navbar></navbar>
    <h3 class="has-text-centered is-size-2">Monitoraggio della situazione in Italia</h3>
    <cardstats></cardstats>
    <foot></foot>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import CardStats from '../components/CardStats.vue'
  import Footer from '../components/Footer.vue'

  export default {
    name: 'Homepage',
    components: {
      'navbar': Navbar,
      'cardstats': CardStats,
      'foot': Footer
    }
  }
</script>