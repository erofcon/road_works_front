<template>
  <div class="flex justify-content-center align-items-center content">
    <Card class="p-4 ">
      <template #header>
        <span class="">Sneat</span>
        <h4 class="mb-2">Welcome to Sneat! 👋</h4>
        <p class="mb-4">Please sign-in to your account and start the adventure</p>
      </template>
      <template #content>


        <form @submit.prevent="login">
          <div class="field">
            <label for="username">username</label>
            <InputText v-model="username" id="username" class="w-full" required/>
          </div>
          <div class="field">
            <label for="password">password</label>
            <Password v-model="password" :feedback="false" id="password" class="w-full"/>
          </div>
          <div class="field">
            <Button label="войти" type="submit"/>
          </div>
        </form>

      </template>
    </Card>
  </div>
</template>

<script>

export default {
  name: "Authentication",
  data() {
    return {
      username: null,
      password: null,
      loading: false,
    }
  },
  methods: {
    login() {
      this.loading = true;
      const data = {username: this.username, password: this.password}

      this.$store.dispatch('authenticate/login', data).then(value => {
        this.$router.push("/");
      }).finally(() => {
        this.loading = false;
      })

    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 90vh;
}

::v-deep(.p-password input) {
  width: 15rem
}
</style>