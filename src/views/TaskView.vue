<template>
  <div v-if="loading" class="flex align-items-center justify-content-center">
    <ProgressSpinner strokeWidth="3" animationDuration="1s" class="w-4rem"/>
  </div>
  <div v-else-if="task!==null" class="col md:col-10 mx-auto mb-8 px-4 py-5">
    <Panel v-if="task" :header="'Задача № '+task.id">
      <div class="grid">
        <TaskImages class="col-8 mx-auto" :base-url="baseUrl"/>
        <AboutTask class="col ml-6"/>
      </div>
    </Panel>
    <TaskAnswer :base-url="baseUrl" class="my-6"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {defaultApiInstance} from "@/api";
import TaskImages from "@/components/taskview/TaskImages.vue";
import AboutTask from "@/components/taskview/AboutTask.vue";
import TaskAnswer from "@/components/taskview/TaskAnswer";

import moment from 'moment';

export default {
  name: "TaskView",
  components: {AboutTask, TaskImages, TaskAnswer},
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

<style scoped>

</style>