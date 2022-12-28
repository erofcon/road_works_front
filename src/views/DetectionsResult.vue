<template>
  <div class="container-fluid">
    <div class="row">

      <ImagesGrid :base-url="baseUrl" @selectImg="selectImg"/>
      <DetailImageShow :base-url="baseUrl"/>
      <ControlComponent/>

      <!--      <div class="col">-->
      <!--        <div class="row d-flex justify-content-center">-->
      <!--          <div v-for="(img, index) in images" :key=img.id class="col-auto mb-4">-->
      <!--            <div class="card">-->
      <!--              <div class="card-header">-->
      <!--                <div class="col text-end">-->
      <!--                  <input type="checkbox" @input="selected(img, $event)" ref="imagClick">-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div class="card-body p-0 m-0">-->
      <!--                <div class="col m-0 p-0">-->
      <!--                  <img @click="selectImg(img, index)"-->
      <!--                       :src=img.url-->
      <!--                       class="img-fluid shadow-1-strong rounded-bottom m-0 p-0"-->
      <!--                       alt="Boat on Calm Water"-->
      <!--                  />-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->


      <!--      <div v-if="oneSelectImage!=null" class="col-12 col-md-4 detail-show" @mouseleave="leave">-->
      <!--        <div class="card m-0 p-0 position-sticky">-->
      <!--          <div class="card-header">-->
      <!--            <span>2022-10-23 16.54</span>-->
      <!--          </div>-->
      <!--          <div class="card-body m-0 p-0 position-sticky">-->
      <!--            <div>-->
      <!--              <VueZoomer ref="zoom"-->
      <!--                         :zooming-elastic="false"-->
      <!--                         :zoomed="true"-->
      <!--              >-->
      <!--                <img :src="oneSelectImage.url" class="img-fluid canvas-image">-->
      <!--              </VueZoomer>-->
      <!--            </div>-->
      <!--            <div class="card-footer">-->
      <!--              <p>широта: <span class="text-primary">43.12321321</span></p>-->
      <!--              <p>долгота: <span class="text-primary">44.63253219</span></p>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->


      <!--    </div>-->

      <!--    <div class="fixed-bottom">-->
      <!--      <div class="card rounded-0">-->
      <!--        <div class="card-body text-end">-->
      <!--          <div class="row d-flex justify-content-end">-->
      <!--            <div class="col-auto">-->
      <!--              <button @click="createTask" type="button" class="btn btn-outline-primary position-relative">-->
      <!--                создать-->
      <!--                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">-->
      <!--                {{ selectedImage.length }}-->
      <!--              </span>-->
      <!--                &lt;!&ndash;              <span class="badge text-bg-light">{{ selectedImage.length }}</span>&ndash;&gt;-->
      <!--              </button>-->
      <!--            </div>-->
      <!--            <div class="col-auto">-->
      <!--              <div class="dropdown text-end">-->
      <!--                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"-->
      <!--                        data-bs-target="#edit-modal">-->
      <!--                  Редактировать-->
      <!--                </button>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->


      <!--    &lt;!&ndash;    modal &ndash;&gt;-->

      <!--    <div class="modal fade modal-dialog-scrollable" id="edit-modal" tabindex="-1" aria-labelledby="exampleModalLabel"-->
      <!--         aria-hidden="true">-->
      <!--      <div class="modal-dialog">-->
      <!--        <div class="modal-content">-->
      <!--          <div class="modal-header">-->
      <!--            <h1 class="modal-title fs-5" id="exampleModalLabel">Редактирование</h1>-->
      <!--            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
      <!--          </div>-->
      <!--          <div class="modal-body">-->
      <!--            <div class="mb-3">-->
      <!--              <label for="descriptionTextarea" class="form-label">Описание задачи</label>-->
      <!--              <textarea class="form-control" id="descriptionTextarea" rows="3"></textarea>-->
      <!--            </div>-->


      <!--            <div class="mb-3">-->
      <!--              <p class="text-lg mb-2">Срок исполнения задачи</p>-->
      <!--              <input class="w-100 fs-6 p-2 rounded calendar" type="date"/>-->
      <!--            </div>-->

      <!--            <div class="mb-3">-->
      <!--              <p class="text-lg mb-2">Выберите группу</p>-->
      <!--              <select class="form-select">-->
      <!--                <option value="1">One</option>-->
      <!--                <option value="2">Two</option>-->
      <!--                <option value="3">Three</option>-->
      <!--              </select>-->
      <!--            </div>-->

      <!--            <div class="mb-3">-->
      <!--              <p class="text-lg mb-2">Выберите исполнителя</p>-->
      <!--              <select class="form-select">-->
      <!--                <option value="1">Иванов</option>-->
      <!--                <option value="2">Two</option>-->
      <!--                <option value="3">Three</option>-->
      <!--              </select>-->
      <!--            </div>-->


      <!--          </div>-->
      <!--          <div class="modal-footer">-->
      <!--            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>-->
      <!--            <button type="button" class="btn btn-primary">Сохранить</button>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>


  </div>
