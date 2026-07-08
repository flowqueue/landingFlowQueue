<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import ProblemSection from "@/components/ProblemSection.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import ProfilesSection from "@/components/ProfilesSection.vue";
import UseCases from "@/components/UseCases.vue";
import Access from "@/components/Access.vue";
import TeamSection from "@/components/TeamSection.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import PageIntro from "@/components/PageIntro.vue";
import AboutTheProduct from "@/components/AboutTheProduct.vue";

const { locale } = useI18n();
const showBackToTop = ref(false);
let revealObserver;
let pointerFrame;
let activeMagnetic;
let activeTilt;

function resetInteractiveElement(element) {
  if (!element) return;
  element.style.removeProperty("--magnetic-x");
  element.style.removeProperty("--magnetic-y");
  element.style.removeProperty("transform");
}

function updatePointer(event) {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  cancelAnimationFrame(pointerFrame);
  pointerFrame = requestAnimationFrame(() => {
    document.documentElement.style.setProperty(
      "--pointer-x",
      `${event.clientX}px`,
    );
    document.documentElement.style.setProperty(
      "--pointer-y",
      `${event.clientY}px`,
    );

    if (document.documentElement.dataset.motion === "reduced") return;

    const magnetic = event.target.closest("[data-magnetic]");
    if (activeMagnetic !== magnetic) resetInteractiveElement(activeMagnetic);
    activeMagnetic = magnetic;
    if (magnetic) {
      const rect = magnetic.getBoundingClientRect();
      magnetic.style.setProperty(
        "--magnetic-x",
        `${(event.clientX - rect.left - rect.width / 2) * 0.16}px`,
      );
      magnetic.style.setProperty(
        "--magnetic-y",
        `${(event.clientY - rect.top - rect.height / 2) * 0.2}px`,
      );
    }

    const tilt = event.target.closest("[data-tilt]");
    if (activeTilt !== tilt) resetInteractiveElement(activeTilt);
    activeTilt = tilt;
    if (tilt?.classList.contains("is-visible")) {
      const rect = tilt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = `perspective(1100px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-5px)`;
    }
  });
}

function updateBackToTop() {
  showBackToTop.value = window.scrollY > 900;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(async () => {
  await nextTick();
  window.addEventListener("pointermove", updatePointer, { passive: true });
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  const elements = document.querySelectorAll("[data-reveal]");

  // Resolve deep links after Vue has rendered every section.
  if (window.location.hash) {
    window.setTimeout(() => {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ block: "start" });
    }, 120);
  }

  if (
    document.documentElement.dataset.motion === "reduced" ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
  );

  elements.forEach((element) => revealObserver.observe(element));
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  cancelAnimationFrame(pointerFrame);
  resetInteractiveElement(activeMagnetic);
  resetInteractiveElement(activeTilt);
  window.removeEventListener("pointermove", updatePointer);
  window.removeEventListener("scroll", updateBackToTop);
});
</script>

<template>
  <PageIntro />
  <a class="skip-link" href="#contenido">{{
    locale === "es" ? "Saltar al contenido" : "Skip to content"
  }}</a>
  <div class="pointer-aura" aria-hidden="true"></div>
  <Navbar />
  <main id="contenido">
    <Home />
    <div class="capability-rail" aria-label="Capacidades de FlowQueue">
      <div class="rail-track">
        <span>Ticket virtual</span><i></i><span>Cola en vivo</span><i></i
        ><span>Alertas inteligentes</span><i></i><span>Analítica por sede</span
        ><i></i><span>Gestión multiusuario</span><i></i>
        <span aria-hidden="true">Ticket virtual</span><i aria-hidden="true"></i
        ><span aria-hidden="true">Cola en vivo</span><i aria-hidden="true"></i
        ><span aria-hidden="true">Alertas inteligentes</span
        ><i aria-hidden="true"></i
        ><span aria-hidden="true">Analítica por sede</span
        ><i aria-hidden="true"></i
        ><span aria-hidden="true">Gestión multiusuario</span
        ><i aria-hidden="true"></i>
      </div>
    </div>
    <ProblemSection />
    <HowItWorks />
    <ProfilesSection />
    <UseCases />
    <AboutTheProduct/>
    <Access />
    <TeamSection />
    <Contact />
  </main>
  <Footer />
  <Transition name="back-top">
    <button
      v-if="showBackToTop"
      class="back-to-top"
      type="button"
      :aria-label="locale === 'es' ? 'Volver arriba' : 'Back to top'"
      @click="scrollToTop"
    >
      <span aria-hidden="true">↑</span>
    </button>
  </Transition>
</template>

<style scoped>
.capability-rail {
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 17px 0;
  border-block: 1px solid rgba(57, 217, 138, 0.28);
  background: var(--signal);
  color: var(--ink);
}
.rail-track {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 26px;
  animation: rail 24s linear infinite;
}
.rail-track span {
  font-family: "Manrope", sans-serif;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
}
.rail-track i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--navy);
}
.capability-rail:hover .rail-track {
  animation-play-state: paused;
}
@keyframes rail {
  to {
    transform: translateX(-50%);
  }
}
.pointer-aura {
  position: fixed;
  z-index: 900;
  top: 0;
  left: 0;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.12;
  background: radial-gradient(circle, rgba(57, 217, 138, 0.7), transparent 68%);
  mix-blend-mode: screen;
  transform: translate(
    calc(var(--pointer-x, 50vw) - 50%),
    calc(var(--pointer-y, 50vh) - 50%)
  );
  transition: opacity 0.25s ease;
}
:global([data-magnetic]) {
  translate: var(--magnetic-x, 0) var(--magnetic-y, 0);
  transition:
    translate 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.22s ease,
    box-shadow 0.22s ease;
}
:global([data-tilt]) {
  transform-style: preserve-3d;
  will-change: transform;
}
:global(body.intro-visible) {
  overflow: hidden;
}
.back-to-top {
  position: fixed;
  z-index: 950;
  right: 24px;
  bottom: 24px;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  background: var(--navy-deep);
  color: var(--signal);
  box-shadow: 0 18px 38px rgba(3, 31, 53, 0.28);
  font-size: 1.15rem;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}
.back-to-top:hover {
  transform: translateY(-5px);
  background: var(--navy);
}
.back-top-enter-active,
.back-top-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
  transform: translateY(14px) scale(0.85);
}
@media (max-width: 760px), (pointer: coarse) {
  .pointer-aura {
    display: none;
  }
  .back-to-top {
    right: 16px;
    bottom: 16px;
  }
}
</style>
