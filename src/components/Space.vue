<template>
  <div>
    <h1>Space</h1>
    <div v-for="astronaut in astronauts" :key="astronaut.name">
      <h1>{{ astronaut.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Space",
  created() {
    // Get Astronauts
    this.$store.dispatch('fetchAstronauts')

    // Start floating animations
  },
  computed: {
    astronauts() {
      return this.$store.state.astronauts;
    }
  }
}
</script>

<style scoped>

</style>
