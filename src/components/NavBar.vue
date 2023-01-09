<template>

  <div>
    <Menubar :model="items" class="m-0 px-8 border-noround">
      <template #start>
        <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40">
      </template>
      <template #end>
        <InputText placeholder="Search" type="text"/>
      </template>
    </Menubar>
  </div>

  <!--  <header class="p-3 bg-dark">-->
  <!--    <div class="container">-->
  <!--      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">-->

  <!--        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">-->
  <!--          <li>-->
  <!--            <router-link to="/" class="nav-link px-2 text-white">Домой</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/create_task" class="nav-link px-2 text-white">Создать задачу</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/user/12" class="nav-link px-2 text-white">Пользователь</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/run_detection" class="nav-link px-2 text-white">Запуск на детектирование</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/detections" class="nav-link px-2 text-white">Обноружение</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/detection_view/23" class="nav-link px-2 text-white">Результат обноружения</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/settings" class="nav-link px-2 text-white">Настройки</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/login" class="nav-link px-2 text-white">Login</router-link>-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            <router-link to="/task/67" class="nav-link px-2 text-white">Task</router-link>-->
  <!--          </li>-->
  <!--        </ul>-->

  <!--        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">-->
  <!--          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">-->
  <!--        </form>-->

  <!--        <div class="dropdown text-end">-->
  <!--          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"-->
  <!--             aria-expanded="false">-->
  <!--            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">-->
  <!--          </a>-->
  <!--          <ul class="dropdown-menu text-small" style="">-->
  <!--            <li><a class="dropdown-item" href="#">New project...</a></li>-->
  <!--            <li><a class="dropdown-item" href="#">Settings</a></li>-->
  <!--            <li><a class="dropdown-item" href="#">Profile</a></li>-->
  <!--            <li>-->
  <!--              <hr class="dropdown-divider">-->
  <!--            </li>-->
  <!--            <li><a class="dropdown-item" href="#">Sign out</a></li>-->
  <!--          </ul>-->
  <!--        </div>-->

  <!--      </div>-->
  <!--    </div>-->
  <!--  </header>-->
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name: "NavBar",
  components: {
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: 'Создать задачу',
          to: '/create_task',
        },
        {
          label: 'Запуск на детектирование',
          to: '/run_detection',
        },
        {
          label: 'Одна задача',
          to: '/task/1',
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>