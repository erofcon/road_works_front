<template>
  <div class="container">
    <div v-if="isLoading" class="d-flex justify-content-center mt-5">
      <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="loadedData.length>0">
      <div v-for="data in loadedData">
        <div class="col-6 mx-auto my-4">
          <DetectionComponent :data="data"/>
        </div>

      </div>
    </div>

    <!--    <div class="col-5 mx-auto my-4">-->
    <!--      <DetectionComponent/>-->
    <!--    </div>-->
  </div>
</template>

<script>
import {Get} from "@/api/apiroutes";

import DetectionComponent from "@/components/detectionpage/DetectionComponent";

export default {
  name: "DetectionsPage",
  components: {DetectionComponent},
  data() {
    return {
      isLoading: true,
      loadedData: [],
    }
  },
  mounted() {
    Get.getAllDetections().then(result => {
      this.loadedData = result.data;
      this.isLoading = false;
    })
  }
}
</script>

<style scoped>

</style>