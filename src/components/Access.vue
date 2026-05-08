<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const email = ref("");
const loading = ref(false);

const { t, tm } = useI18n();

const benefits = computed(() => tm("access.benefits"));

const submit = () => {
  if (!email.value) return;

  loading.value = true;

  setTimeout(() => {
    console.log(t("access.consoleMessage"), email.value);
    loading.value = false;
    email.value = "";
  }, 1000);
};
</script>

<template>
  <section class="cta-section" id="solicitar">
    <div class="cta-container">
      <div class="cta-content">
        <p class="section-label">{{ t("access.label") }}</p>

        <h2>{{ t("access.title") }}</h2>

        <p class="subtitle">
          {{ t("access.subtitle") }}
        </p>

        <div class="benefits-grid">
          <div v-for="(benefit, index) in benefits" :key="index" class="benefit-item">
            <span>{{ benefit.icon }}</span>
            <p>{{ benefit.text }}</p>
          </div>
        </div>
      </div>

      <div class="cta-card">
        <div class="card-header">
          <span class="card-brand">{{ t("access.brand") }}</span>
          <h3>{{ t("access.formTitle") }}</h3>
          <p>{{ t("access.formDescription") }}</p>
        </div>

        <div class="form">
          <input
              v-model="email"
              type="email"
              :placeholder="t('access.emailPlaceholder')"
          />

          <button @click="submit" :disabled="loading">
            {{ loading ? t("access.loading") : t("access.submit") }}
          </button>
        </div>

        <p class="meta">
          {{ t("access.meta") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  width: 100%;
  padding: 90px 24px;
  background: linear-gradient(135deg, #1fa178 0%, #0c447c 100%);
  color: white;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.cta-container {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.section-label {
  margin: 0 0 14px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #dcfff2;
  text-transform: uppercase;
}

.cta-content h2 {
  margin: 0 0 18px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.subtitle {
  margin: 0;
  max-width: 650px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.86);
}

.benefits-grid {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.11);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 14px;
  border-radius: 16px;
}

.benefit-item span {
  font-size: 1.2rem;
}

.benefit-item p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
}

.cta-card {
  background: rgba(255, 255, 255, 0.96);
  color: #0f172a;
  border-radius: 26px;
  padding: 30px;
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.18);
}

.card-brand {
  display: inline-block;
  margin-bottom: 14px;
  color: #1fa178;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.card-header h3 {
  margin: 0 0 10px;
  color: #0c447c;
  font-size: 1.45rem;
}

.card-header p {
  margin: 0 0 22px;
  color: #5f6f7c;
  line-height: 1.6;
  font-size: 0.96rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form input {
  width: 100%;
  padding: 15px 16px;
  border-radius: 14px;
  border: 1px solid #d9e3ea;
  font-size: 0.95rem;
  background: #f8fbfd;
  outline: none;
  transition: all 0.2s ease;
}

.form input:focus {
  border-color: #1fa178;
  background: white;
  box-shadow: 0 0 0 4px rgba(31, 161, 120, 0.12);
}

.form button {
  padding: 15px 22px;
  border-radius: 14px;
  border: none;
  background: #0c447c;
  color: white;
  font-size: 0.96rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.25s ease;
}

.form button:hover {
  background: #08345f;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(12, 68, 124, 0.22);
}

.form button:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}

.meta {
  margin: 18px 0 0;
  color: #667784;
  font-size: 0.88rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .cta-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .cta-section {
    padding: 70px 18px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 24px;
  }
}
</style>