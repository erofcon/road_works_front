<template>
  <div class="card">
    <div class="card-header">
      Редактрование профиля
    </div>


    <div class="card-body">
      <form id="formAccountSettings" method="POST" onsubmit="return false">
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
</template>

<script>
export default {
  name: "AdvancedSettings"
}
</script>

<style scoped>

</style>