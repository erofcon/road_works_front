<template>
  <Card>
    <template #title>
      <span>Связаные пользователи</span>
    </template>

  </Card>

  <Panel header="Custom Header" class="dark-panel"/>
</template>

<script>
export default {
  name: "RelatedUsers"
}
</script>

<style lang="scss" scoped>
::v-deep(.p-card.p-component) {
  .p-card-body {
    background: #212121;
  }

}

::v-deep(.dark-panel.p-panel) {
  .p-panel-titlebar {
    background: #212121;
  }

}



//.p-card .p-card-body {
//  padding: 1.25rem;
//}
</style>