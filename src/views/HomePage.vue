<template>

  <div class="surface-ground col m-0 p-0">

    <div class="relative p-6 overflow-hidden">
      <img
          src="https://www.primefaces.org/primeblocks-vue/images/blocks/hero/hero-2.jpg" alt="Image"
          class="absolute top-0 left-0 w-auto h-full block md:w-full">
      <div class="text-center my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">The Platform For</div>
        <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p class="mt-0 mb-4 line-height-3 text-center mx-auto text-white" style="max-width: 500px;">Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button class="p-button p-component" type="button" aria-label="Learn More"><!----><!----><span
            class="p-button-label">Learn More</span><!----><span class="p-ink" role="presentation"
                                                                 style="height: 128px; width: 128px; top: -34.4px; left: -5.78754px;"></span>
        </button>
        <p class="text-sm mt-4 mb-4 line-height-3 text-white">Available for MacOS, Web and Google accounts only</p>
        <div class="flex justify-content-center align-items-center"><a href="https://www.apple.com"
                                                                       class="text-white mr-3"><i
            class="pi pi-apple text-2xl"></i></a><a href="https://play.google.com" class="text-white mr-3"><i
            class="pi pi-android text-2xl"></i></a><a href="https://www.facebook.com" class="text-white"><i
            class="pi pi-facebook text-2xl"></i></a></div>
      </div>
    </div>


    <div class="container">

      <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
            <Button label="Live Demo" type="button" class="p-button-outlined"></Button>
          </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
          <img src="https://www.primefaces.org/sakai-vue/demo/images/blocks/hero/hero-1.png" alt="Image"
               class="md:ml-auto block md:h-29rem" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
      </div>


      <TasksStatsCard/>


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

export default {
  name: "HomePage",
  components: {TasksStatsCard}
}
</script>

<style scoped>

</style>