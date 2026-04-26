<template>
  <section class="metrics-section">
    <div class="metrics-container">
      <div class="section-header">
        <p class="section-label">RESULTADOS ESPERADOS</p>
        <h2>Impacto medible desde el día uno</h2>
        <p class="section-description">
          Basado en hipótesis y pruebas piloto con instituciones públicas de Lima.
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

<script>
export default {
  name: "MetricsSection",
  data() {
    return {
      metrics: [
        {
          id: 1,
          value: 30,
          text: "reducción en tiempo de espera presencial",
        },
        {
          id: 2,
          value: 25,
          text: "aumento en satisfacción del ciudadano (NPS)",
        },
        {
          id: 3,
          value: 70,
          text: "tickets generados de forma remota",
        },
        {
          id: 4,
          value: 15,
          text: "reducción de costos operativos de gestión",
        },
      ],
    };
  },
};
</script>

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
}

.percent {
  font-size: 24px;
  color: #49d3c5;
  font-weight: 500;
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