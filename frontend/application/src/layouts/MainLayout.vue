<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="home" class="q-mr-sm" to="/" />
        <q-toolbar-title>
          Cotação Seguro
        </q-toolbar-title>
        <q-btn dense flat round icon="account_circle" size="lg" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://img.freepik.com/free-photo/glitch-effect-black-background_53876-129025.jpg?w=1380&t=st=1663643889~exp=1663644489~hmac=48ee1149075af4c7da066a6e2f7da5d3314d7919ccd9ae8b2a92f4805e79ea7a" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/3899/3899618.png">
            </q-avatar>
            <div class="text-weight-bold">{{user.nome}}</div>
            <div>{{user.email}}</div>
            <div>{{user.telefone}}</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user-store'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const rightDrawerOpen = ref(false)
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      user
    }
  }
})
</script>
