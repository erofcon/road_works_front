<template>
  <div v-if="oneSelectImage!=null" class="col-12 col-md-4 detail-show" @mouseleave="leave">
    <div class="card m-0 p-0 position-sticky">
      <div class="card-header">
        <span>2022-10-23 16.54</span>
      </div>
      <div class="card-body m-0 p-0 position-sticky">
        <div>
          <VueZoomer ref="zoom"
                     :zooming-elastic="false"
                     :zoomed="true"
          >
            <img :src="baseUrl+'/'+oneSelectImage.url" class="img-fluid canvas-image">
          </VueZoomer>
        </div>
        <div class="card-footer">
          <p>широта: <span class="text-primary">43.12321321</span></p>
          <p>долгота: <span class="text-primary">44.63253219</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import VueZoomer from "vue-zoomer/src/vue-zoomer";

export default {
  name: "DetailImageShow",
  props: {
    baseUrl: {
      type: String,
      required: true,
    }
  },
  components: {
    VueZoomer,
  },
  methods: {
    leave() {
      this.$refs.zoom.reset();
    },
  },
  computed: {
    ...mapState({
      oneSelectImage: state => state.detectionResult.oneSelectImage,
    }),
  },
}
</script>

<style scoped>

</style>