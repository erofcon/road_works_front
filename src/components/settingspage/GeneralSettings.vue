<template>
  <div class="card">
    <div class="card-header">
      Редактрование профиля
    </div>

    <!--        -->
    <div class="card-body">
      <div class="d-flex align-items-start align-items-sm-center gap-4">
        <img src="https://avatars.githubusercontent.com/u/104511593?s=16&amp;v=4" alt="user-avatar"
             class="d-block rounded" height="100" width="100" id="uploadedAvatar">
        <div>
          <label for="upload" class="btn btn-primary me-2 mb-4 btn-sm" tabindex="0">
            <span class="d-none d-sm-block">загрузить новое фото</span>
            <i class="bx bx-upload d-block d-sm-none"></i>
            <input type="file" id="upload" class="account-file-input" hidden="" accept="image/png, image/jpeg">
          </label>
          <button type="button" class="btn btn-outline-secondary account-image-reset mb-4 btn-sm">
            <i class="bx bx-reset d-block d-sm-none"></i>
            <span class="d-none d-sm-block">сбросить</span>
          </button>
          <p class="text-muted mb-0">Доступные форматы: JPG или PNG.</p>
        </div>
      </div>
    </div>
    <!--            -->

    <div class="card-body">
      <form id="formAccountSettings" method="POST" onsubmit="return false">
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="name" class="form-label">Имя</label>
            <input class="form-control" type="text" id="name" name="name" autofocus="">
          </div>
          <div class="mb-3 col-md-6">
            <label for="surName" class="form-label">Фамилия</label>
            <input class="form-control" type="text" name="surName" id="surName">
          </div>
          <div class="mb-3 col-md-6">
            <label for="email" class="form-label">E-mail</label>
            <input class="form-control" type="text" id="email" name="email"
                   placeholder="example@example.com">
          </div>
          <div class="mb-3 col-md-6">
            <label class="form-label" for="phoneNumber">Номер телефона</label>
            <div class="input-group input-group-merge">
              <input type="number" id="phoneNumber" name="phoneNumber" class="form-control"
                     placeholder="8999772211">
            </div>
          </div>
          <div class="mb-3 col-md-6">
            <label class="form-label" for="organization">Организация</label>
            <select id="organization" class="select2 form-select">
              <option value="">Пусто</option>
              <option value="minTrans">МинТранс КБР</option>
            </select>
          </div>
        </div>

        <div class="accordion" id="accordionExample">
          <div class="card accordion-item border-0">
            <h2 class="accordion-header" id="headingOne">
              <button type="button" class="accordion-button collapsed rounded-0 bg-white" data-bs-toggle="collapse"
                      data-bs-target="#accordionOne" aria-expanded="false" aria-controls="accordionOne">
                расширенные настройки
              </button>
            </h2>

            <div id="accordionOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style="">
              <div class="accordion-body">

                <form id="advancedSettings" method="POST" onsubmit="return false">
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="login" class="form-label">Логин</label>
                      <input class="form-control" type="text" id="login" name="name" autofocus="">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="password" class="form-label">Пароль</label>
                      <input type="password" class="form-control" id="password" placeholder="············">
                    </div>
                    <div class="mb-3 col-md-6">
                      <input class="form-check-input me-2" type="checkbox" value="" id="adminCheck">
                      <label class="form-check-label" for="adminCheck">
                        администратор
                      </label>
                    </div>
                    <div class="mb-3 col-md-6">
                      <input class="form-check-input me-2" type="checkbox" value="" id="superUser">
                      <label class="form-check-label" for="superUser">
                        супер пользователь
                      </label>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-outline-primary mt-5 btn-sm">Сохранить</button>
      </form>
    </div>


  </div>
</template>

<script>
export default {
  name: "GeneralSettings"
}
</script>

<style scoped>

</style>