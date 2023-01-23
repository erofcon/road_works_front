<template>
  <div v-if="isLoading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div v-else class="col xl:col-10 mx-auto my-5 container">
    <Card>
      <template #title>
        <span class="font-bold text-lg">Список контрольных выездов</span>
      </template>
      <template #content>
        <OneDetectionResult
            v-if="loadedData"
            v-for="data in loadedData"
            :data="data"
            class="fadeindown animation-duration-200 cursor-pointer"
            @click="$router.push('/detection_result_view/'+data.id)"
        />
      </template>
    </Card>
  </div>
</template>

<script>
import {Get} from "@/api/apiroutes";
import OneDetectionResult from "@/components/detectionresultlist/OneDetectionResult.vue";

export default {
  name: "DetectionsResultList",
  components: {OneDetectionResult},
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
    }).catch(reason => {
      this.$router.push('/login');
    })
  }
}
</script>

<style scoped>

</style>