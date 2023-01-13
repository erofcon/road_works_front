<template>
  <div class="col-6 mx-auto my-5">
    <div class="grid">
      <div class="col-8">
        <TaskListHead/>
        <OneTaskComponent/>
        <OneTaskComponent/>
        <OneTaskComponent/>
        <OneTaskComponent/>
      </div>
      <div class="col">
        <TaskTypeChange/>
      </div>
    </div>

  </div>
</template>

<script>
import TaskListHead from "@/components/tasklist/TaskListHead";
import OneTaskComponent from "@/components/tasklist/OneTaskComponent";
import TaskTypeChange from "@/components/tasklist/TaskTypeChange";

export default {
  name: "TaskList",
  components: {TaskTypeChange, OneTaskComponent, TaskListHead}
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

::v-deep(.p-card) {
  .p-card-body {
    padding: 1rem;
  }

  .p-card-content {
    padding: 0;
  }
}
</style>
