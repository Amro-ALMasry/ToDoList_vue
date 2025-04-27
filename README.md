# ToDoList Vue

Questa è una **To-Do List** creata con **Vue 3**, **Vite** e **Firebase**.  
Permette agli utenti di **registrarsi**, **accedere** e **gestire una lista di task** personali (aggiungere, modificare e cancellare).  
Ogni utente vede solo i propri task grazie all'integrazione con **Firebase Authentication** e **Firestore Database**.

---

## Funzionalità principali

- Registrazione e Login tramite Firebase Authentication
- Salvataggio dei task personali su Firestore
- Aggiunta, modifica e cancellazione dei task
- Interfaccia semplice e pulita

---

## Come scaricare e avviare il progetto

1. **Clonare il repository**

```bash
git clone https://github.com/Amro-ALMasry/ToDoList_vue.git
```

2. **Entrare nella cartella del progetto**

```bash
cd ToDoList_vue
```

3. **Installare le dipendenze**

```bash
npm install
```

4. **Avviare il server di sviluppo**

```bash
npm run dev
```

5. **Aprire il progetto nel browser**  
   (di solito sarà disponibile su `http://localhost:5173` oppure ti verrà indicato nel terminale)

---

## Tecnologie utilizzate

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firebase Firestore Database](https://firebase.google.com/products/firestore)
- [Pinia](https://pinia.vuejs.org/) per la gestione dello stato
- [Vue Router](https://router.vuejs.org/)

---

## Note

🔒 **Firebase Configuration**:  
Il file `src/firebase.js` contiene la configurazione di Firebase.  
Per far funzionare il progetto devi avere un tuo progetto Firebase personale con Authentication e Firestore configurati.

---

## Comandi principali

| Comando         | Descrizione                        |
| --------------- | ---------------------------------- |
| `npm install`   | Installa tutte le dipendenze       |
| `npm run dev`   | Avvia il server di sviluppo        |
| `npm run build` | Compila il progetto per produzione |

---

> Creato con ❤️ da [Amro-ALMasry](https://github.com/Amro-ALMasry)
