<template>

  <div class="surface-ground col m-0 p-0 mb-8">
    <HomeHeader class="fadeinup animation-duration-300"/>
    <div class="container">
      <ActualTask class="fadeindown animation-duration-300" />
      <TasksStatsCard/>
      <div class="grid flex justify-content-evenly">
        <MapShow/>
        <ChartView/>
      </div>
      <RelatedUsers/>
    </div>
  </div>
  <Footer/>
</template>

<script>
import TasksStatsCard from "@/components/homepage/TasksStatsCard.vue";
import HomeHeader from "@/components/homepage/HomeHeader";
import ActualTask from "@/components/homepage/ActualTask";
import RelatedUsers from "@/components/homepage/RelatedUsers";
import MapShow from "@/components/homepage/MapShow.vue";
import ChartView from "@/components/homepage/ChartView.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomePage",
  components: {Footer, ChartView, MapShow, RelatedUsers, ActualTask, HomeHeader, TasksStatsCard}
}
</script>

<style lang="scss" scoped>

:deep(.p-panel) {
  .p-panel-content {
    background: none;
  }
}

//:deep(.p-card) {
//  .p-card-body {
//    padding: 0;
//  }
//  .p-card-content {
//    padding: 0;
//  }
//}

</style>