<script setup>
import { ref } from 'vue';
import {useAuthStore} from "../stores/authStore.js"
const authStore = useAuthStore() 
const email = ref("");
const password = ref("");
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="registration-container">
    <h1>Registrati</h1>
    
    <div class="input-group">
      <input 
        type="email" 
        v-model="email" 
        placeholder=" " 
        class="form-input"
      >
      <label class="input-label">Inserisci la tua email</label>
      <span class="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </span>
    </div>
    
    <div class="input-group">
      <input 
        :type="showPassword ? 'text' : 'password'" 
        v-model="password" 
        placeholder=" " 
        class="form-input"
      >
      <label class="input-label">Inserisci la password</label>
      <span class="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </span>
      <span class="password-toggle" @click="togglePasswordVisibility">
        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      </span>
    </div>
    <input type="button" @click="authStore.register(email,password)" class="register-button" value="Registrati">
    
    <div class="login-link">
      Hai già un account? <router-link to="login">Accedi</router-link>
    </div>
  </div>
</template>

<style scoped>
.registration-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.input-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-input {
  width: 90%;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
  background: transparent;
}

.form-input:focus {
  border-color: #4a6cf7;
}

.form-input:focus + .input-label,
.form-input:not(:placeholder-shown) + .input-label {
  transform: translateY(-1.5rem) translateX(-0.5rem) scale(0.85);
  background: white;
  padding: 0 0.5rem;
  color: #4a6cf7;
}

.input-label {
  position: absolute;
  top: 1rem;
  left: 2.5rem;
  color: #777;
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
}

.password-toggle {
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
}

.password-toggle:hover {
  color: #4a6cf7;
}

.register-button {
  width: 105%;
  padding: 0.8rem;
  background: #4a6cf7;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: 0.5rem;
  
  
}

.register-button:hover {
  background: #3a5bd9;
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #777;
}

.login-link a {
  color: #4a6cf7;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>