<template>


  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="text-center">
      <span class="text-pink-500 font-bold text-2xl inline-block px-3">404</span>
    </div>
    <div class="mt-6 mb-5 font-bold text-6xl text-900 text-center">Page Not Found</div>
    <p class="text-700 text-3xl mt-0 mb-6 text-center">Sorry, we couldn't find the page.</p>
    <div class="text-center">
      <Button @click="$router.push('/')" class="p-button-sm" icon="pi pi-arrow-left" label="назад домой"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
}
</script>

<style scoped>

/*.text-center {*/
/*  background: radial-gradient(50% 109138% at 50% 50%, rgba(233, 30, 99, 0.1) 0%, rgba(254, 244, 247, 0) 100%);*/
/*}*/

</style>