</template>

<script>
import VueZoomer from "vue-zoomer/src/vue-zoomer";
import VueImageZoomer from 'vue-image-zoomer';
import ImagesGrid from "@/components/detectionsresult/ImagesGrid";
import DetailImageShow from "@/components/detectionsresult/DetailImageShow";
import {mapState} from "vuex";
import {defaultApiInstance} from "@/api";
import ControlComponent from "@/components/detectionsresult/ControlComponent";

export default {
  name: "DetectionsResult",
  components: {
    ControlComponent,
    VueZoomer,
    VueImageZoomer,
    ImagesGrid,
    DetailImageShow,
  },
  data() {
    return {
      baseUrl: defaultApiInstance.defaults.baseURL,
      images: [
        {
          id: '1',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '2',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '3',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '4',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '5',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '6',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '7',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '8',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '9',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
        {
          id: '10',
          url: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
          lat: 43.123213213,
          lon: 44.123213213,
        },
      ],
      detectionImages: [],
      // selectedImage: [],
    }
  },
  methods: {
    selected(img, status) {
      this.$store.commit('detectionResult/setSelectedImage', {img: img, status: status.target.checked})
    },

    selectImg(img) {
      this.$store.commit('detectionResult/setSelectOneSelectImage', img);


      // if (this.selectedImage.length > 0) {
      //   this.selectedImage = this.selectedImage.filter(value => value.id !== img.id)
      // }
      // if (this.oneSelectImage != null) {
      //   this.$refs.zoom.reset();
      //   this.selectedImage = this.selectedImage.filter(value => value.id !== this.oneSelectImage.id)
      // }
      // this.oneSelectImage = img;
      // this.selectedImage.push(this.oneSelectImage);
      // if (this.oneSelectImage != null) {
      //   this.$refs.zoom.reset();
      // }
      // if (this.selectedImage.length > 0) {
      //   this.selectedImage = this.selectedImage.filter(value => value.id !== img.id)
      // }
      //
      // this.oneSelectImage = img;
      //
      //
      // // this.$refs.imagClick[index].checked = this.$refs.imagClick[index].checked !== true;
      // this.selectedImage.push(img);
    },

    createTask() {
      if (this.selectedImage.length > 0) {

        for (let i in this.selectedImage) {
          this.images = this.images.filter(value => value.id !== this.selectedImage[i].id);
        }
        this.selectedImage = [];
      }
    },

    leave() {
      this.$refs.zoom.reset();
    },
  },
  mounted() {
    this.$store.dispatch('detectionResult/getDetectionImages', {id: this.$route.params.id})
  },
  computed: {
    ...mapState({
      oneSelectImage: state => state.detectionResult.oneSelectImage,
      selectedImage: state => state.detectionResult.selectedImage,
    }),
  },
}
</script>

<style scoped>

.container-fluid {
  margin-top: 80px;
}

img {
  max-height: 300px;
}

img:hover {
  cursor: pointer;
}

.canvas-image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  /*style="object-fit: contain; width: 100%; height: 100%;"*/
}

.detail-show {
  position: sticky !important;
  top: 0 !important;
  height: 80vh !important;
  z-index: 999 !important;
}

.calendar {
  border: 1px solid #ced4da;
}


</style>