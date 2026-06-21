<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();
const problems = computed(() => tm("problem.items"));
const sectionRef = ref(null);
const displayValues = ref(["0%", "0%", "24/7"]);
let counterObserver;
let counterFrame;
const outcomes = computed(() =>
  locale.value === "es"
    ? [
        { value: displayValues.value[0], label: "objetivo de menor espera" },
        { value: displayValues.value[1], label: "turnos remotos proyectados" },
        { value: displayValues.value[2], label: "visibilidad de la cola" },
      ]
    : [
        { value: displayValues.value[0], label: "shorter-wait target" },
        { value: displayValues.value[1], label: "projected remote tickets" },
        { value: displayValues.value[2], label: "queue visibility" },
      ],
);

function animateCounters() {
  if (document.documentElement.dataset.motion === "reduced") {
    displayValues.value = ["30%", "70%", "24/7"];
    return;
  }

  const startedAt = performance.now();
  const duration = 1300;
  const tick = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    displayValues.value = [
      `${Math.round(30 * eased)}%`,
      `${Math.round(70 * eased)}%`,
      progress > 0.75 ? "24/7" : "···",
    ];
    if (progress < 1) counterFrame = requestAnimationFrame(tick);
  };
  counterFrame = requestAnimationFrame(tick);
}

onMounted(() => {
  counterObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      animateCounters();
      counterObserver.disconnect();
    },
    { threshold: 0.35 },
  );
  counterObserver.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  counterObserver?.disconnect();
  cancelAnimationFrame(counterFrame);
});
</script>

<template>
  <section ref="sectionRef" class="problem" id="problema">
    <div class="section-shell problem-layout">
      <div class="problem-intro" data-reveal="left">
        <span class="section-kicker">{{ t("problem.label") }}</span>
        <h2 class="section-heading">{{ t("problem.title") }}</h2>
        <p class="section-copy">{{ t("problem.description") }}</p>
        <div class="outcomes" aria-label="Objetivos del piloto">
          <div v-for="outcome in outcomes" :key="outcome.label">
            <strong>{{ outcome.value }}</strong
            ><span>{{ outcome.label }}</span>
          </div>
        </div>
        <p class="data-note">
          *
          {{
            locale === "es"
              ? "Objetivos para validar en una implementación piloto."
              : "Targets to validate during a pilot implementation."
          }}
        </p>
      </div>

      <div class="problem-stack">
        <article
          v-for="(item, index) in problems"
          :key="item.title"
          class="problem-row"
          data-reveal="right"
          :style="{ '--reveal-delay': `${index * 110}ms` }"
        >
          <span class="row-number">0{{ index + 1 }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <span class="row-arrow" aria-hidden="true">↘</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem {
  padding: 120px 24px;
  background: var(--paper);
}
.problem-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: start;
}
.problem-intro {
  position: sticky;
  top: 115px;
}
.outcomes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 38px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}
.outcomes strong,
.outcomes span {
  display: block;
}
.outcomes strong {
  font-family: "Manrope";
  font-size: 1.7rem;
  color: var(--navy);
}
.outcomes span {
  margin-top: 5px;
  color: var(--ink-soft);
  font-size: 0.78rem;
  line-height: 1.4;
}
.data-note {
  margin-top: 18px;
  color: #71818c;
  font-size: 0.76rem;
}
.problem-stack {
  display: flex;
  flex-direction: column;
}
.problem-row {
  position: relative;
  display: grid;
  grid-template-columns: 45px 1fr 32px;
  gap: 16px;
  padding: 28px 0;
  border-top: 1px solid var(--line);
}
.problem-row:last-child {
  border-bottom: 1px solid var(--line);
}
.row-number {
  color: var(--signal-dark);
  font-family: "Manrope";
  font-size: 0.75rem;
  font-weight: 800;
}
.problem-row h3 {
  margin: 0 0 8px;
  font-size: 1.35rem;
}
.problem-row p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.65;
}
.row-arrow {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--sky);
  color: var(--signal-dark);
}
@media (max-width: 900px) {
  .problem {
    padding: 90px 20px;
  }
  .problem-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .problem-intro {
    position: static;
  }
}
@media (max-width: 540px) {
  .problem {
    padding: 75px 16px;
  }
  .outcomes {
    grid-template-columns: 1fr;
  }
  .outcomes div {
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
  }
  .outcomes span {
    margin: 0;
  }
  .problem-row {
    grid-template-columns: 32px 1fr;
  }
  .row-arrow {
    display: none;
  }
}
</style>
