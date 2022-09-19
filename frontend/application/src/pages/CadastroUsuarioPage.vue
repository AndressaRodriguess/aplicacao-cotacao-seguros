<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Cadastre-se</p>
        <q-input
          label="Nome Completo"
          v-model="form.nome"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <q-input
          label="Telefone"
          v-model="form.telefone"
        />
        <q-input
          label="Senha"
          v-model="form.password"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório']"
        />
        <q-input
          label="Confirme a senha"
          v-model="form.conf_password"
          lazy-rules :rules="[ val => val && val.length > 0 || 'campo obrigatório', val => val==form.password || 'senhas não correspondem']"
        />
        <div class="full-width q-pd-md">
          <q-btn
            label="Cadastrar"
            color="primary"
            outlined
            rounded
            size="md"
            class="full-width"
          />
        </div>
        <div class="full-width q-pd-md">
          <q-btn
            label="Já tem cadastro? Faça login aqui"
            flat
            class="full-width"
            size="md"
            href="/login"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CadastroUsuarioPage',

  setup () {
    const form = ref({
      email: '',
      nome: '',
      telefone: '',
      conf_password: '',
      password: ''
    })

    return {
      form
    }
  }
})
</script>
