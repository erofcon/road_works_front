<template>
  <div class="container-fluid">
    <div class="row m-3">
      <div class="col collapse d-xl-block">
        <SideBar/>
      </div>
      <div class="col-xl-7 col-lg-9">
        <ActualTask/>
        <RelatedUsers/>
        <DownloadApp/>

      </div>
      <div class="col-lg-3">
        <TasksStatus/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/welcomepage/SideBar.vue";
import TasksStatus from "@/components/welcomepage/TasksStatus.vue";
import ActualTask from "@/components/welcomepage/ActualTask.vue";
import DownloadApp from "@/components/welcomepage/DownloadApp.vue";
import RelatedUsers from "@/components/welcomepage/RelatedUsers.vue";

export default {
  name: "WelcomePage",
  components: {
    DownloadApp,
    TasksStatus,
    ActualTask,
    RelatedUsers,
    SideBar,
  }
}
</script>

<style scoped>


</style>