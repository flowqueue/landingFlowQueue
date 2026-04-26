<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="brand-group">
        <img src="/src/assets/logo.png" alt="logo" class="logo">
        <div class="brand">Flow<span class="texto-Queue">Queue</span></div>
      </div>

      <button class="toggle" @click="isOpen = !isOpen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <ul :class="{ open: isOpen }" class="nav-links">
        <li><a href="#funcionalidades">Funciones</a></li>
        <li><a href="#como-funciona">Cómo funciona</a></li>
        <li><a href="#sedes">Sedes</a></li>
        <li><a href="#precios">Precios</a></li>
        <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
        <li><a href="#solicitar" class="solicitar-btn-mobile">Solicitar demo</a></li> 
      </ul>
 
      <a href="#solicitar" class="solicitar-btn">Solicitar demo</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  font-family: 'Inter', sans-serif;
  background-color: #0C447C;
  padding: 1rem 2rem;
  height: 60px;
  display: flex;
  margin-top:0.4rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Brand */
.brand-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.logo {
  border-radius: 50%;
  width:auto;
    height:60px;
    margin-left: 0;
    object-fit: cover;
}

.brand {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
}

.texto-Queue {
  color: #22c55e;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 6rem;       /* ← gap razonable */
  list-style: none;
  margin: 0 auto;    /* ← centra los links */
  padding: 0;
 
}

.nav-links li a {
  color: #c0c4d6;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: sans-serif;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav-links li a:hover {
  color: #ffffff;
}

/* Botón solicitar */
.solicitar-btn {
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s;
}

.solicitar-btn:hover {
  background-color: #16a34a;
}

/* Toggle hamburguesa */
.toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: white;
  transition: all 0.3s;
}

.brand-text {
  color: white;
  font-size: 1rem;
  font-family: sans-serif;
}

.brand-text strong {
  font-weight: 700;
}
.solicitar-btn-mobile {
  display: none; /* oculto en desktop */
}

/* Responsive */
/* Pantallas medianas - tablets */
@media (max-width: 1280px) {
  .nav-links {
    gap: 3rem;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .nav-links {
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .toggle {
    display: flex;
  }

  .solicitar-btn {
    display: none;
  }
    .solicitar-btn-mobile {
    display: inline-block; /* aparece en móvil */
    background-color: #22c55e;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #0C447C;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    gap: 1rem;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>