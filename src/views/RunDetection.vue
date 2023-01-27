<template>
  <div class="col-12 sm:col-10 md:col-8 mx-auto mb-8 px-4 container">
    <RunDetectionHeader class="mb-8"/>
    <TabMenu :model="items"/>
    <component v-bind:is="{...currentComponent}"/>
  </div>
</template>

<script>
import TrackerDetectionUpload from "@/components/rundetection/TrackerDetectionUpload.vue";
import XmlDetectionUpload from "@/components/rundetection/XmlDetectionUpload.vue";
import RunDetectionHeader from "@/components/rundetection/RunDetectionHeader.vue";
import {mapState} from "vuex";

export default {
  name: "RunDetection",
  components: {RunDetectionHeader, XmlDetectionUpload, TrackerDetectionUpload},
  data() {
    return {
      items: [
        {
          label: 'Загрузка данных с мобильного приложения',
          command: () => this.changeComponent('XmlDetectionUpload'),
        },
        {
          label: 'Загрузка данных с видеорегистратора',
          command: () => this.changeComponent('TrackerDetectionUpload')
        },
      ],
      currentComponent: XmlDetectionUpload,
    }
  },
  methods: {
    changeComponent(value) {
      if (value === 'XmlDetectionUpload' && this.currentComponent.name !== 'XmlDetectionUpload') {
        this.currentComponent = XmlDetectionUpload
      } else if (value === 'TrackerDetectionUpload' && this.currentComponent.name !== 'TrackerDetectionUpload') {
        this.currentComponent = TrackerDetectionUpload
      }
    }
  },
  mounted() {
    if (!this.currentUser.user.is_creator) {
      this.$router.push({name: 'pageNotFound'});
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.authenticate.currentUser,
    }),
  }
}
</script>

<style lang="scss" scoped>

:deep(.p-tabmenu) {
  .p-tabmenu-nav {
    background: none;
  }
}

:deep(.p-tabmenu .p-tabmenu-nav) {
  .p-tabmenuitem {
    background: none;
  }
}

:deep(.p-tabmenu .p-tabmenu-nav .p-tabmenuitem) {
  .p-menuitem-link {
    background: none;
  }
}

:deep(.p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover) {
  .p-menuitem-link {
    background: none;
  }
}

:deep(.p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight) {
  .p-menuitem-link {
    background: none;
  }
}

</style>