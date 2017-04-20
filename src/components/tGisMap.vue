<template>
  <div>
    <div id="map" :style="styles"></div>
  </div>
</template>

<script>
  export default {
    props: {
      center: {
        type: Array,
        default: []
      },
      marker: {
        type: Array,
        default: []
      },
      zoom: {
        type: Number,
        default: 13
      },
      styles: {
        type: Object,
        default: () => {
            return {width: 500 + 'px', height: 400 + 'px'}
        }
      }
    },
    created() {
      let map
      this.$DG.then( () => {
        map = DG.map('map', {
          'center': this.center,
          'zoom': this.zoom
        });
        DG.marker(this.marker).addTo(map)
      })
    }
  }
</script>
