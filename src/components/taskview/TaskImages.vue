<template>
  <div v-if="task.task_images.length>0">
    <Galleria :value="task.task_images"
              :responsiveOptions="responsiveOptions"
              :numVisible="5"
              :showItemNavigators="true">
      <template #item="slotProps">
        <img :src="baseUrl+'/'+slotProps.item.url" :alt="slotProps.item.alt" style="width: 100%" draggable="false"/>
      </template>
      <template #thumbnail="slotProps">
        <img class="img-thumbnail" :src="baseUrl+'/'+slotProps.item.url" :alt="slotProps.item.alt" draggable="false"/>
      </template>
    </Galleria>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TaskImages",
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
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
.img-thumbnail {
  width: 100px;
}
</style>