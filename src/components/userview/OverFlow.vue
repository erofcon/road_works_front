<template>
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
       tabindex="0">

    <div class="col py-3">
      <section>
        <span>Последние задачи</span>
        <div class="row">
          <div class="col-6 my-3">
            <div class="card p-3">
              <div class="d-flex justify-content-between">
                <a href="#" class="text-decoration-none">22-10-1996</a>
                <span class="d-flex align-items-center">
                  <span class="status bg-success"></span>
                  <span class="status-text ms-1 text-muted">выполнено</span>
                </span>
              </div>

              <span class="mt-2 text-muted">something text</span>
            </div>
          </div>
          <div class="col-6 my-3">
            <div class="card p-3">
              <div class="d-flex justify-content-between">
                <a href="#" class="text-decoration-none">22-10-1996</a>
                <span class="d-flex align-items-center">
                  <span class="status bg-danger"></span>
                  <span class="status-text ms-1 text-muted">просрочено</span>
                </span>
              </div>
              <span class="mt-2 text-muted">something text</span>
            </div>
          </div>
          <div class="col-6 my-3">
            <div class="card p-3">
              <div class="d-flex justify-content-between">
                <a href="#" class="text-decoration-none">22-10-1996</a>
                <span class="d-flex align-items-center">
                  <span class="status bg-warning"></span>
                  <span class="status-text ms-1 text-muted">на исполнении</span>
                </span>
              </div>
              <span class="mt-2 text-muted">something text</span>
            </div>
          </div>
        </div>
      </section>


      <section>
        <p>184 за все время</p>
        <v-calendar is-expanded :attributes="attributes" @dayclick="dayClick"/>


      </section>


    </div>

  </div>
</template>

<script>
export default {
  name: "OverFlow",
  data() {
    return {
      attributes: [
        {
          dot: 'red',
          dates: [
            new Date(2022, 11, 1),
            new Date(2022, 11, 10),
            new Date(2022, 11, 22),
          ],
        },
        {
          dot: 'yellow',
          dates: [
            new Date(2022, 11, 22),
          ],
        },
        {
          dot: 'green',
          dates: [
            new Date(2022, 11, 22),
          ],
        },
      ],
    }
  },
  methods: {
    dayClick(e) {
      console.log(e.date.toLocaleString());
    }
  },
}
</script>

<style scoped>
a:hover {
  text-decoration: underline !important;
}

.status {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
}

.status-text {
  font-size: 12px;
}

</style>