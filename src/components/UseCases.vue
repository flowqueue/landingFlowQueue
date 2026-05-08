<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const useCases = computed(() => tm("useCases.items"));
</script>

<template>
  <section class="use-cases-section" id="casos-uso">
    <div class="use-cases-container">
      <div class="use-cases-header">
        <p class="section-label">{{ t("useCases.label") }}</p>
        <h2>{{ t("useCases.title") }}</h2>
        <p>{{ t("useCases.description") }}</p>
      </div>

      <div class="use-cases-grid">
        <article
            v-for="item in useCases"
            :key="item.title"
            class="use-case-card"
        >
          <div class="use-case-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use-cases-section {
  width: 100%;
  padding: 90px 24px;
  background: #ffffff;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.use-cases-container {
  max-width: 1200px;
  margin: 0 auto;
}

.use-cases-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 46px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.use-cases-header h2 {
  margin: 0 0 14px;
  color: #0c447c;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  font-weight: 800;
}

.use-cases-header p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.8;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.use-case-card {
  background: #f8fbfd;
  border: 1px solid #e2ebf2;
  border-radius: 24px;
  padding: 28px 22px;
  min-height: 260px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.use-case-card:hover {
  transform: translateY(-7px);
  border-color: #1fa178;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.1);
}

.use-case-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: #e2f7ef;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.use-case-card h3 {
  margin: 0 0 12px;
  color: #0c447c;
  font-size: 1.15rem;
}

.use-case-card p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .use-cases-section {
    padding: 70px 18px;
  }

  .use-cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>