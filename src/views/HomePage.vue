<template>

  <div class="surface-ground col m-0 p-0">

    <HomeHeader class="my-5"/>

    <div class="container">

      <ActualTask/>


      <TasksStatsCard/>

      <RelatedUsers/>

      <div class="grid">
        <div class="col-12 md:col-6 xl:col-4">
          <div class="surface-card shadow-2 border-round p-4">
            <div class="flex border-bottom-1 surface-border pb-4">
              <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/avatars/circle/avatar-f-1.png"
                   class="border-circle mr-3" style="width: 70px; height: 70px;">
              <div class="flex flex-column align-items-start">
                <span class="text-xl text-900 font-medium mb-1">
                  Lindsay Connor
                </span><span class="text-600 font-medium mb-2">Test Engineer</span><span
                  class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span></div>
            </div>
            <div class="flex justify-content-between pt-4">
              <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button"
                      aria-label="View"><!----><span class="pi pi-search p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">View</span><!----><span class="p-ink" role="presentation"
                                                                 style="height: 170px; width: 170px; top: -58px; left: 40.2px;"></span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div class="surface-card shadow-2 border-round p-4">
            <div class="flex border-bottom-1 surface-border pb-4">
              <img src="https://www.primefaces.org/sakai-vue/demo/images/blocks/hero/hero-1.png"
                   class="mr-3 border-circle" style="width: 70px; height: 70px;" alt="">
              <div class="flex flex-column align-items-start">
                <span class="text-xl text-900 font-medium mb-1">
                  Lindsay Connor
                </span><span class="text-600 font-medium mb-2">Test Engineer</span><span
                  class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span></div>
            </div>
            <div class="flex justify-content-between pt-4">
              <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button"
                      aria-label="View"><!----><span class="pi pi-search p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">View</span><!----><span class="p-ink" role="presentation"
                                                                 style="height: 170px; width: 170px; top: -58px; left: 40.2px;"></span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 md:col-6 xl:col-4">
          <div class="surface-card shadow-2 border-round p-4">
            <div class="flex border-bottom-1 surface-border pb-4">
              <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/avatars/circle/avatar-m-1.png"
                   class="mr-3 border-circle" style="width: 70px; height: 70px;">
              <div class="flex flex-column align-items-start">
                <span class="text-xl text-900 font-medium mb-1">
                  Lindsay Connor
                </span><span class="text-600 font-medium mb-2">Test Engineer</span><span
                  class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Editor</span></div>
            </div>
            <div class="flex justify-content-between pt-4">
              <button class="p-button p-component p-button-outlined p-button-secondary w-6 mr-2" type="button"
                      aria-label="View"><!----><span class="pi pi-search p-button-icon p-button-icon-left"></span><span
                  class="p-button-label">View</span><!----><span class="p-ink" role="presentation"
                                                                 style="height: 170px; width: 170px; top: -58px; left: 40.2px;"></span>
              </button>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>

</template>

<script>
import TasksStatsCard from "@/components/homepage/TasksStatsCard.vue";
import HomeHeader from "@/components/homepage/HomeHeader";
import ActualTask from "@/components/homepage/ActualTask";
import RelatedUsers from "@/components/homepage/RelatedUsers";

export default {
  name: "HomePage",
  components: {RelatedUsers, ActualTask, HomeHeader, TasksStatsCard}
}
</script>

<style scoped>

</style>