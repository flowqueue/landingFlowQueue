<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isOpen = ref(false);
const { t, locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("flowqueue_lang", lang);
}
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
        <li><a href="#funcionalidades">{{ t("navbar.features") }}</a></li>
        <li><a href="#como-funciona">{{ t("navbar.howItWorks") }}</a></li>
        <li><a href="#sedes">{{ t("navbar.branches") }}</a></li>
        <li><a href="#precios">{{ t("navbar.pricing") }}</a></li>
        <li><a href="#sobre-nosotros">{{ t("navbar.aboutUs") }}</a></li>
        <li>
          <a href="#solicitar" class="solicitar-btn-mobile">
            {{ t("navbar.requestDemo") }}
          </a>
        </li>
      </ul>

      <div class="language-switcher">
        <button @click="changeLanguage('es')" :class="{ active: locale === 'es' }">
          ES
        </button>
        <button @click="changeLanguage('en')" :class="{ active: locale === 'en' }">
          EN
        </button>
      </div>

      <a href="#solicitar" class="solicitar-btn">
        {{ t("navbar.requestDemo") }}
      </a>
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
  margin-top: 0;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
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
  width: auto;
  height: 60px;
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
  gap: 4rem;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.nav-links li a {
  color: #c0c4d6;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: sans-serif;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.nav-links li a:hover {
  color: #ffffff;
}

/* Language switcher */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-shrink: 0;
}

.language-switcher button {
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #c0c4d6;
  padding: 0.35rem 0.55rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.language-switcher button:hover,
.language-switcher button.active {
  background: #22c55e;
  border-color: #22c55e;
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
  transition: background-color 0.2s ease;
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
  transition: all 0.3s ease;
}

.toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle span.open:nth-child(2) {
  opacity: 0;
}

.toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
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
  display: none;
}

/* Pantallas medianas */
@media (max-width: 1280px) {
  .nav-links {
    gap: 2.5rem;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .nav-links {
    gap: 1.5rem;
  }

  .solicitar-btn {
    padding: 0.5rem 0.9rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }

  .toggle {
    display: flex;
  }

  .solicitar-btn {
    display: none;
  }

  .language-switcher {
    margin-left: auto;
  }

  .solicitar-btn-mobile {
    display: inline-block;
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
    margin: 0;
  }

  .nav-links.open {
    display: flex;
  }
}

@media (max-width: 420px) {
  .brand {
    font-size: 0.9rem;
  }

  .logo {
    height: 48px;
  }

  .language-switcher button {
    padding: 0.3rem 0.45rem;
    font-size: 0.7rem;
  }
}
</style>