<template>
  <div class="card">
    <div class="row d-flex align-items-center">
      <div class="col-12 col-lg-6">
        <div class="card-body p-5">
          <h5 class="card-title text-primary">Актуальная задача</h5>
          <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="btn btn-sm btn-outline-primary">узнать больше</button>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card-body mx-0 my-0">
          <img class="img-fluid w-100"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mnbFnwVS1_FpHJcNiWcmB7azI7Wva29umA&usqp=CAU">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActualTask"
}
</script>

<style scoped>

img {
  clip-path: polygon(18% 0, 100% 0%, 100% 100%, 0 100%);
}
</style>