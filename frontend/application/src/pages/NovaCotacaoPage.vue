<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="cotar()">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <p class="text-h5 text-center">Informe os dados do bem que deseja cotar o seguro</p>
        <q-input label="Descrição do bem" v-model="form.bem"></q-input>
        <q-input label="Valor do bem" v-model="form.valor_do_bem"></q-input>
        <q-input label="Parcelas" v-model="form.quantidade_parcelas"></q-input>
        <div class="full-width q-pd-md">
          <q-btn
            label="Fazer cotação"
            color="primary"
            outlined
            rounded
            @cliked="cotar()"
            size="md"
            class="full-width"
          />
        </div>
      </div>
    </q-form>
    <v-if="cotacaoAtual">
      <div class="row justify-center">
        <div class="col-md-4 col-sm-6 col-xs-10 q-my-lg">
          <q-card class="my-card">
            <q-card-section class="bg-info text-white">
              <div class="text-subtitle2"{{cotacao.bem}}</div>
              <div class="text-subtitle2"{{cotacao.valor_do_bem}}</div>
              <div class="text-subtitle2"{{cotacao.valor_total_seguro}}</div>
              <div class="text-subtitle2"{{cotacao.quantidade_parcelas}}</div>
              <div class="text-subtitle2"{{cotacao.valor_parcela_seguro}}</div>
            </q-card-section>
            <q-separator />
            <q-card-actions align="right">
              <q-btn stack glossy color="accent" @click="salvarCotacao()">Salvar Cotação</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </v-if>
  </q-page>
</template>

<script>

import { ref } from 'vue'
import { api } from 'boot/axios'
export default {
  setup () {
    const form = ref({
      bem: '',
      valor_do_bem: '',
      quantidade_parcelas: ''
    })

    const $q = useQuasar()
    const cotacaoAtual = []
    const cotacao = []

    function salvarCotacao () {
      api.post('/api/v1/cotacao', form.value)
        .then((response) => {
          cotacao = response.data.cotacao
          cotacaoAtual = cotacao
        })
        .catch((error) => {
          if (error.response.status === 400) {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: error.response.data,
              icon: 'report_problem'
            })
          } else {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: 'Falha ao comunicar com o servidor.',
              icon: 'report_problem'
            })
          }
        })
    }

    function cotar () {
      api.post('/api/v1/cotacao', form.value)
        .then(() => {
          $q.notify({
            color: 'success',
            position: 'top',
            message: 'Cotação salvas',
            icon: 'report_problem'
          })
        })
        .catch((error) => {
          if (error.response.status === 400) {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: error.response.data,
              icon: 'report_problem'
            })
          } else {
            $q.notify({
              color: 'negative',
              position: 'top',
              message: 'Falha ao comunicar com o servidor.',
              icon: 'report_problem'
            })
          }
        })
    }
    return {
      form, salvarCotacao, cotacaoAtual, cotacao
    }
  }
}
</script>
