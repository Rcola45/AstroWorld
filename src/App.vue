<template>
  <img alt="Vue logo" src="./assets/images/logo.png">
  <Space/>
</template>

<script>
import Space from './components/Space.vue'

export default {
  name: 'App',
  components: {
    Space
  },
  created() {
    // API Call

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body {
  background-color: #111111;
}
</style>
