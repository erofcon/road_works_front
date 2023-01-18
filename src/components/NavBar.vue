<template>
  <div class="col navbar">
    <div class="flex container justify-content-between align-items-center px-2">
      <div>
        <Button @click="visibleLeft = true" class="p-button-text p-button-sm sidebar-button lg:hidden">
          <i class="pi pi-align-left text-2xl"></i>
        </Button>
        <span class="text-white">Дорожные работы</span>
      </div>
      <div>
        <nav class="hidden lg:block">
          <ul>
            <li @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
              <i class="pi pi-file-edit"></i>
              Создать
            </li>
            <li>
              <i class="pi pi-list"></i>
              Список задач
            </li>
            <li>
              <i class="pi pi-video"></i>
              Результат детектирования
            </li>
            <li>
              <i class="pi pi-map-marker"></i>
              Карта
            </li>
            <li>
              <i class="pi pi-chart-line"></i>
              Отчет
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex align-items-center">
        <Button icon="pi pi-bell" class="p-button-rounded text-white p-button-text"/>
        <Avatar class="cursor-pointer" @click="userToggle" image="https://avatars.githubusercontent.com/u/104511593?v=4"
                shape="circle"/>
      </div>

    </div>

    <Menu id="overlay_menu" class="mt-3" ref="menu" :model="createItems" :popup="true">
      <template #item="{item}">
        <div class="col">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </div>
      </template>
    </Menu>
  </div>

  <OverlayPanel ref="popup">
    <span>
      Вы вошли как @admin
    </span>
    <!--      <img src="/demo/images/nature/nature1.jpg" alt="Nature Image">-->
  </OverlayPanel>

  <!--  <div class="col border-bottom-1 border-gray-300 navbar">-->
  <!--    <div class="flex justify-content-between container">-->
  <!--      <div class="flex align-items-center">-->
  <!--        <Button @click="visibleLeft = true" class="text-primary-600 p-button-text p-button-sm lg:hidden">-->
  <!--          <i class="pi pi-align-left text-2xl"></i>-->
  <!--        </Button>-->
  <!--        <div class="logo">-->
  <!--          <router-link to="/" class="flex align-items-center">-->
  <!--            <img src="@/assets/logo.png" alt="logo"/>-->
  <!--            <span class="pl-3 logo-text">ДОРОЖНЫЕ РАБОТЫ</span>-->
  <!--          </router-link>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div>-->
  <!--        <nav class="flex align-items-center">-->
  <!--          <ul class="list-none hidden lg:block">-->
  <!--            <li>-->
  <!--              <router-link-->
  <!--                  class="p-2 "-->
  <!--                  v-for="item in navItems" :to="item.to">{{ item.label }}-->
  <!--              </router-link>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--          <Button :label="'admin'.toLocaleUpperCase()" class="text-primary-600 p-button-text text-sm p-button-sm"-->
  <!--                  @click="toggle"/>-->
  <!--        </nav>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <Menu id="overlay_menu" ref="menu" :model="toggleItems" :popup="true">-->
  <!--    <template #item="{item}">-->
  <!--      <div class="px-3 py-2">-->
  <!--        <router-link class="text-sm text-primary-600 font-semibold " :to="item.to">{{ item.label.toLocaleUpperCase() }}-->
  <!--        </router-link>-->
  <!--      </div>-->

  <!--    </template>-->
  <!--  </Menu>-->


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
      createItems: [
        {
          label: 'Создать задачу',
          to: '/create_task',
        },
        {
          label: 'Запуск на детектирование',
          to: '/run_detection',
        },
      ],


      // navItems: [
      //   {
      //     label: 'Карта',
      //     to: '/map',
      //   },
      //   {
      //     label: 'Список задач',
      //     to: '/task_list/on_execution',
      //   },
      //   {
      //     label: 'Результат детектирования',
      //     to: '/detection_result',
      //   },
      // ],
      // toggleItems: [
      //   {
      //     label: 'Создать задачу',
      //     to: '/create_task',
      //   },
      //   {
      //     label: 'Запуск на детектирование',
      //     to: '/run_detection',
      //   },
      //   {
      //     separator: true,
      //   },
      //   {
      //     label: 'Настройки',
      //     to: '#',
      //   },
      //   {
      //     label: 'Выход',
      //     to: '#',
      //   },
      // ],
      visibleLeft: false,
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    userToggle(event) {
      this.$refs.popup.toggle(event);
    }
  },
}
</script>

<style lang="scss" scoped>

.navbar {
  background-color: #343a40;
}

a {
  text-decoration: none;
}

nav ul li {
  list-style: none;
  display: inline-block;
  padding: 0 13px 0 13px;
  cursor: pointer;
  color: white;
}

nav ul li:hover {
  color: white;
}

.sidebar-button {
  color: white !important;
}

.sidebar-button:active {
  background-color: #343a40 !important;
}

.sidebar-button:hover {
  background-color: #343a40 !important;
}


//.sidebar-button:hover{
//  color: #EAE9E5!important;
//}


//.navbar {
//  background-color: #2A2539;
//}
//
//a {
//  text-decoration: none;
//  color: #EAE9E5;
//}
//
//.logo img {
//  max-width: 35px;
//}
//
//.logo-text {
//  font-weight: 600;
//  font-size: 1.25rem;
//  //font-size: 16px;
//  //font-weight: bold;
//}

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