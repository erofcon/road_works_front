<template>
  <form @submit.prevent="upload">
    <div class="mb-3">
      <label for="xml-description" class="form-label">Описание</label>
      <textarea v-model="description" class="form-control" id="xml-description" rows="5"></textarea>
    </div>

    <div class="mb-3">
      <label for="xml-video" class="form-label">Выбрать видео файл</label>
      <input @change="onselectVideoFile" class="form-control form-control-sm w-75" type="file" accept="video/*"
             id="xml-video" required>
    </div>

    <div class="mb-3">
      <label for="xml" class="form-label">Выбрать xml файл</label>
      <input @change="onselectXmlFile" class="form-control form-control-sm w-75" type="file" accept=".xml" id="xml"
             required>
    </div>

    <div v-if="!on_submitted" class="my-4">
      <button type="submit" class="btn btn-sm btn-outline-primary mb-3">Отправить</button>
    </div>
    <div v-if="on_submitted">
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{width: uploadProgress+'%'}">
          {{ uploadProgress }}%
        </div>
      </div>
    </div>

  </form>

  <div v-if="send_success">
    <div class="alert alert-dismissible alert-success" role="alert">
      Файлы успешно загружны на сервер
      <button type="button" class="btn-close" data-bs-dismiss="alert"
              aria-label="Close"></button>
    </div>
  </div>

  <div v-if="send_error">
    <div class="alert alert-dismissible alert-danger" role="alert">
      Ошибка загрузки файлов
      <button type="button" class="btn-close" data-bs-dismiss="alert"
              aria-label="Close"></button>
    </div>
  </div>

</template>

<script>
import {Post} from "@/api/apiroutes";
import {mapState} from "vuex";

export default {
  name: "XmlDetectionUploadTab",
  data() {
    return {
      description: '',
      video_file: null,
      xml_file: null,
      on_submitted: false,
      send_error: false,
      send_success: false,
    }
  },
  methods: {
    onselectVideoFile(event) {
      this.video_file = event.target.files[0];
    },

    onselectXmlFile(file) {
      this.xml_file = file.target.files[0];
    },

    upload() {
      this.send_success = false;
      this.send_error = false;
      this.on_submitted = true;
      Post.runDetectionWithXml(this.description, this.video_file, this.xml_file).then(() => {
        this.on_submitted = false;
        this.send_success = true
      }).catch(reason => {
        this.on_submitted = false;
        this.send_error = false;
      });
    }
  },
  computed: {
    ...mapState(
        {
          uploadProgress: state => state.xmlDetectionUpload.uploadProgress,
        }
    )
  }
}
</script>

<style scoped>

</style>