<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const email = ref("");
const loading = ref(false);

const { t } = useI18n();

const submit = () => {
  if (!email.value) return;

  loading.value = true;

  // simular request
  setTimeout(() => {
    console.log(t("access.consoleMessage"), email.value);
    loading.value = false;
    email.value = "";
  }, 1000);
};
</script>

<template>
  <section class="cta-section" id="solicitar">
    <div class="container">
      <!-- BRAND -->
      <div class="brand">
        {{ t("access.brand") }}
      </div>

      <!-- TITLE -->
      <h1>{{ t("access.title") }}</h1>

      <!-- SUBTITLE -->
      <p class="subtitle">
        {{ t("access.subtitle") }}
      </p>

      <!-- FORM -->
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

      <!-- FOOTER TEXT -->
      <p class="meta">
        {{ t("access.meta") }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* FULL WIDTH */
.cta-section {
  width: 100%;
  background: #2c9c74;
  padding: 80px 20px;
  color: white;
  text-align: center;
}

/* CENTER */
.container {
  max-width: 900px;
  margin: 0 auto;
}

/* BRAND */
.brand {
  margin-bottom: 20px;
  font-size: 18px;
  opacity: 0.9;
}

.highlight {
  border: 1px solid #60a5fa;
  padding: 2px 6px;
  border-radius: 4px;
}

/* TITLE */
h1 {
  font-size: 36px;
  margin: 0 0 10px;
}

/* SUBTITLE */
.subtitle {
  font-size: 16px;
  opacity: 0.85;
  margin-bottom: 30px;
}

/* FORM */
.form {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
}

.form input {
  width: 100%;
  max-width: 400px;
  padding: 14px 16px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
}

.form button {
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  background: #1d4ed8;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.form button:hover {
  background: #1e40af;
}

.form button:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}

/* META */
.meta {
  font-size: 13px;
  opacity: 0.8;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .form {
    flex-direction: column;
  }

  h1 {
    font-size: 28px;
  }

  .form button {
    width: 100%;
  }
}
</style>