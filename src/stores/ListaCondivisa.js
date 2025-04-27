import { defineStore } from 'pinia'
import { db } from '../firebase'
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { useAuthStore } from './authStore'

export const useListaToDo = defineStore('lista', {
  state: () => ({
    tasks: [],
    errorMessage: '',
  }),

  actions: {
    // addTask(task) {
    //   if (task.value !== '') {
    //     const authStore = useAuthStore()
    //     if (!authStore.user) throw new Error('Utente non loggato')
    //     this.tasks.push({ valore: task, completed: false, userId: authStore.user.uid })
    //   }
    // },

    deleteTask(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    },

    // Carica i task dal database con il filitro per utente
    async loadTasks() {
      this.errorMessage = ''
      try {
        const authStore = useAuthStore()
        if (!authStore.user) throw new Error('Utente non loggato')

        const q = query(collection(db, 'tasks'), where('userId', '==', authStore.user.uid))

        const querySnapshot = await getDocs(q)
        this.tasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        console.log(this.tasks)
      } catch (error) {
        this.errorMessage = error.message
      }
    },

    // Carica i task dal database di tutti
    // async loadTasks() {
    //   this.errorMessage = ''
    //   try {
    //     const q = query(collection(db, 'tasks')) // rimosso il filtro
    //     const querySnapshot = await getDocs(q)
    //     this.tasks = querySnapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }))
    //     console.log(this.tasks);
    //   } catch (error) {
    //     this.errorMessage = error.message
    //   }
    // },

    // Salva un nuovo task nel database
    async addTask(task) {
      if (task.value !== '') {
        this.errorMessage = ''
        try {
          const authStore = useAuthStore()
          if (!authStore.user) throw new Error('Utente non loggato')

          const newTask = { valore: task, completed: false, userId: authStore.user.uid }
          const docRef = await addDoc(collection(db, 'tasks'), newTask)

          newTask.id = docRef.id
          this.tasks.push(newTask)
          return docRef.id
        } catch (error) {
          this.errorMessage = error.message
        }
      }
    },

    // aggiurna doc
    async updateTask(taskID, updatedData) {
      try {
        const taskRef = doc(db, 'tasks', taskID)
        await updateDoc(taskRef, updatedData)
        console.log('Task aggiornato con successo')
      } catch (error) {
        console.error("Errore nell'aggiornare il task:", error)
        throw error
      }
    },

    // Eliminare un documento intero
    async deleteDocument(collectionName, docId) {
      try {
        await deleteDoc(doc(db, collectionName, docId))
        console.log('Documento eliminato con ID:', docId)
      } catch (error) {
        console.error('Errore eliminazione documento:', error)
        throw error
      }
    },
  },
})
