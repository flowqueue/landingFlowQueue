<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const stats = computed(() => tm("contatc.stats"));
</script>

<template>
  <section class="contacto">
    <div class="titulo-box">
      <h1>Contáctenos</h1>
    </div>

    <form class="formulario">
      <input type="text" placeholder="Ingrese su nombre" required />
      <input type="text" placeholder="Ingrese sus apellidos" required />
      <input type="email" placeholder="Ingrese su correo electrónico" required />
      <input type="tel" placeholder="Ingrese su número de teléfono" required />

      <button type="submit">Enviar</button>
    </form>

    <p class="texto-seguridad">
      Tratamos tu información con los más altos estándares
      de seguridad y cifrado. Nunca compartiremos tus
      datos con terceros.
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

/* ── Títuloaaa ── */
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
}

/* ── Texto seguridad ── */
.texto-seguridad {
  margin-top: 32px;
  font-size: 14px;
  color: #3c3c3c;
  text-align: center;
  line-height: 1.6;
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