<template>

  <div class="my-3">
    <div class="d-flex align-items-center mb-3">

      <div class="rounded-circle px-1">
        <i class="bi bi-wrench-adjustable-circle text-secondary fs-4"></i>
      </div>
      <span class="fs-6 ms-2">используйте специальные инструменты</span>
    </div>

    <div class="col col-sm-8 col-md-5">
      <div class="card p-3">
        <div class="card-title">
          <span class="card-title text-primary">Установите программное обеспечение</span>
        </div>
        <hr>
        <div class="card-body p-0 m-0 d-flex justify-content-between align-items-center row">
          <div class="col p-0 m-0 d-flex justify-content-center">
            <i class="bi bi-android2 text-success"></i>
          </div>
          <div class="col p-0 m-0 text-center text-sm-start">
            <p>Установите программное обеспечение для <span class="text-success">android</span>, для обноружения ям.</p>
          </div>
        </div>
        <div>
          <button class="btn btn-outline-success">
            скачать
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DownloadApp"
}
</script>

<style scoped>

.bi-android2 {
  font-size: 100px;
}

.rounded-circle{
  background-color: #e0e0e0;
}

</style>