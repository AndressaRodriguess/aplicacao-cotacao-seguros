<template>
  <q-page padding>
    <form-cotacao></form-cotacao>
    <dados-cotacao></dados-cotacao>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import FormCotacao from '../components/FormCotacao.vue'
import DadosCotacao from '../components/DadosCotacao.vue'

export default {
  components: { FormCotacao, DadosCotacao },
  setup () {
    const form = ref({
      bem: '',
      valor_do_bem: ''
    })
    return {
      form
    }
  }
}
</script>
