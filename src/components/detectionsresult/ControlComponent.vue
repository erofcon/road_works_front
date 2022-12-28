<template>
  <div>
    <div class="fixed-bottom">
      <div class="card rounded-0">
        <div class="card-body text-end">
          <div class="row d-flex justify-content-end">
            <div class="col-auto">
              <button @click="createTask" type="button" class="btn btn-outline-primary position-relative">
                создать
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                   {{ selectedImage.length }}
                 </span>
                <!--              <span class="badge text-bg-light">{{ selectedImage.length }}</span>-->
              </button>
            </div>
            <div class="col-auto">
              <div class="dropdown text-end">
                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                        data-bs-target="#edit-modal">
                  Редактировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade modal-dialog-scrollable" id="edit-modal" tabindex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Редактирование</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="descriptionTextarea" class="form-label">Описание задачи</label>
              <textarea class="form-control" id="descriptionTextarea" rows="3"></textarea>
            </div>


            <div class="mb-3">
              <p class="text-lg mb-2">Срок исполнения задачи</p>
              <input class="w-100 fs-6 p-2 rounded calendar" type="date"/>
            </div>

            <div class="mb-3">
              <p class="text-lg mb-2">Выберите группу</p>
              <select class="form-select">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="mb-3">
              <p class="text-lg mb-2">Выберите исполнителя</p>
              <select class="form-select">
                <option value="1">Иванов</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ControlComponent",
  methods: {
    createTask() {
      if (this.selectedImage.length > 0) {
        this.$store.commit('detectionResult/deleteDetectionImage');
      }
    },
  },
  computed: {
    ...mapState({
      selectedImage: state => state.detectionResult.selectedImage,
    }),
  },
}
</script>

<style scoped>

</style>