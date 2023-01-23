<template>
  <div class="col-12 md:col-8 xl:col-6">
    <Card>
      <template #title>
        <div class="flex justify-content-between align-items-center">
          <span class="head-content font-bold text-lg">Отчет</span>
          <Button icon="pi pi-external-link font-bold"
                  class="p-button-rounded p-button-sm p-button-secondary p-button-text"/>
        </div>
      </template>
      <template #content>
        <div class="md:flex md:justify-content-around">
          <Chart type="pie" :data="chartData" :options="lightOptions"/>
          <ul class="mt-4 list-none p-0 mx-0">
            <li class="flex align-items-center pb-3">
              <span class="border-round bg-indigo-500 mr-3 flex-shrink-0" style="width: 1rem; height: 1rem;"></span>
              <span class="text-lg font-medium">Выполненые</span>
              <span class="text-600 text-lg font-medium ml-auto pl-2">152</span></li>
          </ul>
        </div>
      </template>
    </Card>
  </div>

</template>

<script>
export default {
  name: "ChartView",
  data() {
    return {
      chartData: {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"]
          }
        ]
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>