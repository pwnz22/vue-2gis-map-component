<template>
  <div>
    <div id="2GisMap" :style="styles"></div>
  </div>
</template>

<script>
  import gMap from '2gis-maps'

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
          return {width: '500px', height: '400px'}
        }
      }
    },
    methods: {
      init() {
        let map
        gMap.then(() => {
          map = DG.map('2GisMap', {
            'center': this.center,
            'zoom': this.zoom
          });
          DG.marker(this.marker).addTo(map)
        })
      }
    },
    created() {
      this.init()
    }
  }
</script>
