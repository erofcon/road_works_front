<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>

  <div v-else class="col container">
    <div class="grid">
      <ImageGrid :base-url="baseUrl"/>
      <DetailImage :base-url="baseUrl"/>
    </div>
  </div>
  <DetectionResultControl :base-url="baseUrl"/>

</template>

<script>
import {defaultApiInstance} from "@/api";
import {mapState} from "vuex";
import ImageGrid from "@/components/detectionresultview/ImageGrid";
import DetailImage from "@/components/detectionresultview/DetailImage";
import DetectionResultControl from "@/components/detectionresultview/DetectionResultControl";

export default {
  name: "DetectionResultView",
  components: {
    DetectionResultControl,
    DetailImage,
    ImageGrid
  },

  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
    }
  },
  methods: {
    loadingPage() {
      this.$store.dispatch('detectionResult/getDetectionImages', {id: this.$route.params.id});
      this.$store.dispatch('createTask/getRelatedGroups');
      if (this.selectedGroupId) {
        this.$store.dispatch('createTask/getRelatedExecutorUsers', this.selectedGroupId);
      }
      this.loading = false;
    },
  },
  mounted() {
    if (!this.currentUser.user.is_creator) {
      this.$router.push({name: 'pageNotFound'});
    } else {
      this.loadingPage();
    }

  },
  unmounted() {
    this.$store.commit('createTask/resetStore');
    this.$store.commit('detectionResult/resetStore');
  },
  computed: {
    ...mapState({
      selectedImage: state => state.detectionResult.selectedImage,
      selectedGroupId: state => state.createTask.selectedGroupId,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

</style>