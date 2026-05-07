<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const metrics = computed(() => tm("metrics.items"));
</script>

<template>
  <section class="metrics-section" id="resultados">
    <div class="metrics-container">
      <div class="section-header">
        <p class="section-label">{{ t("metrics.label") }}</p>
        <h2>{{ t("metrics.title") }}</h2>
        <p class="section-description">
          {{ t("metrics.description") }}
        </p>
      </div>

      <div class="metrics-grid">
        <article v-for="item in metrics" :key="item.id" class="metric-card">
          <div class="metric-top">
            <div class="metric-value">
              <span class="number">{{ item.value }}</span>
              <span class="percent">%</span>
            </div>
          </div>

          <h3>{{ item.title }}</h3>
          <p class="metric-text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.metrics-section {
  width: 100%;
  background: linear-gradient(180deg, #0c447c 0%, #08345f 100%);
  padding: 90px 24px;
  color: #ffffff;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.metrics-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 46px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #7ee7bf;
  text-transform: uppercase;
}

.section-header h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
}

.section-description {
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.8;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.metric-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 24px;
  min-height: 250px;
  padding: 30px 22px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.metric-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.09) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.55s ease;
  pointer-events: none;
}

.metric-card:hover::before {
  transform: translateX(120%);
}

.metric-card:hover {
  transform: translateY(-7px);
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.2);
}

.metric-value {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
}

.number {
  font-size: 56px;
  font-weight: 900;
  line-height: 1;
  color: white;
}

.percent {
  font-size: 25px;
  color: #7ee7bf;
  font-weight: 800;
}

.metric-card h3 {
  margin: 0 0 12px;
  font-size: 1.05rem;
  color: #ffffff;
}

.metric-text {
  margin: 0 auto;
  max-width: 220px;
  font-size: 0.94rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .metrics-section {
    padding: 70px 18px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .number {
    font-size: 46px;
  }
}
</style>