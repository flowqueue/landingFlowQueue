<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";
const { t, tm, locale } = useI18n();
const steps = computed(() => tm("howItWorks.steps"));
const icons = ["⌕", "◇", "◎", "↗"];
</script>

<template>
  <section class="how" id="como-funciona">
    <div class="section-shell">
      <div class="how-header" data-reveal>
        <div>
          <span class="section-kicker">{{ t("howItWorks.label") }}</span>
          <h2 class="section-heading">{{ t("howItWorks.title") }}</h2>
        </div>
        <p class="section-copy">{{ t("howItWorks.description") }}</p>
      </div>
      <ol class="timeline">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          data-reveal
          :style="{ '--reveal-delay': `${index * 100}ms` }"
        >
          <span class="step-icon" aria-hidden="true">{{ icons[index] }}</span>
          <span class="step-index">0{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </li>
      </ol>
      <div class="pilot-banner" data-reveal="scale">
        <div>
          <span>{{ t("howItWorks.demoLabel") }}</span>
          <h3>{{ t("howItWorks.demoTitle") }}</h3>
          <p>{{ t("howItWorks.demoDescription") }}</p>
        </div>
        <a
          class="button-primary"
          data-magnetic
          :href="FLOWQUEUE_APP_URL"
          target="_blank"
          rel="noopener noreferrer"
          >{{ t("howItWorks.demoButton") }} <span aria-hidden="true">↗</span></a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.how {
  padding: 120px 24px;
  background: white;
}
.how-header {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;
  align-items: end;
  margin-bottom: 60px;
}
.how-header .section-heading {
  margin-bottom: 0;
}
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
}
.timeline::after {
  content: "";
  position: absolute;
  z-index: 4;
  top: -4px;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow:
    0 0 0 5px rgba(57, 217, 138, 0.14),
    0 0 18px rgba(57, 217, 138, 0.7);
  animation: timeline-flow 5s ease-in-out infinite;
}
.timeline li {
  position: relative;
  min-height: 290px;
  padding: 34px 24px 30px;
  border-right: 1px solid var(--line);
}
.timeline li:first-child {
  border-left: 1px solid var(--line);
}
.timeline li::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--paper);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease;
}
.timeline li:hover::before {
  transform: scaleY(1);
}
.timeline li > * {
  position: relative;
}
.step-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  margin-bottom: 38px;
  border-radius: 50%;
  background: var(--sky);
  color: var(--signal-dark);
  font-size: 1.4rem;
}
.step-index {
  position: absolute;
  top: 35px;
  right: 22px;
  color: #9bacb7;
  font-family: "Manrope";
  font-size: 0.75rem;
  font-weight: 800;
}
.timeline h3 {
  margin-bottom: 12px;
  font-size: 1.18rem;
}
.timeline p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.65;
}
.pilot-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 40px;
  padding: 32px 36px;
  border-radius: var(--radius-md);
  background: var(--navy);
  color: white;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.pilot-banner::after {
  content: "";
  position: absolute;
  inset: -120% -25%;
  background: linear-gradient(
    110deg,
    transparent 43%,
    rgba(255, 255, 255, 0.14) 50%,
    transparent 57%
  );
  transform: translateX(-45%);
  animation: banner-light 6s ease-in-out infinite;
  pointer-events: none;
}
.pilot-banner > * {
  position: relative;
  z-index: 1;
}
.pilot-banner > div > span {
  color: var(--signal);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.pilot-banner h3 {
  margin: 6px 0;
  font-size: 1.45rem;
}
.pilot-banner p {
  margin: 0;
  color: #bdd1dd;
}
.pilot-banner .button-primary {
  flex-shrink: 0;
}
@keyframes timeline-flow {
  0%,
  100% {
    left: 0;
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
  }
  50% {
    left: calc(100% - 8px);
  }
}
@keyframes banner-light {
  0%,
  55% {
    transform: translateX(-55%);
  }
  80%,
  100% {
    transform: translateX(55%);
  }
}
@media (max-width: 900px) {
  .how {
    padding: 90px 20px;
  }
  .how-header {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .timeline {
    grid-template-columns: 1fr 1fr;
  }
  .timeline::after {
    display: none;
  }
  .timeline li:nth-child(3) {
    border-left: 1px solid var(--line);
  }
}
@media (max-width: 600px) {
  .how {
    padding: 75px 16px;
  }
  .timeline {
    grid-template-columns: 1fr;
  }
  .timeline li,
  .timeline li:nth-child(3) {
    min-height: auto;
    border-left: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .step-icon {
    margin-bottom: 24px;
  }
  .pilot-banner {
    align-items: stretch;
    flex-direction: column;
    padding: 26px 22px;
  }
  .pilot-banner .button-primary {
    width: 100%;
  }
}
</style>
