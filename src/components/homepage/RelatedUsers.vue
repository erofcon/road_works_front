<template>
  <Panel class="my-8">
    <template #header>
      <span class="head-content">Связаные пользователи</span>
    </template>
    <template #default>
      <div class="grid py-5">
        <div class="col-12 md:col-6 xl:col-4">
          <div class="surface-card shadow-2 border-round p-4">
            <div class="flex border-bottom-1 surface-border pb-4">
              <img src="https://www.primefaces.org/primeblocks-vue/images/blocks/avatars/circle/avatar-f-1.png"
                   class="border-circle mr-3" style="width: 70px; height: 70px;" alt="logo">
              <div class="flex flex-column align-items-start">
                <span class="text-xl text-900 font-medium mb-1">
                  Lindsay Connor
                </span><span class="text-600 font-medium mb-2">lindsay</span><span
                  class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">испольнитель</span></div>
            </div>
            <div class="flex justify-content-between pt-4">
              <button class="p-button p-component p-button-outlined p-button-secondary p-button-sm w-6 mr-2"
                      type="button"
                      aria-label="View"><!----><span class="pi pi-search p-button-icon p-button-icon-left"></span><span
                  class="p-button-label ">Открыть</span><!----><span class="p-ink" role="presentation"
                                                                     style="height: 170px; width: 170px; top: -58px; left: 40.2px;"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>


  </Panel>

</template>

<script>
export default {
  name: "RelatedUsers"
}
</script>

<style scoped>
.head-content {
  font-weight: 700;
}
</style>