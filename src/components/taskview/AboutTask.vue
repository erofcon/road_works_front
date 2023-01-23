<template>

  <div>
    <div class="flex align-items-center text-xl font-medium text-900 mb-4">Описание задачи</div>
    <div class="flex align-items-center justify-content-between mb-3">
      <span class="text-900 font-medium text-3xl block">
        {{ moment(new Date(task.create_datetime)).format('DD.MM.YYYY HH:mm') }}</span>
    </div>
    <div class="font-semibold font-italic text-900 mb-3">{{ task.description }}</div>
    <div class="font-bold text-900 mb-3">Статус</div>
    <div class="flex align-items-center mb-5">
      <i class="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-2 cursor-pointer border-2 surface-border transition-all transition-duration-300"></i>
      <span class="font-bold text-900">выполнено</span>
    </div>



    <div class="mb-3 flex align-items-center justify-content-between"><span class="font-bold text-900">Size</span><a
        tabindex="0" class="cursor-pointer text-600 text-sm flex align-items-center">Size Guide <i
        class="ml-1 pi pi-angle-right"></i></a></div>
    <div class="grid grid-nogutter align-items-center mb-5">
      <div
          class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
        XS
      </div>
      <div
          class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
        S
      </div>
      <div
          class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500">
        M
      </div>
      <div
          class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
        L
      </div>
      <div
          class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors">
        XL
      </div>
    </div>
    <div class="font-bold text-900 mb-3">Quantity</div>
    <div class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between"><span
        class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal w-8rem"
        spinnermode="horizontal"><input class="p-inputtext p-component p-inputnumber-input w-3rem text-center"
                                        role="spinbutton" aria-valuemin="0" aria-valuenow="1"><!----><button
        class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-up p-button-text"
        type="button" tabindex="-1" aria-hidden="true"><!----><span class="pi pi-plus p-button-icon"></span><span
        class="p-button-label">&nbsp;</span><!----><span class="p-ink" role="presentation"></span></button><button
        class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text"
        type="button" tabindex="-1" aria-hidden="true"><!----><span class="pi pi-minus p-button-icon"></span><span
        class="p-button-label">&nbsp;</span><!----><span class="p-ink" role="presentation"></span></button></span>
      <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
        <button class="p-button p-component flex-1 mr-5" type="button" aria-label="Add to Cart"><!----><!----><span
            class="p-button-label">Add to Cart</span><!----><span class="p-ink" role="presentation"
                                                                  style="height: 383px; width: 383px; top: -182.9px; left: 20.9px;"></span>
        </button>
        <i class="pi text-2xl cursor-pointer pi-heart text-600"></i></div>
    </div>
  </div>


  <!--  <div>-->

  <!--    <div>-->
  <!--      <span href="#">-->
  <!--        <i class="pi pi-calendar mr-2"></i>-->
  <!--        <strong>дата создания</strong>-->
  <!--        {{ moment(new Date(task.create_datetime)).format('YYYY.MM.DD') }}-->
  <!--      </span>-->
  <!--    </div>-->

  <!--    <div class="mt-1">-->
  <!--      <div v-if="task.task_status === 'is_done'" class="flex align-items-center">-->
  <!--        <Badge severity="success" class="mr-1 badge"></Badge>-->
  <!--        <span>выполнено</span>-->
  <!--      </div>-->

  <!--      <div v-if="task.task_status === 'on_execution'" class="flex align-items-center">-->
  <!--        <Badge severity="info" class="mr-1 badge"></Badge>-->
  <!--        <span>на выполнении</span>-->
  <!--      </div>-->

  <!--      <div v-if="task.task_status === 'is_expired'" class="flex align-items-center">-->
  <!--        <Badge severity="danger" class="mr-1 badge"></Badge>-->
  <!--        <span>просрочено</span>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <div class="my-3">-->
  <!--      <span class="font-italic">-->
  <!--        {{ task.description }}-->
  <!--      </span>-->
  <!--    </div>-->

  <!--    <div>-->
  <!--      <div class="mt-2">-->
  <!--        <a href="#">-->
  <!--          <i class="pi pi-user-edit mr-2"></i>-->
  <!--          <strong>создатель</strong>-->
  <!--          {{task.task_creator.username}}-->
  <!--        </a>-->
  <!--      </div>-->

  <!--      <div class="mt-2">-->
  <!--        <a href="#">-->
  <!--          <i class="pi pi-user mr-2"></i>-->
  <!--          <strong>исполнитель</strong>-->
  <!--          {{task.task_executor.username}}-->
  <!--        </a>-->
  <!--      </div>-->
  <!--    </div>-->

  <!--  </div>-->
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