<template>
  <div>
    <navbar></navbar>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Homepage',
    components: {
      'navbar': Navbar
    }
  }
</script>