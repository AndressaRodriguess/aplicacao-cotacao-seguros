<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Login</p>
        <q-input label="Email" v-model="form.email"></q-input>
        <q-input label="Senha" v-model="form.password"></q-input>
        <div class="full-width q-pd-md">
          <q-btn
            label="Login"
            color="primary"
            outlined
            rounded
            size="md"
            class="full-width"
          />
        </div>
        <div class="full-width q-pd-md">
          <q-btn
            label="Cadastre-se"
            flat
            class="full-width"
            size="md"
            @click="$router.replace('/cadastre-se')"
          />
      </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user-store'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  setup () {
    const form = ref({
      email: '',
      password: ''
    })

    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    console.log(user)
    return {
      form
    }
  }
})

</script>
