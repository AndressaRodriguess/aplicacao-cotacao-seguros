import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: '',
      nome: 'andressa',
      email: 'email@',
      telefone: '11900000'
    },
    token: ''
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token
  },
  actions: {
    setUser (data) {
      this.user = data
    },
    setToken (data) {
      this.token = data
    }
  }
})
