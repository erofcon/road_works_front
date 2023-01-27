<template>
  <l-map style="height: 93vh" :zoom="zoom" :maxZoom="18" :center="center">
    <l-tile-layer
        :url=selectedTile.url
        layer-type="base"
        :name=selectedTile.name
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    ></l-tile-layer>
    <l-geo-json
        :geojson="geoJsonData"
        @click="getTaskView"
    >
      <l-popup class="w-14rem p-0 m-0">
        <div v-for="task in tasksData" :key="task.id">
          <div class="grid">
            <div class="col">
              <img class="w-12 cursor-pointer" :src="baseUrl+'/'+task.url" alt="image none"
                   @click="fullImg($event.target.src)">
            </div>
            <div class="col">
              <div class="flex align-items-center">
                <div @click="$router.push('/task/'+task.id)" class="cursor-pointer hover:text-primary">
                  {{ moment(new Date(task.create_datetime)).format('YYYY.MM.DD') }}
                </div>
                <div class="pl-2">
                  <Chip v-if="task.task_status === 'on_execution'" label="на исполнении"
                        class="border-round bg-primary-200"/>
                  <Chip v-else-if="task.task_status === 'is_expired'" label="просрочено"
                        class="border-round bg-red-200"/>
                  <Chip v-if="task.task_status === 'is_done'" label="выполнено" class="border-round bg-green-200"/>
                </div>
              </div>
              <small class="font-italic">
                {{ task.description }}
              </small>
              <div class="mt-2 flex">
                <a href="#" class="text-gray-700 hover:text-primary pr-3">
                  <i class="pi pi-user-edit">
                    <span class="pl-1">
                      {{ task.creator_username }}
                    </span>
                  </i>
                </a>
                <a href="#" class="text-gray-700 hover:text-primary ">
                  <i class="pi pi-user">
                    <span class="pl-1">
                      {{ task.executor_username }}
                    </span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </l-popup>

    </l-geo-json>
    <l-control>
      <Button class="p-button-raised p-button-text surface-ground text-color-secondary p-2"
              @click="sideBarVisibleRight = true">
        <i class="pi pi-sliders-h text-3xl"></i>
      </Button>
    </l-control>
  </l-map>

  <Dialog v-model:visible="dialogDisplay">
    <img class="max-w-30rem p-bu" :src="fullImgUrl" alt="img not loaded">
  </Dialog>

  <Sidebar v-model:visible="sideBarVisibleRight" position="right">
    <div class="border-bottom-1 pb-2 border-gray-400">
      <span class="font-bold">
        Слои карты
      </span>
      <div class="mt-2">
        <div v-for="tile in tiles" class="mb-2">
          <RadioButton :inputId="tile.id" name="tile" :value="tile" v-model="selectedTile"/>
          <label class="pl-2" :for="tile.id">{{ tile.name }}</label>
        </div>
      </div>

    </div>

    <div class="border-bottom-1 pb-2 border-gray-400 pt-3">
      <div class="flex justify-content-between align-items-center">
         <span class="font-bold">
           Задачи
         </span>
        <Button class="p-button-text text-color-secondary p-0" @click="showTaskHead=!showTaskHead">
          <i class="pi text-xl" :class="{'pi-angle-down':!showTaskHead, 'pi-angle-up':showTaskHead}"></i>
        </Button>
      </div>
      <div v-if="showTaskHead">

        <Dropdown placeholder="период"/>
      </div>

      <div class="mt-2">
        <div v-for="type in taskTypes" class="mb-2">
          <RadioButton :inputId="type.id" name="type" :value="type" v-model="selectedTaskType"/>
          <label class="pl-2" :for="type.id">{{ type.name }}</label>
        </div>
      </div>
    </div>

  </Sidebar>


</template>

<script>
import moment from "moment";
import {Get} from "@/api/apiroutes";
import {defaultApiInstance} from "@/api";

export default {
  name: "MapView",
  data() {
    return {
      sideBarVisibleRight: false,
      dialogDisplay: false,
      fullImgUrl: null,
      moment: moment,
      baseUrl: defaultApiInstance.defaults.baseURL,
      zoom: 9,
      center: [43.500826, 43.661079],
      geoJsonData: null,
      tasksData: null,
      selectedTile: null,
      selectedTaskType: null,
      showTaskHead: false,
      tiles: [
        {
          id: "1",
          name: 'Топографическая карта',
          url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        },
        {
          id: "2",
          name: 'Географическая карта',
          url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        }
      ],
      taskTypes: [
        {
          id: 'is_done',
          name: 'Выполненые задачи',
        },
        {
          id: 'is_expired',
          name: 'Просроченные задачи',
        },
        {
          id: 'on_execution',
          name: 'Задачи на исполнении',
        },
        {
          id: 'all_tasks',
          name: 'Все задачи',
        }
      ]
    };
  },
  methods: {
    getGeoJsonDoneData() {
      Get.getGeoJsonDoneTasks().then((res) => {
        this.geoJsonData = res.data;
      })
    },
    getTaskView(event) {
      Get.getDoneTaskWithLocation(event.latlng.lat, event.latlng.lng).then(value => {
        this.tasksData = value.data
      })
    },
    fullImg(event) {
      this.fullImgUrl = event
      this.dialogDisplay = true

    },
  },
  mounted() {
    this.selectedTile = this.tiles[0];
    this.selectedTaskType = this.taskTypes[2];
    this.getGeoJsonDoneData();
  }
}
</script>

<style lang="scss" scoped>
.p-chip {
  margin: 0;
  padding: 2px;
}

::v-deep(.p-chip) {
  .p-chip-text {
    font-size: 12px;
    margin: 0;
  }
}
</style>