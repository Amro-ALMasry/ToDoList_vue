// stores/authStore.js
import { defineStore } from 'pinia';
import { auth } from '../firebase'; // il tuo file firebase.js
import {useListaToDo} from './ListaCondivisa.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    errorMessage: '',
    AccountAttivoOra:""

  }),

  actions: {

    // Funzione per registrare un nuovo utente
    async register(email, password) {
      this.errorMessage = '';
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        alert("fatto")
      } catch (error) {
        this.errorMessage = error.message;
      } 
    },

    // Funzione per effettuare il login
    async login(email, password) {
      this.errorMessage = '';
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.AccountAttivoOra = this.user.email;
        console.log(this.AccountAttivoOra);
        return true;
      } catch (error) {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
      } 
    },

    // Funzione per effettuare il logout
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.AccountAttivoOra = "";
        console.log("Logout effettuato");
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

        // 🔥 Nuova funzione: controlla l'utente già loggato
        listenToAuthState() {
          const ToDoCondiviso = useListaToDo()
          onAuthStateChanged(auth, (user) => {
            if (user) {
              this.user = user;
              this.AccountAttivoOra = user.email;
              ToDoCondiviso.loadTasks();
              console.log("Utente già loggato:", this.AccountAttivoOra);
            } else {
              this.user = null;
              this.AccountAttivoOra = "";
              console.log("Nessun utente loggato");
            }
          });
          return true;
        }
  }
});
