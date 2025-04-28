<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/authStore.js'
import { useListaToDo } from './stores/ListaCondivisa.js'
const ToDoCondiviso = useListaToDo()
const authStore = useAuthStore()



authStore.listenToAuthState()
  
</script>

<template>

  <RouterView />
</template>

<style scoped>

</style>
