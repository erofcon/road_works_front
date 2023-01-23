<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>

  <Card v-else-if="task!==null" class="my-4 container">
    <template #content>
      <div class="grid">
        <div v-if="task.task_images.length>0" class="col-12 lg:col-6">
          <TaskImages :base-url="baseUrl"/>
        </div>
        <div class="col-12 lg:col-6 py-3 lg:pl-6">
          <AboutTask/>
        </div>
      </div>
    </template>
  </Card>



<!--  <div v-else-if="task!==null" class="col md:col-10 mx-auto mb-8 px-4 py-5">-->
<!--    <Panel v-if="task" :header="'Задача № '+task.id">-->
<!--      <div class="grid">-->
<!--        <TaskImages class="col-8 mx-auto" :base-url="baseUrl"/>-->
<!--        <AboutTask class="col ml-6"/>-->
<!--      </div>-->
<!--    </Panel>-->
<!--    <TaskAnswer :base-url="baseUrl" class="my-6"/>-->
<!--    <TaskControl/>-->
<!--  </div>-->
</template>

<script>
import {mapState} from "vuex";
import {defaultApiInstance} from "@/api";
import TaskImages from "@/components/taskview/TaskImages.vue";
import AboutTask from "@/components/taskview/AboutTask.vue";
import TaskAnswer from "@/components/taskview/TaskAnswer";

import moment from 'moment';
import TaskControl from "@/components/taskview/TaskControl";

export default {
  name: "TaskView",
  components: {TaskControl, AboutTask, TaskImages, TaskAnswer},
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      loading: true,
      moment: moment,
    }
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
      taskAnswers: state => state.task.taskAnswers,
    }),
  },
  mounted() {
    this.$store.dispatch('task/getTask', {taskId: this.$route.params.id});
    this.$store.dispatch('task/getTaskAnswers', {taskId: this.$route.params.id});
    this.loading = false;
  },
}
</script>

<style lang="scss" scoped>
:deep(.p-galleria) {
  .p-galleria-thumbnail-container {
    background: none;
  }
}

:deep(.p-galleria .p-galleria-thumbnail-container){
  .p-galleria-thumbnail-next{
    background-color: #3B82F6;
  }
  .p-galleria-thumbnail-prev{
    background-color: #3B82F6;
  }

  .p-galleria-thumbnail-next:hover{
    background-color: #3B82F6;

  }
  .p-galleria-thumbnail-prev:hover{
    background-color: #3B82F6;
  }
}

</style>