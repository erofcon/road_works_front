<template>
  <form @submit.prevent="upload">
    <div class="mb-3">
      <label for="tracker-description" class="form-label">Описание</label>
      <textarea v-model="description" class="form-control" id="tracker-description" rows="5"></textarea>
    </div>

    <div class="mb-3">
      <label for="formFileMultiple" class="form-label">Выбрать видео файл</label>
      <input @change="onselectVideoFile" class="form-control form-control-sm w-75" type="file" accept="video/*"
             id="formFileMultiple" required>
    </div>

    <div class="mb-3">
      <p class="text-lg mb-2">Время начала видео</p>
      <input @input="onselectDateTime" class="w-75 fs-6 p-2 rounded calendar" step="1" type="datetime-local" required/>
    </div>

    <div class="mb-3">
      <button type="submit" class="btn btn-sm btn-outline-primary mb-3">Отправить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TrackerUploadTab",
  data() {
    return {
      description: '',
      video_file: null,
      start_datetime: null,
    }
  },
  methods: {
    onselectVideoFile(event) {
      this.video_file = event.target.files[0];
    },
    onselectDateTime(event) {
      this.start_datetime = event.target.value;
    },
    upload() {
      console.log(this.description);
      console.log(this.video_file);
      console.log(this.start_datetime);
    }
  }
}
</script>

<style scoped>
.calendar {
  border: 1px solid #ced4da;
  height: 35px;
}
</style>