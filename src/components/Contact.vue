<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="contacto" id="contacto">
    <div class="titulo-box">
      <h1>{{ t("contact.title") }}</h1>
    </div>

    <form class="formulario">
      <input
          type="text"
          :placeholder="t('contact.namePlaceholder')"
          required
      />

      <input
          type="text"
          :placeholder="t('contact.lastnamePlaceholder')"
          required
      />

      <input
          type="email"
          :placeholder="t('contact.emailPlaceholder')"
          required
      />

      <input
          type="tel"
          :placeholder="t('contact.phonePlaceholder')"
          required
      />

      <button type="submit">
        {{ t("contact.submit") }}
      </button>
    </form>

    <p class="texto-seguridad">
      {{ t("contact.securityText") }}
    </p>
  </section>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.contacto {
  width: 100%;
  min-height: 100vh;
  background-color: #1fa178;
  position: relative;
  padding: 65px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Título ── */
.titulo-box {
  width: min(415px, 100%);
  height: 55px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: 0 auto 38px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titulo-box h1 {
  font-size: clamp(24px, 5vw, 40px);
  font-weight: 400;
  color: #7d7d7d;
}

/* ── Formulario ── */
.formulario {
  width: min(870px, 100%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 40px;
}

.formulario input {
  height: 55px;
  border: none;
  border-radius: 10px;
  padding: 0 22px;
  font-size: clamp(15px, 2vw, 20px);
  color: #333;
  background-color: #f5f5f5;
  outline: none;
  width: 100%;
}

.formulario input::placeholder {
  color: #8a8a8a;
}

.formulario button {
  grid-column: 1 / 3;
  justify-self: center;
  margin-top: 25px;
  width: min(270px, 80%);
  height: clamp(65px, 10vw, 95px);
  background-color: #114f86;
  border: none;
  border-radius: 15px;
  font-size: clamp(28px, 5vw, 48px);
  cursor: pointer;
  color: black;
  transition: all 0.25s ease;
}

.formulario button:hover {
  transform: translateY(-4px);
  background-color: #0c447c;
  color: white;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
}

/* ── Texto seguridad ── */
.texto-seguridad {
  margin-top: 32px;
  font-size: 14px;
  color: #3c3c3c;
  text-align: center;
  line-height: 1.6;
  max-width: 650px;
}

/* ── Tablet ── */
@media (max-width: 768px) {
  .contacto {
    padding: 40px 16px 40px;
  }

  .formulario {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .formulario button {
    grid-column: 1 / 2;
  }

  .titulo-box {
    height: auto;
    padding: 12px 20px;
  }
}

/* ── Móvil pequeño ── */
@media (max-width: 400px) {
  .formulario input {
    height: 48px;
    padding: 0 14px;
  }

  .titulo-box {
    border-radius: 8px;
  }
}
</style>