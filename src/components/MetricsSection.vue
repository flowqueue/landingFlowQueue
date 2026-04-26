<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const metrics = computed(() => tm("metrics.items"));
</script>

<template>
  <section class="metrics-section" id="precios">
    <div class="metrics-container">
      <div class="section-header">
        <p class="section-label">{{ t("metrics.label") }}</p>
        <h2>{{ t("metrics.title") }}</h2>
        <p class="section-description">
          {{ t("metrics.description") }}
        </p>
      </div>

      <div class="metrics-grid">
        <div v-for="item in metrics" :key="item.id" class="metric-card">
          <div class="metric-value">
            <span class="number">{{ item.value }}</span>
            <span class="percent">%</span>
          </div>
          <p class="metric-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.metrics-section {
  background-color: #0d4f8b;
  padding: 70px 24px;
  color: #ffffff;
}

.metrics-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 36px;
}

.section-label {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #9fc2e4;
}

.section-header h2 {
  margin: 0 0 10px;
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.2;
}

.section-description {
  margin: 0;
  font-size: 15px;
  color: #c7d9ec;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.metric-card {
  background-color: #083763;
  border-radius: 18px;
  min-height: 190px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
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
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.metric-card:hover::before {
  transform: translateX(120%);
}

.metric-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
  background-color: #0a3f72;
}

.metric-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 18px;
}

.number {
  font-size: 52px;
  font-weight: 500;
  line-height: 1;
  transition: transform 0.25s ease;
}

.percent {
  font-size: 24px;
  color: #49d3c5;
  font-weight: 500;
  transition: transform 0.25s ease, color 0.25s ease;
}

.metric-card:hover .number,
.metric-card:hover .percent {
  transform: scale(1.06);
}

.metric-card:hover .percent {
  color: #67eadc;
}

.metric-text {
  margin: 0 auto;
  max-width: 180px;
  font-size: 14px;
  line-height: 1.5;
  color: #c7d9ec;
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .metrics-section {
    padding: 50px 20px;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .number {
    font-size: 42px;
  }
}
</style>