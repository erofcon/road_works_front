<template>
  <Authentication v-if="$route.path === '/login'"/>
  <App v-else/>
</template>

<script>
import Authentication from "@/views/Authentication.vue";
import App from "@/App.vue";

export default {
  name: "AppWrapper",
  components: {Authentication, App},
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>