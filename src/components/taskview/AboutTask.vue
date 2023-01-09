<template>
  <div>

    <div>
      <span href="#">
        <i class="pi pi-calendar mr-2"></i>
        <strong>дата создания</strong>
        {{ moment(new Date(task.create_datetime)).format('YYYY.MM.DD') }}
      </span>
    </div>

    <div class="mt-1">
      <div v-if="task.task_status === 'is_done'" class="flex align-items-center">
        <Badge severity="success" class="mr-1 badge"></Badge>
        <span>выполнено</span>
      </div>

      <div v-if="task.task_status === 'on_execution'" class="flex align-items-center">
        <Badge severity="info" class="mr-1 badge"></Badge>
        <span>на выполнении</span>
      </div>

      <div v-if="task.task_status === 'is_expired'" class="flex align-items-center">
        <Badge severity="danger" class="mr-1 badge"></Badge>
        <span>просрочено</span>
      </div>
    </div>

    <div class="my-3">
      <span class="font-italic">
        {{ task.description }}
      </span>
    </div>

    <div>
      <div class="mt-2">
        <a href="#">
          <i class="pi pi-user-edit mr-2"></i>
          <strong>создатель</strong>
          {{task.task_creator.username}}
        </a>
      </div>

      <div class="mt-2">
        <a href="#">
          <i class="pi pi-user mr-2"></i>
          <strong>исполнитель</strong>
          {{task.task_executor.username}}
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";
import moment from "moment";

export default {
  name: "AboutTask",
  data() {
    return {
      moment: moment,
    }
  },
  computed: {
    ...mapState({
      task: state => state.task.task,
    }),
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.badge {
  height: 15px;
  width: 15px;
}

</style>