<template>
  <div class="container">
    <div class="row py-5 mx-auto">
      <div class="col-lg-3 mb-5">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-dark active navigation" @click="changeComponent('GeneralSettings')" href="#">
              <i class="bi bi-gear me-2"></i>
              <span>General</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark navigation" @click="changeComponent('AdvancedSettings')" href="#">
              <i class="bi bi-file-lock me-2"></i>
              <span>Advanced Settings</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark navigation" @click="changeComponent('OrganizationComponent')" href="#">
              <i class="bi bi-buildings me-2"></i>
              <span>Огранизация</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-lg-6">
        <component v-bind:is="{...currentComponent}"/>
      </div>
    </div>
  </div>
</template>

<script>

import GeneralSettings from "@/components/settingspage/GeneralSettings";
import AdvancedSettings from "@/components/settingspage/AdvancedSettings";
import OrganizationComponent from "@/components/settingspage/OrganizationComponent";

export default {
  name: "SettingsPage",
  components: {
    GeneralSettings,
  },
  data() {
    return {
      currentComponent: GeneralSettings,
    }
  },
  methods: {
    changeComponent(value) {
      if (value === 'GeneralSettings' && this.currentComponent.name !== 'GeneralSettings') {
        this.currentComponent = GeneralSettings
      } else if (value === 'AdvancedSettings' && this.currentComponent.name !== 'AdvancedSettings') {
        this.currentComponent = AdvancedSettings
      } else if (value === 'OrganizationComponent' && this.currentComponent.name !== 'OrganizationComponent') {
        this.currentComponent = OrganizationComponent
      }

    }
  },
}
</script>

<style scoped>

.navigation:hover {
  border-radius: 6px;
  background-color: #F4F5F7;
}

.active {
  border-radius: 6px;
  background-color: #F4F5F7;
}

</style>