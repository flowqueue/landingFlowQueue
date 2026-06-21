<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";

const isOpen = ref(false);
const isScrolled = ref(false);
const scrollProgress = ref(0);
const motionEnabled = ref(
  document.documentElement.dataset.motion !== "reduced",
);
const activeHash = ref("#producto");
let sectionObserver;
const { t, locale } = useI18n();

const links = [
  { href: "#producto", key: "features" },
  { href: "#como-funciona", key: "howItWorks" },
  { href: "#casos-uso", key: "useCases" },
  { href: "#sobre-nosotros", key: "aboutUs" },
  { href: "#contacto", key: "contact" },
];

function closeMenu() {
  isOpen.value = false;
}
function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("flowqueue_lang", lang);
  document.documentElement.lang = lang;
  closeMenu();
}
function onEscape(event) {
  if (event.key === "Escape") closeMenu();
}
function onScroll() {
  isScrolled.value = window.scrollY > 24;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value =
    scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
}
function toggleMotion() {
  motionEnabled.value = !motionEnabled.value;
  const mode = motionEnabled.value ? "full" : "reduced";
  document.documentElement.dataset.motion = mode;
  localStorage.setItem("flowqueue_motion", mode);
}

watch(isOpen, (value) => document.body.classList.toggle("menu-open", value));
window.addEventListener("keydown", onEscape);
onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) activeHash.value = `#${visible.target.id}`;
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
  );
  links.forEach(({ href }) => {
    const section = document.querySelector(href);
    if (section) sectionObserver.observe(section);
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEscape);
  window.removeEventListener("scroll", onScroll);
  sectionObserver?.disconnect();
  document.body.classList.remove("menu-open");
});
</script>

<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <nav class="nav-shell" aria-label="Navegación principal">
      <a
        href="#home"
        class="brand"
        aria-label="FlowQueue, inicio"
        @click="closeMenu"
      >
        <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>Flow<span>Queue</span></span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
        :aria-expanded="isOpen"
        aria-controls="primary-navigation"
        @click="isOpen = !isOpen"
      >
        <span></span><span></span>
      </button>

      <div id="primary-navigation" class="nav-panel" :class="{ open: isOpen }">
        <ul class="nav-links">
          <li v-for="link in links" :key="link.key">
            <a
              :href="link.href"
              :class="{ active: activeHash === link.href }"
              @click="closeMenu"
              >{{ t(`navbar.${link.key}`) }}</a
            >
          </li>
        </ul>

        <div class="nav-actions">
          <button
            class="motion-control"
            type="button"
            :aria-label="
              motionEnabled
                ? locale === 'es'
                  ? 'Pausar animaciones'
                  : 'Pause animations'
                : locale === 'es'
                  ? 'Activar animaciones'
                  : 'Enable animations'
            "
            :title="
              motionEnabled
                ? locale === 'es'
                  ? 'Pausar animaciones'
                  : 'Pause animations'
                : locale === 'es'
                  ? 'Activar animaciones'
                  : 'Enable animations'
            "
            @click="toggleMotion"
          >
            {{ motionEnabled ? "Ⅱ" : "▶" }}
          </button>
          <div
            class="language"
            :aria-label="locale === 'es' ? 'Idioma' : 'Language'"
          >
            <button
              type="button"
              :aria-pressed="locale === 'es'"
              :class="{ active: locale === 'es' }"
              @click="changeLanguage('es')"
            >
              ES
            </button>
            <button
              type="button"
              :aria-pressed="locale === 'en'"
              :class="{ active: locale === 'en' }"
              @click="changeLanguage('en')"
            >
              EN
            </button>
          </div>
          <a
            class="nav-cta"
            data-magnetic
            :href="FLOWQUEUE_APP_URL"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
            >{{ t("navbar.requestDemo") }} <span aria-hidden="true">↗</span></a
          >
        </div>
      </div>
      <span
        class="scroll-progress"
        :style="{ width: `${scrollProgress}%` }"
        aria-hidden="true"
      ></span>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  padding: 14px 20px;
  pointer-events: none;
  animation: nav-enter 0.7s 0.1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  transition: padding 0.25s ease;
}
.site-header.scrolled {
  padding-top: 8px;
}
.nav-shell {
  width: min(100%, 1240px);
  min-height: 66px;
  margin: auto;
  padding: 8px 10px 8px 18px;
  display: flex;
  align-items: center;
  gap: 28px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 20px;
  background: rgba(3, 40, 63, 0.9);
  box-shadow: 0 14px 40px rgba(0, 25, 45, 0.22);
  backdrop-filter: blur(18px);
  pointer-events: auto;
  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}
