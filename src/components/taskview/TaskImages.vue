<template>
  <div v-if="task.task_images.length>0">

    <Galleria :value="task.task_images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions"
              :numVisible="7" containerStyle="max-width: 850px"
              :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false"
              v-model:visible="displayCustom">
      <template #item="slotProps">
        <img :src="baseUrl+'/'+slotProps.item.url" :alt="slotProps.item.alt" style="width: 100%; display: block;"/>
      </template>
      <template #thumbnail="slotProps">
        <img :src="baseUrl+'/'+slotProps.item.url" :alt="slotProps.item.alt" style="display: block;"/>
      </template>
    </Galleria>

    <div v-if="task.task_images.length>0" class="grid" style="max-width: 400px;">
      <div v-for="(image, index) of task.task_images" class="col-6" :key="index">
        <img :src="baseUrl+'/'+image.url" :alt="image.alt" style="cursor: pointer; width: 100%"
             @click="imageClick(index)"/>
      </div>
    </div>

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
      activeIndex: 0,
      displayCustom: false,
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
  }, methods: {
    imageClick(index) {
      this.activeIndex = index;
      this.displayCustom = true;
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