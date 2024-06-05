<template>
  <Navbar/>
  <footers/>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
import footers from '@/components/footers.vue'
export default {
 
  components : {
    Navbar,
    footers
  }
}

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #f4e1d2!important;
}

</style>
