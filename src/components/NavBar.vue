<template>

  <div class="col border-bottom-1 border-gray-300">
    <div class="flex justify-content-between container">
      <div class="flex align-items-center">
        <Button @click="visibleLeft = true" class="text-primary-600 p-button-text p-button-sm lg:hidden">
          <i class="pi pi-align-left text-2xl"></i>
        </Button>
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="logo"/>
          </router-link>
        </div>
      </div>
      <div>
        <nav class="flex align-items-center">
          <ul class="list-none hidden lg:block">
            <li>
              <router-link
                  class="p-2 text-sm text-primary-600 font-semibold"
                  v-for="item in navItems" :to="item.to">{{ item.label.toLocaleUpperCase() }}
              </router-link>
            </li>
          </ul>
          <Button :label="'admin'.toLocaleUpperCase()" class="text-primary-600 p-button-text text-sm p-button-sm"
                  @click="toggle"/>
        </nav>
      </div>
    </div>
  </div>

  <Menu id="overlay_menu" ref="menu" :model="toggleItems" :popup="true">
    <template #item="{item}">
      <div class="px-3 py-2">
        <router-link class="text-sm text-primary-600 font-semibold " :to="item.to">{{ item.label.toLocaleUpperCase() }}
        </router-link>
      </div>

    </template>
  </Menu>


  <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
    <h3>Left Sidebar</h3>
  </Sidebar>

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
      navItems: [
        {
          label: 'Карта',
          to: '/map',
        },
        {
          label: 'Список задач',
          to: '/task_list/on_execution',
        },
        {
          label: 'Результат детектирования',
          to: '/detection_result',
        },
      ],
      toggleItems: [
        {
          label: 'Создать задачу',
          to: '/create_task',
        },
        {
          label: 'Запуск на детектирование',
          to: '/run_detection',
        },
        {
          separator: true,
        },
        {
          label: 'Настройки',
          to: '#',
        },
        {
          label: 'Выход',
          to: '#',
        },
      ],
      visibleLeft: false,
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
}
</script>

<style lang="scss" scoped>


a {
  text-decoration: none;
}

.logo img {
  max-width: 35px;
}

//.p-menubar{
//  float: right!important;
//}

//
//::v-deep(.p-menubar){
//  ul {
//    float: right!important;
//  }
//}

//.p-menubar .p-menubar-root-list {
//  outline: 0 none;
//}

</style>