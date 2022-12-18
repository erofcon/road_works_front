<template>
  <div class="col-8 mt-4">
    <div class="card">
      <h5 class="card-header">
        Связанные пользователи
      </h5>

      <div class="card-body">
        <p class="text-muted mb-4">Display content from your connected accounts on your site</p>

        <div class="d-flex mb-3 align-items-center">
          <div class="flex-shrink-0">
            <img src="https://avatars.githubusercontent.com/u/104511593?s=16&amp;v=4" class="me-3 rounded-circle" height="30">
          </div>
          <div class="flex-grow-1 row">
            <div class="col-9 mb-sm-0 mb-2">
              <h6 class="mb-0">Erofcon</h6>
              <small class="text-muted">Calendar and contacts</small>
            </div>
            <div class="col text-end">
              <button class="btn btn-outline-primary">
                <i class="bi bi-box-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedUsers"
}
</script>

<style scoped>

</style>