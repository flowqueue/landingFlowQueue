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
      <a href="#home" class="brand-group" @click="isOpen = false">
        <img src="@/assets/logo.png" alt="FlowQueue logo" class="logo" />
        <div class="brand">Flow<span class="texto-Queue">Queue</span></div>
      </a>

      <button class="toggle" @click="isOpen = !isOpen" aria-label="Open menu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>

      <ul :class="{ open: isOpen }" class="nav-links">
        <li><a href="#home" @click="isOpen = false">{{ t("navbar.home") }}</a></li>
        <li><a href="#como-funciona" @click="isOpen = false">{{ t("navbar.howItWorks") }}</a></li>
        <li><a href="#funcionalidades" @click="isOpen = false">{{ t("navbar.features") }}</a></li>
        <li><a href="#planes" @click="isOpen = false">{{ t("navbar.pricing") }}</a></li>
        <li><a href="#sobre-nosotros" @click="isOpen = false">{{ t("navbar.aboutUs") }}</a></li>
        <li><a href="#contacto" @click="isOpen = false">{{ t("navbar.contact") }}</a></li>

        <li class="mobile-demo-item">
          <a href="#solicitar" class="solicitar-btn-mobile" @click="isOpen = false">
            {{ t("navbar.requestDemo") }}
          </a>
        </li>
      </ul>

      <div class="right-actions">
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
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  height: 72px;
  background-color: #0c447c;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  box-shadow: 0 8px 24px rgba(12, 68, 124, 0.18);
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

/* Brand */
.brand-group {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-shrink: 0;
  text-decoration: none;
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background: white;
}

.brand {
  color: white;
  font-size: 1.05rem;
  font-weight: 800;
  white-space: nowrap;
  letter-spacing: -0.02em;
}

.texto-Queue {
  color: #22c55e;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2.2rem;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.nav-links li a {
  color: #cbd7e6;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.nav-links li a:hover {
  color: #ffffff;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-shrink: 0;
}

/* Language switcher */
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.language-switcher button {
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #d5dfed;
  padding: 0.35rem 0.55rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 800;
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
.solicitar-btn,
.solicitar-btn-mobile {
  background-color: #22c55e;
  color: white;
  padding: 0.6rem 1.15rem;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.solicitar-btn:hover,
.solicitar-btn-mobile:hover {
  background-color: #16a34a;
  transform: translateY(-2px);
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
  width: 24px;
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

.mobile-demo-item {
  display: none;
}

@media (max-width: 1180px) {
  .nav-links {
    gap: 1.35rem;
  }

  .nav-links li a {
    font-size: 0.82rem;
  }

  .solicitar-btn {
    padding: 0.55rem 0.85rem;
  }
}

@media (max-width: 980px) {
  .navbar {
    padding: 0 1.2rem;
  }

  .toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: #0c447c;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.25rem 1.5rem;
    gap: 1rem;
    margin: 0;
    box-shadow: 0 18px 30px rgba(12, 68, 124, 0.22);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li a {
    font-size: 0.95rem;
  }

  .solicitar-btn {
    display: none;
  }

  .mobile-demo-item {
    display: block;
    margin-top: 0.25rem;
  }

  .right-actions {
    margin-left: auto;
  }
}

@media (max-width: 480px) {
  .navbar {
    height: 66px;
    padding: 0 0.9rem;
  }

  .logo {
    width: 42px;
    height: 42px;
  }

  .brand {
    font-size: 0.95rem;
  }

  .nav-links {
    top: 66px;
  }

  .language-switcher button {
    padding: 0.28rem 0.42rem;
    font-size: 0.68rem;
  }
}
</style>