<template>
  <div class="col">
    <div class="row d-flex justify-content-center">
      <div v-for="img in images" :key=img.id class="col-auto mb-4">
        <div class="card">
          <div class="card-header">
            <div class="col text-end">
              <input type="checkbox" v-bind:value="img" v-model="checks" @input="selectImages(img, $event)"
                     ref="imagClick">
            </div>
          </div>
          <div class="card-body p-0 m-0">
            <div class="col m-0 p-0">
              <img
                  @click=selectOneImg(img)
                  :src="baseUrl+'/'+img.url"
                  class="img-fluid shadow-1-strong rounded-bottom m-0 p-0"
                  alt="Boat on Calm Water"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "ImagesGrid",
  data() {
    return {
      checks: null,
    }
  },
  props: {
    baseUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectImages(img, status) {
      this.$store.commit('detectionResult/setSelectedImage', {img: img, status: status.target.checked})
    },
    selectOneImg(img) {
      this.$store.commit('detectionResult/setSelectOneSelectImage', img)
    }
  },
  mounted() {
    this.checks = this.selectedImage;
  },
  computed: {
    ...mapState({
      images: state => state.detectionResult.detectionImages,
      selectedImage: state => state.detectionResult.selectedImage,
    }),
  },
}
</script>

<style scoped>
img:hover {
  cursor: pointer;
}
</style>