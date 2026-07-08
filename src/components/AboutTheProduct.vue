<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const sectionRef = ref(null);
</script>

<template>
  <section ref="sectionRef" class="team-section" id="about-team">
    <div class="section-shell team-layout">

      <!-- Lado Izquierdo: Introducción y Texto -->
      <div class="team-intro" data-reveal="left">
        <span class="section-kicker">{{ t("team.label2") }}</span>
        <h2 class="section-heading">{{ t("team.title2") }}</h2>
        <p class="section-copy">
          {{ t("team.description") }}
        </p>
      </div>

      <!-- Lado Derecho: Contenedor del Video de YouTube -->
      <div class="team-media" data-reveal="right">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/8EklukyKQDc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.team-section {
  padding: 120px 24px;
  background: var(--paper);
}

.team-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: start;
}

.team-intro {
  position: sticky;
  top: 115px;
}

/* Contenedor responsivo para mantener el aspect ratio 16:9 del video */
.team-media {
  width: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Ratio 16:9 */
  height: 0;
  border-radius: 12px; /* Opcional: para darle bordes suaves acordes a tu diseño */
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05); /* Opcional: sutil elevación */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Responsivo: Tablets / Pantallas medianas */
@media (max-width: 900px) {
  .team-section {
    padding: 90px 20px;
  }
  .team-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .team-intro {
    position: static;
  }
}

/* Responsivo: Smartphones */
@media (max-width: 540px) {
  .team-section {
    padding: 75px 16px;
  }
}
</style>
