<template>
  <Card class="my-5 shadow-3">
    <template #title>
      <div class="text-xl font-bold hover:text-primary cursor-pointer">
        23.10.1996
      </div>
    </template>
    <template #content>
      <div class="flex justify-content-between align-items-center">
        <div>
          <p class="text-xl">hdsb sudjsd ushdsd iosds 0s99en</p>
          <div class="mt-2">
            <a href="#" class="text-sm text-gray-700 hover:text-primary">
              <i class="pi pi-user-edit"></i>
              admin
            </a>
            <a href="#" class="pl-4 text-sm text-gray-700 hover:text-primary">
              <i class="pi pi-user"></i>
              user
            </a>
          </div>

        </div>
        <div>
          <Chip label="выполнено" class="border-round bg-green-200"/>
        </div>

      </div>

    </template>

  </Card>

</template>

<script>
export default {
  name: "OneTaskComponent"
}
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>