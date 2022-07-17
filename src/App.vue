<template>
  <visual-cluster />
</template>

<script>
import VisualCluster from './components/visual-cluster.vue'

export default {
  name: 'App',
  components: {
    'visual-cluster': VisualCluster
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
ul {
  list-style: none;
}
</style>
