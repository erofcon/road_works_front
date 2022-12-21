<template>
  <div class="container">
    <div class="col-6 py-5 mx-auto text-center">
      <h2>Создание новой задачи</h2>
      <p class="lead">
        Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a
        validation state that can be triggered by attempting to submit the form without completing it.
      </p>
    </div>

    <div class="col-6 mx-auto">
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Описание задачи</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
      </div>

      <div class="mb-3">
        <div class="mb-3">
          <p class="text-lg mb-2">Выберите место расположения </p>
          <l-map style="height: 300px" :zoom="zoom" :center="center" @click="getPosition">
            <l-tile-layer :min-zoom="3" :max-zoom="18" :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker v-if="markerLatLng" :lat-lng="markerLatLng"></l-marker>
          </l-map>
        </div>
      </div>

      <div class="mb-3">
        <p class="text-lg mb-2">Срок исполнения задачи</p>
        <input class="w-50 fs-6 p-2 rounded calendar" type="date"/>
      </div>

      <div class="mb-3">
        <p class="text-lg mb-2">Выберите группу</p>
        <select class="form-select w-50">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="mb-3">
        <p class="text-lg mb-2">Выберите исполнителя</p>
        <select class="form-select w-50">
          <option value="1">Иванов</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="formFileMultiple" class="form-label">Добавить изображение</label>
        <input class="form-control w-50" type="file" accept="image/*" id="formFileMultiple" multiple>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary mb-3">Создать</button>
      </div>

    </div>
  </div>


</template>

<script>
import {LMap, LTileLayer, LMarker} from "@vue-leaflet/vue-leaflet";

export default {
  name: "CreateTask",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 11,
      center: [43.4777807765672, 43.59575092792511],
      markerLatLng: {
        lat: 0,
        lng: 0
      },
    }
  },
  methods: {
    getPosition(e) {
      this.address = null;
      this.markerLatLng = (e.latlng);
    },
  }
}
</script>

<style scoped>
.calendar {
  border: 1px solid #ced4da;
}

</style>