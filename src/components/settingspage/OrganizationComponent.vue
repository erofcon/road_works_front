<template>
  <div>
    <h3 class="fw-normal">Организации</h3>
    <hr>

    <div class="card mb-5">
      <div class="card-header">
        Огранизации
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex">
            <div class="d-flex align-items-end">
              <i class="bi bi-buildings fs-5 me-1"></i>
              <span class="text-primary">Минтранс КБР</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-people fs-5 me-1"></i>
              <span>23</span>
            </div>
          </div>
          <button class="btn btn-outline-danger btn-sm">удалить</button>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex">
            <div class="d-flex align-items-end">
              <i class="bi bi-buildings fs-5 me-1"></i>
              <span class="text-primary">Управдор КБР</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-people fs-5 me-1"></i>
              <span>3</span>
            </div>
          </div>
          <button class="btn btn-outline-danger btn-sm">удалить</button>
        </div>
      </div>
    </div>


    <div class="card mb-5">
      <div class="card-header">
        Дороги
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex">
            <div class="d-flex align-items-end">
              <i class="bi bi-sign-intersection-side fs-5 me-1"></i>
              <span class="text-primary">Нальчик-Урвань</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-buildings fs-5 me-1"></i>
              <span>3</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-people fs-5 me-1"></i>
              <span>23</span>
            </div>
          </div>
          <button class="btn btn-outline-danger btn-sm">удалить</button>
        </div>

        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex">
            <div class="d-flex align-items-end">
              <i class="bi bi-sign-intersection-side fs-5 me-1"></i>
              <span class="text-primary">Урвань-Ст.Черек</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-buildings fs-5 me-1"></i>
              <span>3</span>
            </div>
            <div class="ms-4">
              <i class="bi bi-people fs-5 me-1"></i>
              <span>3</span>
            </div>
          </div>
          <button class="btn btn-outline-danger btn-sm">удалить</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "OrganizationComponent"
}
</script>

<style scoped>

</style>