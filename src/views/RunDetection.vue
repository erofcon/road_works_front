<template>
  <div class="container">
    <div class="col-12 col-xl-8 py-5 mx-auto text-center">
      <HeadComponent/>
      <NavTabItems/>
      <NavTabContent/>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/rundetection/HeadComponent";
import NavTabItems from "@/components/rundetection/NavTabItems";
import NavTabContent from "@/components/rundetection/NavTabContent";

export default {
  name: "RunDetection",
  components: {NavTabItems, HeadComponent, NavTabContent}
}
</script>

<style scoped>
</style>