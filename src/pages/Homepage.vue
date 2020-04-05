<template>
  <div>
    <navbar></navbar>
    <cardstats></cardstats>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import CardStats from '../components/CardStats.vue'

  export default {
    name: 'Homepage',
    components: {
      'navbar': Navbar,
      'cardstats': CardStats
    }
  }
</script>