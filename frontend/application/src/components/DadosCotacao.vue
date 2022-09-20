<template>
  <div class="row justify-center">
    <div class="col-md-4 col-sm-6 col-xs-10 q-my-lg">
      <q-card class="my-card">
        <q-card-section class="bg-info text-white">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn stack glossy color="accent">Salvar Cotação</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DadosCotacao',
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
