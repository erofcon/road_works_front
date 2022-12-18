<template>
  <div class="row">
    <!--    success-->
    <div class="col col-xl-6 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0 fs-5 success-tasks text-success px-2 py-1 rounded-3">
              <i class="bi bi-award"></i>
            </div>
            <div class="dropdown">
              <button class="btn" id="cardOpt3" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <div aria-labelledby="cardOpt3" class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Узнать больше</a>
              </div>
            </div>
          </div>
          <span class="fw-semibold d-block mb-1">Выполненые задачи</span>
          <h3 class="card-title mb-2">123</h3>
        </div>
      </div>
    </div>

    <!--    warning-->
    <div class="col col-xl-6 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0 fs-5 on-execute text-warning px-2 py-1 rounded-3">
              <i class="bi bi-bricks"></i>
            </div>
            <div class="dropdown">
              <button class="btn" id="cardOpt3" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <div aria-labelledby="cardOpt3" class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Узнать больше</a>
              </div>
            </div>
          </div>
          <span class="fw-semibold d-block mb-1">Задачи на исполнении</span>
          <h3 class="card-title mb-2">3</h3>
        </div>
      </div>
    </div>

    <!--    danger-->
    <div class="col col-xl-6 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="card-title d-flex align-items-center justify-content-between">
            <div class="flex-shrink-0 fs-5 overdue text-danger px-2 py-1 rounded-3">
              <i class="bi bi-exclamation-diamond-fill"></i>
            </div>
            <div class="dropdown">
              <button class="btn" id="cardOpt3" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <div aria-labelledby="cardOpt3" class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">Узнать больше</a>
              </div>
            </div>
          </div>
          <span class="fw-semibold d-block mb-1">Просроченные задачи</span>
          <h3 class="card-title mb-2">23</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TasksStatus"
}
</script>

<style scoped>

.success-tasks {
  background-color: #9aec9a;
}

.on-execute {
  background-color: #ffff9f;
}

.overdue {
  background-color: #ffc3c3;
}

</style>