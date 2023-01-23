<template>


  <div @click="$router.push('/task/'+task.id)"
       :class="{'bg-primary-50 border-primary-500':task.task_status === 'on_execution',
      'bg-red-50  border-red-500':task.task_status === 'is_expired',
      'bg-green-50  border-green-500':task.task_status === 'is_done',
      }"
       class="fadeindown animation-duration-200 flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3 cursor-pointer"
       style="border-radius: 10px;">
    <div
        :class="{'text-primary-700':task.task_status === 'on_execution',
            'text-red-700':task.task_status === 'is_expired',
            'text-green-700':task.task_status === 'is_done',
          }"
    >
      <div class="my-1">
        <span class="inline-flex justify-content-center align-items-center w-2rem h-2rem border-circle border-1">
          <i class="pi pi-file "></i>
        </span>
        <span class="font-bold ml-2"><span>Создано:</span>
          {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}
        </span>
      </div>
      <span class="font-medium p-2">
        <i class="pi pi-user-edit" style="font-size: 1rem"></i>
        {{ task.creator_username }}
      </span>
      <span class="font-medium p-2">
        <i class="pi pi-user" style="font-size: 0.8rem"></i>
        {{ task.executor_username }}
      </span>
    </div>
    <div class="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
      <span v-if="task.task_status === 'on_execution'"
            class="bg-primary-400 text-primary-900 font-bold text-sm py-1 px-2" style="border-radius: 10px;">На исполнении</span>
      <span v-if="task.task_status === 'is_expired'" class="bg-red-400 text-red-900 font-bold text-sm py-1 px-2"
            style="border-radius: 10px;">Просрочено</span>
      <span v-if="task.task_status === 'is_done'" class="bg-green-400 text-green-900 font-bold text-sm py-1 px-2"
            style="border-radius: 10px;">Выполнено</span>
    </div>
  </div>


  <!--  <div class="my-5 shadow-3 surface-0 p-4 border-round">-->
  <!--    <div @click="$router.push('/task/'+task.id)" class="text-xl font-bold hover:text-primary cursor-pointer">-->
  <!--      {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}-->
  <!--    </div>-->
  <!--    <div class="flex justify-content-between align-items-center pt-3">-->
  <!--      <div>-->
  <!--        <p class="text-xl">{{ task.description }}</p>-->
  <!--        <div class="mt-2">-->
  <!--          <a href="#" class="text-sm text-gray-700 hover:text-primary">-->
  <!--            <i class="pi pi-user-edit"></i>-->
  <!--            {{ task.creator_username }}-->
  <!--          </a>-->
  <!--          <a href="#" class="pl-4 text-sm text-gray-700 hover:text-primary">-->
  <!--            <i class="pi pi-user"></i>-->
  <!--            {{ task.executor_username }}-->
  <!--          </a>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div>-->
  <!--        <Chip v-if="task.task_status === 'on_execution'" label="на исполнении" class="border-round bg-primary-200"/>-->
  <!--        <Chip v-else-if="task.task_status === 'is_expired'" label="просрочено" class="border-round bg-red-200"/>-->
  <!--        <Chip v-if="task.task_status === 'is_done'" label="выполнено" class="border-round bg-green-200"/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

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

<style lang="scss" scoped>

a {
  text-decoration: none;
}

</style>