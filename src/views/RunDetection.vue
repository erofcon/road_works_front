<template>
  <div class="container">
    <div class="col-6 py-5 mx-auto text-center">
      <h2>Запуск на детектрование</h2>
      <p class="lead fs-6">
        Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a
        validation state that can be triggered by attempting to submit the form without completing it.
      </p>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
            Обноружение ям с помощью xml
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                  type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
            Задачи
          </button>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active text-start mt-5" id="home-tab-pane" role="tabpanel"
             aria-labelledby="home-tab"
             tabindex="0">

          <div class="mb-3">
            <label for="xml" class="form-label">Выбрать xml файл</label>
            <input class="form-control w-50" type="file" accept=".xml" id="xml">
          </div>

          <div class="mb-3">
            <label for="xml-video" class="form-label">Выбрать видео файл</label>
            <input class="form-control w-50" type="file" accept="video/*" id="xml-video">
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary mb-3">Отправить</button>
          </div>


        </div>
        <div class="tab-pane fade text-start mt-5" id="profile-tab-pane" role="tabpanel" aria-labelledby="home-tab"
             tabindex="0">

          <div class="mb-3">
            <p class="text-lg mb-2">Срок исполнения задачи</p>
            <input class="w-50 fs-6 p-2 rounded calendar" type="date"/>
          </div>

          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Выбрать видео файл</label>
            <input class="form-control w-50" type="file" accept="video/*" id="formFileMultiple" multiple>
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary mb-3">Отправить</button>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RunDetection"
}
</script>

<style scoped>
.calendar {
  border: 1px solid #ced4da;
}

</style>