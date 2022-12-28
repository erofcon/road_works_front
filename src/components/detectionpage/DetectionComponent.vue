<template>
  <div class="card">
    <div class="card-body">
      <div class="row d-flex justify-content-between">
        <div class="col-auto">
          <div class="card-title">
            <span class="d-block mb-1 fw-semibold">Контрольный выезд на
              <span
                  class="text-primary">
                {{ moment(new Date(data.create_datetime)).format('DD.MM.YYYY HH:mm') }}
            </span>
            </span>
          </div>
          <div class="card-subtitle my-2 fs-6">
            <span class="text-muted">{{ data.descriptions }}</span>
          </div>
          <div class="card-subtitle">
            <div class="d-flex">
              <i class="bi bi-person me-2"></i>
              <a class="p-0 m-0">{{ data.username }}</a>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div>
            <button @click="$router.push('/detection_view/'+data.id)" class="btn btn-outline-primary btn-sm">
              Открыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  name: "DetectionComponent",
  data() {
    return {
      moment: moment,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>