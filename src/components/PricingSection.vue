<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";

const { t, tm } = useI18n();

const plans = computed(() => tm("pricing.plans"));
</script>

<template>
  <section class="pricing-section" id="planes">
    <div class="pricing-container">
      <div class="pricing-header">
        <p class="section-label">{{ t("pricing.label") }}</p>
        <h2>{{ t("pricing.title") }}</h2>
        <p>{{ t("pricing.description") }}</p>
      </div>

      <div class="plans-grid">
        <article
          v-for="plan in plans"
          :key="plan.id"
          class="plan-card"
          :class="{ featured: plan.featured }"
        >
          <div v-if="plan.featured" class="featured-badge">
            {{ t("pricing.featured") }}
          </div>

          <div class="plan-header">
            <h3>{{ plan.name }}</h3>
            <p>{{ plan.description }}</p>
          </div>

          <div class="plan-price">
            <span class="price">{{ plan.price }}</span>
            <span class="period">{{ plan.period }}</span>
          </div>

          <ul class="plan-features">
            <li v-for="(feature, index) in plan.features" :key="index">
              <span>✓</span>
              {{ feature }}
            </li>
          </ul>

          <a
            :href="FLOWQUEUE_APP_URL"
            class="plan-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ plan.button }}
          </a>
        </article>
      </div>

      <p class="pricing-note">
        {{ t("pricing.note") }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  width: 100%;
  padding: 90px 24px;
  background: #f7fafc;
  font-family: "Inter", Arial, Helvetica, sans-serif;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 52px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.pricing-header h2 {
  margin: 0 0 16px;
  color: #0c447c;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.pricing-header p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.8;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2ebf2;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  min-height: 560px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.plan-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.14);
  border-color: #1fa178;
}

.plan-card.featured {
  background: linear-gradient(180deg, #ffffff 0%, #effbf7 100%);
  border: 2px solid #1fa178;
  transform: translateY(-10px);
}

.featured-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  background: #1fa178;
  color: white;
  font-size: 12px;
  font-weight: 800;
  padding: 8px 12px;
  border-radius: 999px;
}

.plan-header h3 {
  margin: 0 0 10px;
  color: #0c447c;
  font-size: 1.45rem;
}

.plan-header p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.6;
  min-height: 78px;
}

.plan-price {
  margin: 28px 0 24px;
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.price {
  color: #0c447c;
  font-size: 2.2rem;
  font-weight: 800;
}

.period {
  color: #6b7b88;
  font-size: 0.95rem;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.plan-features li {
  display: flex;
  gap: 10px;
  color: #435160;
  line-height: 1.5;
  font-size: 0.96rem;
}

.plan-features span {
  color: #1fa178;
  font-weight: 900;
}

.plan-button {
  text-align: center;
  text-decoration: none;
  background: #0c447c;
  color: white;
  font-weight: 800;
  padding: 15px 20px;
  border-radius: 14px;
  transition: all 0.25s ease;
}

.plan-button:hover {
  background: #08345f;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(12, 68, 124, 0.22);
}

.plan-card.featured .plan-button {
  background: #1fa178;
}

.plan-card.featured .plan-button:hover {
  background: #178e69;
}

.pricing-note {
  margin: 34px auto 0;
  max-width: 760px;
  text-align: center;
  color: #5f6f7c;
  line-height: 1.7;
  font-size: 0.95rem;
}

@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }

  .plan-card,
  .plan-card.featured {
    transform: none;
  }

  .plan-header p {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .pricing-section {
    padding: 70px 18px;
  }

  .plan-card {
    padding: 24px;
  }

  .featured-badge {
    position: static;
    width: fit-content;
    margin-bottom: 16px;
  }
}
</style>
