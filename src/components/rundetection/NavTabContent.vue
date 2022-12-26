<template>
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active text-start mt-5" id="home-tab-pane" role="tabpanel"
         aria-labelledby="home-tab"
         tabindex="0">
      <XmlDetectionUploadTab/>
    </div>
    <div class="tab-pane fade text-start mt-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="home-tab"
         tabindex="0">
      <TrackerUploadTab/>
    </div>
  </div>
</template>

<script>
import XmlDetectionUploadTab from "@/components/rundetection/XmlDetectionUploadTab";
import TrackerUploadTab from "@/components/rundetection/TrackerUploadTab";

export default {
  name: "NavTabContent",
  components: {TrackerUploadTab, XmlDetectionUploadTab},
}
</script>

<style scoped>

</style>