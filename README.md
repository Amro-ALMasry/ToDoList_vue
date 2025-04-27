ToDoList Vue
Questa è una To-Do List creata con Vue 3, Vite e Firebase.
Permette agli utenti di registrarsi, accedere e gestire una lista di task personali (aggiungere, modificare e cancellare).
Ogni utente vede solo i propri task grazie all'integrazione con Firebase Authentication e Firestore Database.

Funzionalità principali
Registrazione e Login tramite Firebase Authentication

Salvataggio dei task personali su Firestore

Aggiunta, modifica e cancellazione dei task

Interfaccia semplice e pulita

Come scaricare e avviare il progetto
Clonare il repository

bash
Copia
Modifica
git clone https://github.com/Amro-ALMasry/ToDoList_vue.git
Entrare nella cartella del progetto

bash
Copia
Modifica
cd ToDoList_vue
Installare le dipendenze

bash
Copia
Modifica
npm install
Avviare il server di sviluppo

bash
Copia
Modifica
npm run dev
Aprire il progetto nel browser
(di solito sarà disponibile su http://localhost:5173 oppure ti verrà indicato nel terminale)

Tecnologie utilizzate
Vue 3

Vite

Firebase Authentication

Firebase Firestore Database

Pinia per la gestione dello stato

Vue Router

Note
🔒 Firebase Configuration:
Il file src/firebase.js contiene la configurazione di Firebase.
Per far funzionare il progetto devi avere un tuo progetto Firebase personale con Authentication e Firestore configurati.

Comandi principali

Comando	Descrizione
npm install	Installa tutte le dipendenze
npm run dev	Avvia il server di sviluppo
npm run build	Compila il progetto per produzione
Creato con ❤️ da Amro-ALMasry
