<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

* {
  font-family: 'Poppins', sans-serif;
  border-radius: 0;
}

body {
  background-color: #f5f3ef;
}
  
</style>