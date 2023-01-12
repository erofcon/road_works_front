<template>
  <Toast/>
  <ConfirmDialog></ConfirmDialog>
  <div>
    <Button
        v-if="task.task_status==='on_execution' && (task.task_creator.id===currentUser.user.id || task.task_executor.id===currentUser.user.id)"
        label="Добавить ответ" icon="pi pi-external-link" @click="answerDisplay=!answerDisplay"/>
    <Button
        v-if="task.task_status==='on_execution' && currentUser.user.is_creator && task.task_creator.id===currentUser.user.id"
        label="Закрыть задачу" icon="pi pi-external-link" class="ml-4" @click="closeTask()"/>
  </div>

  <Dialog header="добавление ответа" v-model:visible="answerDisplay">
    <AddAnswer @closeDialog="closeDialog"/>
  </Dialog>
</template>

<script>
import {mapState} from "vuex";
import AddAnswer from "@/components/taskview/AddAnswer";
import {Get} from "@/api/apiroutes";

export default {
  name: "TaskControl",
  components: {AddAnswer},
  data() {
    return {
      answerDisplay: false,
    }
  },
  methods: {
    closeDialog() {
      this.answerDisplay = false;
    },
    closeTask() {
      this.$confirm.require({
        message: 'Вы действительно хотите закрыть задачу?',
        header: 'Закрытие',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          Get.closeTask(this.$route.params.id).then(value => {
            this.$store.commit('task/changeTaskStatus');
            this.$toast.add({severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
          })
        },
      });
    },
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
      taskAnswers: state => state.task.taskAnswers,
      currentUser: state => state.authenticate.currentUser,
    }),
  },
}
</script>

<style scoped>

</style>