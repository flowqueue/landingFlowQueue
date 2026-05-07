<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const problems = computed(() => tm("problem.items"));
</script>

<template>
  <section class="problem-section" id="problema">
    <div class="problem-container">
      <div class="problem-content">
        <p class="section-label">{{ t("problem.label") }}</p>

        <h2>
          {{ t("problem.title") }}
        </h2>

        <p class="problem-description">
          {{ t("problem.description") }}
        </p>
      </div>

      <div class="problem-grid">
        <article
            v-for="(item, index) in problems"
            :key="index"
            class="problem-card"
        >
          <div class="problem-icon">
            {{ item.icon }}
          </div>

          <h3>{{ item.title }}</h3>

          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.problem-section {
  width: 100%;
  padding: 90px 24px;
  background: #f7fafc;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.problem-container {
  max-width: 1200px;
  margin: 0 auto;
}

.problem-content {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 48px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.problem-content h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #0c447c;
  line-height: 1.15;
}

.problem-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: #566573;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.problem-card {
  background: #ffffff;
  border-radius: 22px;
  padding: 30px 26px;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
  border: 1px solid #e7eef4;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.problem-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.13);
}

.problem-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: #e2f7ef;
  color: #1fa178;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.problem-card h3 {
  margin: 0 0 12px;
  color: #0c447c;
  font-size: 1.25rem;
}

.problem-card p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.7;
  font-size: 0.96rem;
}

@media (max-width: 900px) {
  .problem-grid {
    grid-template-columns: 1fr;
  }

  .problem-card {
    text-align: center;
  }

  .problem-icon {
    margin: 0 auto 20px;
  }
}
</style>