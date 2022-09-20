<template>
  <q-form class="row justify-center" @submit.prevent="">
    <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
      <p class="text-h5 text-center">Informe os dados do bem que deseja cotar o seguro</p>
      <q-input label="Descrição do bem" v-model="form.bem"></q-input>
      <q-input label="Valor do bem" v-model="form.valor_do_bem"></q-input>
      <div class="full-width q-pd-md">
        <q-btn
          label="Fazer cotação"
          color="primary"
          outlined
          rounded
          size="md"
          class="full-width"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FormCotacao',
  setup () {
    const form = ref({
      bem: '',
      valor_do_bem: ''
    })
    return {
      form
    }
  }
})
</script>
