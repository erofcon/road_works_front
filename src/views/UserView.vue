<template>
  <div class="container mx-auto">
    <div class="row py-5 mx-auto">
      <div class="col-4 d-flex justify-content-end">
        <div>
          <div>
            <img class="rounded-circle img-fluid" width="260"
                 src="https://avatars.githubusercontent.com/u/104511593?s=16&amp;v=4">
          </div>
          <div>
            <h3 class="p-0 m-0">Ivanov Ivan</h3>
            <p class="text-muted fs-5 p-0 m-0">@erofcon</p>
          </div>
          <div>
            <div class="d-flex">
              <i class="bi bi-buildings me-2"></i>
              <p class="p-0 m-0">МинТранс КБР</p>
            </div>
            <div class="d-flex">
              <i class="bi bi-telephone me-2"></i>
              <p class="p-0 m-0">89674167114</p>
            </div>
            <div class="d-flex">
              <i class="bi bi-envelope me-2"></i>
              <p class="p-0 m-0">tamirlanshereuzhev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
              Обзор
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
              Задачи
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <OverFlow/>
          <TasksList/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OverFlow from "@/components/userview/OverFlow";
import TasksList from "@/components/userview/TasksList";

export default {
  name: "UserView",
  components: {
    OverFlow,
    TasksList,
  },


}
</script>

<style scoped>


</style>


