<template>
  <div id="app">
    <singUp/>
  </div>
</template>

<script>
import singUp from './components/singUp.vue'


export default {
  name: 'App',
  components: {
    singUp
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
