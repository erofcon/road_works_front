<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="card-title d-flex justify-content-between align-items-center">
        <span class="card-title text-primary">Последние задачи</span>
        <button class="btn btn-outline-success btn-sm">
          <i class="bi bi-plus-lg"></i>
        </button>
      </div>
      <hr>
      <nav class="nav">
        <ul class="nav-item p-0">
          <li class="nav-link p-0">
            <a class="text-decoration-none text-dark" href="#">
              <img class="me-2 p-0 rounded-circle" src="https://avatars.githubusercontent.com/u/104511593?s=16&amp;v=4"
                   width="20" height="20"
                   alt="photon_handler">
              erofcon/23-10-11
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

a:hover{
  text-decoration: underline!important;
}


</style>