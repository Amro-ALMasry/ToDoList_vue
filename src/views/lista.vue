<script setup>
import { ref } from 'vue'
import {useListaToDo} from "../stores/ListaCondivisa.js"
const ToDoCondiviso = useListaToDo();
const eliminaTask = async(t) =>{
  ToDoCondiviso.deleteTask(t)
  await ToDoCondiviso.deleteDocument("tasks", t.id);

}
</script>
<template>
  <ul>
    <li v-for="t in ToDoCondiviso.tasks" :key="t" class="tasks">
      <input type="checkbox" v-model="t.completed" class="checkbox" @change="ToDoCondiviso.updateTask(t.id,{completed: t.completed})"/>
      <p class="p">{{t.valore}}</p>
      <input type="button" @click="eliminaTask(t)" value="delete" />
    </li>
  </ul>
  <router-link to="/"><input type="button" value="Aggiungi Altro" class="buttone1"/></router-link>
  
</template>
<style scoped>
/* Lista dei task */
ul {
  list-style: none;
  padding: 0;
}

/* Singolo task */
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Checkbox */
.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

/* Testo del task */
.p{
  flex: 1;
  margin: 0 15px;
  text-align: left;
  font-size: 18px;
  font-family: Arial, sans-serif;
}

/* Bottone delete */
input[type="button"][value="delete"] {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

input[type="button"][value="delete"]:hover {
  background-color: #ff1a1a;
}

</style>
