<template>
  <Panel class="my-8">
    <template #header>
      <span class="head-content">Статистика</span>
    </template>
    <template #default>
      <div class="py-5">
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-500 font-medium mb-3">Текущие задачи</span>
                  <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                     style="width:2.5rem;height:2.5rem">
                  <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
              </div>
              <span class="text-green-500 font-medium">24 </span>
              <span class="text-500">за последние 3 дня</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-500 font-medium mb-3">Выполненые задачи</span>
                  <div class="text-900 font-medium text-xl">100</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-orange-100 border-round"
                     style="width:2.5rem;height:2.5rem">
                  <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                </div>
              </div>
              <span class="text-green-500 font-medium">52 </span>
              <span class="text-500">за последние 3 дня</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-500 font-medium mb-3">Просроченные задачи</span>
                  <div class="text-900 font-medium text-xl">28441</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                     style="width:2.5rem;height:2.5rem">
                  <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span class="text-green-500 font-medium">520  </span>
              <span class="text-500">за последние 3 дня</span>
            </div>
          </div>
          <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
              <div class="flex justify-content-between mb-3">
                <div>
                  <span class="block text-500 font-medium mb-3">Все задачи</span>
                  <div class="text-900 font-medium text-xl">152</div>
                </div>
                <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                     style="width:2.5rem;height:2.5rem">
                  <i class="pi pi-comment text-purple-500 text-xl"></i>
                </div>
              </div>
              <span class="text-green-500 font-medium">85 </span>
              <span class="text-500">за последние 3 дня</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Panel>
</template>

<script>
export default {
  name: "TasksStatsCard"
}
</script>

<style scoped>
.head-content {
  font-weight: 700;
}
</style>