.scrolled .nav-shell {
  background: rgba(3, 40, 63, 0.96);
  box-shadow: 0 16px 44px rgba(0, 20, 36, 0.34);
  border-color: rgba(57, 217, 138, 0.18);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: -0.03em;
  white-space: nowrap;
}
.brand > span:last-child > span {
  color: var(--signal);
}
.brand-mark {
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
}
.brand-mark i {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 4px rgba(57, 217, 138, 0.13);
}
.brand-mark i:nth-child(2) {
  animation: brand-pulse 2.2s ease-out infinite;
}
.brand-mark i:first-child {
  transform: translate(-8px, 5px);
}
.brand-mark i:last-child {
  transform: translate(8px, -5px);
}
.brand-mark::before,
.brand-mark::after {
  content: "";
  position: absolute;
  width: 17px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  transform: rotate(-30deg);
}
.brand-mark::after {
  transform: rotate(30deg);
}
.nav-panel {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.nav-links a {
  position: relative;
  color: #c6d8e4;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
}
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -9px;
  height: 2px;
  border-radius: 99px;
  background: var(--signal);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.25s ease;
}
.nav-links a:hover {
  color: white;
}
.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}
.nav-links a.active {
  color: white;
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.motion-control {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  background: transparent;
  color: #c6d8e4;
  font-size: 0.7rem;
  font-weight: 900;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}
.motion-control:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
.language {
  display: flex;
  padding: 3px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
}
.language button {
  width: 34px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #a9c2d3;
  font-size: 0.72rem;
  font-weight: 800;
  cursor: pointer;
}
.language button.active {
  background: white;
  color: var(--navy-deep);
}
.nav-cta {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  border-radius: 11px;
  background: var(--signal);
  color: var(--ink);
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}
.nav-cta span {
  transition: transform 0.2s ease;
}
.nav-cta:hover span {
  transform: translate(3px, -3px);
}
.scroll-progress {
  position: absolute;
  left: 18px;
  bottom: -1px;
  height: 2px;
  max-width: calc(100% - 36px);
  border-radius: 99px;
  background: var(--signal);
  box-shadow: 0 0 12px rgba(57, 217, 138, 0.7);
  transition: width 0.08s linear;
}
.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  margin-left: auto;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 11px;
  background: transparent;
  cursor: pointer;
}
.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 5px auto;
  background: white;
}

@media (max-width: 980px) {
  .site-header {
    padding: 10px 12px;
  }
  .nav-shell {
    min-height: 58px;
    padding: 7px 8px 7px 14px;
    border-radius: 16px;
  }
  .menu-toggle {
    display: block;
  }
  .nav-panel {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    display: none;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 18px;
    background: var(--navy-deep);
    box-shadow: var(--shadow-lg);
  }
  .nav-panel.open {
    display: block;
    animation: reveal 0.2s ease both;
  }
  .nav-links {
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }
  .nav-links a {
    display: block;
    padding: 14px 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1rem;
  }
  .nav-actions {
    margin-top: 18px;
    justify-content: space-between;
  }
  .nav-cta {
    flex: 1;
    justify-content: center;
  }
}
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
}
@keyframes nav-enter {
  from {
    opacity: 0;
    transform: translateY(-28px);
  }
}
@keyframes brand-pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(57, 217, 138, 0);
  }
}
</style>
