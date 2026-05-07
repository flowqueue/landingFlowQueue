<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const steps = computed(() => tm("howItWorks.steps"));
</script>

<template>
  <section class="how-section" id="como-funciona">
    <div class="how-container">
      <div class="how-header">
        <p class="section-label">{{ t("howItWorks.label") }}</p>

        <h2>{{ t("howItWorks.title") }}</h2>

        <p>
          {{ t("howItWorks.description") }}
        </p>
      </div>

      <div class="steps-grid">
        <article
            v-for="(step, index) in steps"
            :key="index"
            class="step-card"
        >
          <div class="step-number">
            {{ index + 1 }}
          </div>

          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </article>
      </div>

      <div class="demo-box">
        <div class="demo-info">
          <span>{{ t("howItWorks.demoLabel") }}</span>
          <h3>{{ t("howItWorks.demoTitle") }}</h3>
          <p>{{ t("howItWorks.demoDescription") }}</p>
        </div>

        <a href="#solicitar" class="demo-button">
          {{ t("howItWorks.demoButton") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  width: 100%;
  padding: 90px 24px;
  background: #ffffff;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.how-container {
  max-width: 1200px;
  margin: 0 auto;
}

.how-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 54px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.how-header h2 {
  margin: 0 0 16px;
  color: #0c447c;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.how-header p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.8;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.step-card {
  position: relative;
  background: #f8fbfd;
  border: 1px solid #e3edf3;
  border-radius: 22px;
  padding: 28px 22px;
  min-height: 250px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.step-card:hover {
  transform: translateY(-6px);
  background: #ffffff;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: #0c447c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin-bottom: 22px;
}

.step-content h3 {
  margin: 0 0 12px;
  color: #0c447c;
  font-size: 1.15rem;
}

.step-content p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.7;
  font-size: 0.95rem;
}

.demo-box {
  margin-top: 36px;
  padding: 28px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0c447c, #1fa178);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  box-shadow: 0 18px 42px rgba(12, 68, 124, 0.18);
}

.demo-info span {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #dcfff2;
}

.demo-info h3 {
  margin: 0 0 8px;
  font-size: 1.4rem;
}

.demo-info p {
  margin: 0;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
}

.demo-button {
  white-space: nowrap;
  text-decoration: none;
  background: white;
  color: #0c447c;
  font-weight: 800;
  padding: 14px 22px;
  border-radius: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.demo-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .how-section {
    padding: 70px 18px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .demo-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .demo-button {
    width: 100%;
    text-align: center;
  }
}
</style>