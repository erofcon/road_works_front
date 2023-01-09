<template>
  <div class="col-12 sm:col-10 md:col-8 mx-auto mb-8 px-4">
    <RunDetectionHeader class="mb-8"/>
    <TabMenu :model="items"/>
    <component v-bind:is="{...currentComponent}"/>
  </div>
</template>

<script>
import TrackerDetectionUpload from "@/components/rundetection/TrackerDetectionUpload.vue";
import XmlDetectionUpload from "@/components/rundetection/XmlDetectionUpload.vue";
import RunDetectionHeader from "@/components/rundetection/RunDetectionHeader.vue";

export default {
  name: "RunDetection",
  components: {RunDetectionHeader, XmlDetectionUpload, TrackerDetectionUpload},
  data() {
    return {
      items: [
        {
          label: 'Загрузка данных с мобильного приложения',
          command: () => this.changeComponent('XmlDetectionUpload'),
        },
        {
          label: 'Загрузка данных с видеорегистратора',
          command: () => this.changeComponent('TrackerDetectionUpload')
        },
      ],
      currentComponent: XmlDetectionUpload,
    }
  },
  methods: {
    changeComponent(value) {
      if (value === 'XmlDetectionUpload' && this.currentComponent.name !== 'XmlDetectionUpload') {
        this.currentComponent = XmlDetectionUpload
      } else if (value === 'TrackerDetectionUpload' && this.currentComponent.name !== 'TrackerDetectionUpload') {
        this.currentComponent = TrackerDetectionUpload
      }
    }
  },
}
</script>

<style scoped>

</style>