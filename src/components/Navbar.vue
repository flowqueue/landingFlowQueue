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
        <li>
          <a href="#home" @click="isOpen = false">{{ t("navbar.home") }}</a>
        </li>

        <li>
          <a href="#como-funciona" @click="isOpen = false">
            {{ t("navbar.howItWorks") }}
          </a>
        </li>

        <li>
          <a href="#funcionalidades" @click="isOpen = false">
            {{ t("navbar.features") }}
          </a>
        </li>

        <li>
          <a href="#casos-uso" @click="isOpen = false">
            {{ t("navbar.useCases") }}
          </a>
        </li>

        <li>
          <a href="#planes" @click="isOpen = false">
            {{ t("navbar.pricing") }}
          </a>
        </li>

        <li>
          <a href="#sobre-nosotros" @click="isOpen = false">
            {{ t("navbar.aboutUs") }}
          </a>
        </li>

        <li>
          <a href="#contacto" @click="isOpen = false">
            {{ t("navbar.contact") }}
          </a>
        </li>

        <li class="mobile-demo-item">
          <a href="#solicitar" class="solicitar-btn-mobile" @click="isOpen = false">
            {{ t("navbar.requestDemo") }}
          </a>
        </li>
      </ul>

      <div class="right-actions">
        <div class="language-switcher">
          <button @click="changeLanguage('es')" :class="{ active: locale === 'es' }">
            <span class="flag flag-es"></span>
            ES
          </button>

          <button @click="changeLanguage('en')" :class="{ active: locale === 'en' }">
            <span class="flag flag-us"></span>
            EN
          </button>
        </div>

        <a href="https://flowqueue.vercel.app/" class="solicitar-btn">
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
  width: 60px;
  height: 60px;
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
  gap: 1.45rem;
  list-style: none;
  margin: 0 auto;
  padding: 0;
}

.nav-links li a {
  color: #cbd7e6;
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.nav-links li a:hover {
  color: #ffffff;
}

/* Right actions */
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
  padding: 0.38rem 0.65rem;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.language-switcher button:hover,
.language-switcher button.active {
  background: #22c55e;
  border-color: #22c55e;
  color: #ffffff;
}

/* CSS flags */
.flag {
  width: 18px;
  height: 12px;
  display: inline-block;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
  flex-shrink: 0;
}

/* Spain flag */
.flag-es {
  background: linear-gradient(
      to bottom,
      #aa151b 0%,
      #aa151b 25%,
      #f1bf00 25%,
      #f1bf00 75%,
      #aa151b 75%,
      #aa151b 100%
  );
}

/* United States flag */
.flag-us {
  background:
      linear-gradient(
          to bottom,
          #b22234 0 7.69%,
          #ffffff 7.69% 15.38%,
          #b22234 15.38% 23.07%,
          #ffffff 23.07% 30.76%,
          #b22234 30.76% 38.45%,
          #ffffff 38.45% 46.14%,
          #b22234 46.14% 53.83%,
          #ffffff 53.83% 61.52%,
          #b22234 61.52% 69.21%,
          #ffffff 69.21% 76.9%,
          #b22234 76.9% 84.59%,
          #ffffff 84.59% 92.28%,
          #b22234 92.28% 100%
      );
  position: relative;
}

.flag-us::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 7px;
  background: #3c3b6e;
  top: 0;
  left: 0;
}

/* Demo button */
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

/* Medium screens */
@media (max-width: 1220px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-links li a {
    font-size: 0.78rem;
  }

  .solicitar-btn {
    padding: 0.55rem 0.85rem;
    font-size: 0.8rem;
  }

  .language-switcher button {
    padding: 0.34rem 0.5rem;
    font-size: 0.72rem;
  }

  .flag {
    width: 16px;
    height: 11px;
  }
}

/* Mobile menu */
@media (max-width: 1050px) {
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

/* Small phones */
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
    padding: 0.3rem 0.42rem;
    font-size: 0.68rem;
    gap: 0.25rem;
  }

  .flag {
    width: 15px;
    height: 10px;
  }
}
</style>
