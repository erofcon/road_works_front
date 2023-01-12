<template>
  <div v-if="isLoading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div class="mt-5">
    <div v-for="data in loadedData" class="col-5 mx-auto my-4 border-round border-1 border-gray-100 shadow-2">
      <div class="p-2 flex align-items-center justify-content-between">
        <div>
          <span class="d-block mb-1 fw-semibold">Контрольный выезд на
              <span
                  class="text-primary cursor-pointer hover:text-primary-600"
                  @click="$router.push('/detection_result_view/'+data.id)">
                {{ moment(new Date(data.create_datetime)).format('DD.MM.YYYY HH:mm') }}
            </span>
          </span>
        </div>
        <Button icon="pi pi-times-circle" class="p-button-rounded p-button-text p-button-sm p-button-danger"/>
      </div>
    </div>
  </div>
</template>

<script>
import {Get} from "@/api/apiroutes";
import moment from 'moment'

export default {
  name: "DetectionsResultList",
  data() {
    return {
      isLoading: true,
      loadedData: [],
      moment: moment,
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