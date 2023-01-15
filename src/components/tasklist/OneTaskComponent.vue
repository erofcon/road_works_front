<template>
  <Card class="my-5 shadow-3">
    <template #title>
      <div @click="$router.push('/task/'+task.id)" class="text-xl font-bold hover:text-primary cursor-pointer">
        {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}
      </div>
    </template>
    <template #content>
      <div class="flex justify-content-between align-items-center">
        <div>
          <p class="text-xl">{{ task.description }}</p>
          <div class="mt-2">
            <a href="#" class="text-sm text-gray-700 hover:text-primary">
              <i class="pi pi-user-edit"></i>
              {{ task.creator_username }}
            </a>
            <a href="#" class="pl-4 text-sm text-gray-700 hover:text-primary">
              <i class="pi pi-user"></i>
              {{ task.executor_username }}
            </a>
          </div>

        </div>
        <div>
          <Chip v-if="task.task_status === 'on_execution'" label="на исполнении" class="border-round bg-primary-200"/>
          <Chip v-else-if="task.task_status === 'is_expired'" label="просрочено" class="border-round bg-red-200"/>
          <Chip v-if="task.task_status === 'is_done'" label="выполнено" class="border-round bg-green-200"/>
        </div>

      </div>

    </template>

  </Card>

</template>

<script>
import moment from 'moment';


export default {
  name: "OneTaskComponent",
  data() {
    return {
      moment: moment,
    }
  },
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>