<script setup>
import { ref } from 'vue'
import { useListaToDo } from '../stores/ListaCondivisa.js'
import { useAuthStore } from '../stores/authStore.js'

const ToDoCondiviso = useListaToDo()
const authStore = useAuthStore()

const task = ref('')

const addTask1 = () => {
  ToDoCondiviso.addTask(task.value)
  task.value = ''
  console.log(authStore.AccountAttivoOra)
}
</script>

<template>
  <div class="tutto">
    <div v-if="authStore.AccountAttivoOra">
      <h1>utente: {{ authStore.AccountAttivoOra }}</h1>
      <h1>benvenuto nel to do list</h1>
      <h2>aggiungi i tuoi task supito</h2>

      <div class="inputs">
        <input type="text" v-model="task" placeholder="inserisci il tsk" class="casella" />
        <input type="button" @click="addTask1" value="aggiungi" class="aggiungi" />
      </div>
    </div>
    <h1 v-else>prima Devi fare il login se no, non funziona il sito</h1>

    <router-link to="/lista"
      ><input type="button" value="Vai alla lista" class="buttone1"
    /></router-link>
    <router-link to="/registra"
      ><input type="button" value="sign in / login" class="buttone1"
    /></router-link>
    <input type="button" @click="authStore.logout" value="log out" class="buttone1"/>
  </div>
</template>

<style scoped>
.tutto {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* Titoli */
h1,
h2 {
  text-align: center;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
}

/* Container degli input */

/* Casella di testo */
.casella {
  border-radius: 30px 0 0 30px;
  height: 35px;
  font-size: 18px;
  padding: 0 15px;
  border: 1px solid #ccc;
  outline: none;
}

/* Bottone "aggiungi" */
.aggiungi {
  height: 37px;
  font-size: 18px;
  border-radius: 0 30px 30px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 20px;
}

.aggiungi:hover {
  background-color: #45a049;
}
.buttone1 {
  margin-top: 5%;
  background-color: hsl(210deg 100% 44%);
  height: 30px;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  padding: 0 20px;
  color: wheat;
}
.buttone1:hover {
  background-color: rgb(0, 174, 218);
  box-shadow: 0 5px 10px blue;
  color: black;
  font-size: 25px;
  height: 35px;
  border-radius: 100px;
  transition: ease 0.5s;
}
</style>
