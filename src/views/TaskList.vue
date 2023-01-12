<template>
  <div class="col-6 mx-auto my-5">
    <TaskListHead/>

    <Card class="my-5 shadow-3">
      <template #content>
        dssd
      </template>
    </Card>


  </div>
</template>

<script>
import TaskListHead from "@/components/tasklist/TaskListHead";

export default {
  name: "TaskList",
  components: {TaskListHead}
}
</script>

<style scoped>

</style>