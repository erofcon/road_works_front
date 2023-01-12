<template>
  <DataTable :value="taskAnswers" class="p-datatable-sm">
    <Column header="Дата">
      <template #body="{data}">
          <span>
            {{ moment(new Date(data.create_datetime)).format('YYYY.MM.DD') }}
          </span>
      </template>
    </Column>
    <Column field="description" header="Описание"/>
    <Column #body="{data}" header="изображение" headerStyle="width: 20%">
      <div v-if="data.answer_images" class="grid">
        <div v-for="image in data.answer_images"
             class="col-12 md:col-6 lg:col-4"
             :key="image.id">
          <Image :src="baseUrl+'/'+image.url" alt="Image Text" :preview="true"
                 imageStyle="cursor: pointer; max-width: 80px;"/>
        </div>
      </div>
    </Column>
  </DataTable>
</template>

<script>
import {mapState} from "vuex";
import moment from "moment";

export default {
  name: "TaskAnswer",
  props: {
    baseUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      moment: moment,
    }
  },
  computed: {
    ...mapState({
      taskAnswers: state => state.task.taskAnswers,
    }),
  },
}
</script>

<style scoped>

</style>