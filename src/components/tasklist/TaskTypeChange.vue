<template>
  <Card>
    <template #content>
      <div class="field-radiobutton">
        <RadioButton inputId="city1" name="city" value="is_done" v-model="city"/>
        <label for="city1">Выполненые задачи</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="city2" name="city" value="on_execution" v-model="city"/>
        <label for="city2">Задачи на исполнении</label>
      </div>
      <div class="field-radiobutton">
        <RadioButton inputId="city3" name="city" value="is_expired" v-model="city"/>
        <label for="city3">Просроченные задачи</label>
      </div>

    </template>
  </Card>
</template>

<script>
export default {
  name: "TaskTypeChange",
  data() {
    return {
      city: null,

    }
  },
  created() {
    this.city = 'is_done'
  }

}
</script>

<style scoped>

</style>