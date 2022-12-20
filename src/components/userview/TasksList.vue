<template>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">

    <section class="my-2">
      <div class="border-bottom border-top py-3">
        <a href="#" class="text-primary fs-5 text-decoration-none">
          22-10-1994
        </a>
        <p class="text-muted mt-1 mb-2">
          Ldd ososd jauw ioasjdasd asdjsajdsad sdasd
        </p>
        <span class="d-flex align-items-center">
          <span class="status"></span>
          <span class="status-text ms-1 text-muted">выполнено</span>
        </span>
      </div>

      <div class="border-bottom border-top py-3">
        <a href="#" class="text-primary fs-5 text-decoration-none">
          22-10-1994
        </a>
        <p class="text-muted mt-1 mb-2">
          Ldd ososd jauw ioasjdasd asdjsajdsad sdasd
        </p>
        <span class="d-flex align-items-center">
          <span class="status"></span>
          <span class="status-text ms-1 text-muted">выполнено</span>
        </span>
      </div>

      <div class="border-bottom border-top py-3">
        <a href="#" class="text-primary fs-5 text-decoration-none">
          22-10-1994
        </a>
        <p class="text-muted mt-1 mb-2">
          Ldd ososd jauw ioasjdasd asdjsajdsad sdasd
        </p>
        <span class="d-flex align-items-center">
          <span class="status"></span>
          <span class="status-text ms-1 text-muted">выполнено</span>
        </span>
      </div>

    </section>


  </div>
</template>

<script>
export default {
  name: "TasksList"
}
</script>

<style scoped>
a:hover {
  text-decoration: underline !important;
}

.status {
  background-color: green;
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
}

.status-text {
  font-size: 12px;
}

</style>