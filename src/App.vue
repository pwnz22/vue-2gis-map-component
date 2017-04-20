<template>
  <div id="app">
    <t-gis-map
      :center="[54.98, 82.89]"
      :marker="[54.98, 82.89]"
      :styles="{width: 300 + 'px', height: 200 + 'px'}"
    ></t-gis-map>
  </div>
</template>

<script>
  import tGisMap from './components/tGisMap'

  export default {
    name: 'app',
    components: {
      tGisMap
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
