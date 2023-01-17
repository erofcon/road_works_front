<template>
  <l-map style="height: 93vh" :zoom="zoom" :maxZoom="18" :center="center">
    <l-control-layers position="topright"></l-control-layers>
    <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
    />
    <l-geo-json
        :geojson="geoJsonData"
        @click="getTaskView"
    >
      <l-popup class="w-14rem p-0 m-0">
        <div v-for="task in tasksData" :key="task.id">
          <div class="grid">
            <div class="col">
              <img class="w-12" :src="baseUrl+'/'+task.url" alt="image none" @click="fullImg($event.target.src)">
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

  </l-map>

  <Dialog v-model:visible="dialogDisplay">
    <img class="max-w-30rem p-bu" :src="fullImgUrl" alt="img not loaded">
  </Dialog>

</template>

<script>
import moment from "moment";
import {Get} from "@/api/apiroutes";
import {defaultApiInstance} from "@/api";

export default {
  name: "MapView",
  data() {
    return {
      dialogDisplay: false,
      fullImgUrl: null,
      moment: moment,
      baseUrl: defaultApiInstance.defaults.baseURL,
      zoom: 9,
      center: [43.500826, 43.661079],
      tileProviders: [
        {
          name: 'Топографическая карта',
          visible: true,
          url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
          attribution:
              '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        },
        {
          name: 'Географическая карта',
          visible: false,
          url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
          attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ],
      geoJsonData: null,
      tasksData: null,
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