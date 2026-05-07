<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const features = computed(() => tm("functionalities.items"));
</script>

<template>
  <section class="features-section" id="funcionalidades">
    <div class="features-container">
      <div class="features-header">
        <p class="section-label">{{ t("functionalities.label") }}</p>
        <h2>{{ t("functionalities.title") }}</h2>
        <p>{{ t("functionalities.description") }}</p>
      </div>

      <div class="features-layout">
        <div class="features-highlight">
          <span class="highlight-tag">{{ t("functionalities.highlightTag") }}</span>
          <h3>{{ t("functionalities.highlightTitle") }}</h3>
          <p>{{ t("functionalities.highlightDescription") }}</p>

          <a href="#solicitar" class="highlight-button">
            {{ t("functionalities.highlightButton") }}
          </a>
        </div>

        <div class="features-grid">
          <article class="feature-card" v-for="feature in features" :key="feature.title">
            <div class="icon-box" :class="feature.color">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <template v-if="feature.icon === 'ticket'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M3.375 5.25h17.25v13.5H3.375zM7.5 12h5.25M7.5 15h3"
                  />
                </template>

                <template v-else-if="feature.icon === 'clock'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </template>

                <template v-else-if="feature.icon === 'bell'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0018 9.75V9a6 6 0 10-12 0v.75c0 2.086-.672 4.017-1.857 5.522"
                  />
                </template>

                <template v-else-if="feature.icon === 'dashboard'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zm0-8h8V3h-8v10zM3 21h8v-4H3v4z"
                  />
                </template>

                <template v-else-if="feature.icon === 'chart'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M3 17l6-6 4 4 8-8"
                  />
                </template>

                <template v-else-if="feature.icon === 'layers'">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.7"
                      d="M12 3l9 6-9 6-9-6 9-6zm0 12l9 6-9 6-9-6 9-6z"
                  />
                </template>
              </svg>
            </div>

            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  width: 100%;
  padding: 90px 24px;
  background: #f7fafc;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 50px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.features-header h2 {
  margin: 0 0 14px;
  color: #0c447c;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  font-weight: 800;
}

.features-header p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.8;
  font-size: 1rem;
}

.features-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.4fr;
  gap: 28px;
  align-items: stretch;
}

.features-highlight {
  background: linear-gradient(180deg, #0c447c 0%, #08345f 100%);
  color: white;
  border-radius: 28px;
  padding: 34px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 18px 42px rgba(12, 68, 124, 0.18);
}

.highlight-tag {
  display: inline-block;
  width: fit-content;
  margin-bottom: 18px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(31, 161, 120, 0.18);
  color: #7ee7bf;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.features-highlight h3 {
  margin: 0 0 16px;
  font-size: clamp(1.65rem, 3vw, 2.35rem);
  line-height: 1.15;
}

.features-highlight p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
}

.highlight-button {
  margin-top: 28px;
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  background: #22c55e;
  color: white;
  font-weight: 800;
  padding: 14px 20px;
  border-radius: 14px;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.highlight-button:hover {
  background: #16a34a;
  transform: translateY(-3px);
  box-shadow: 0 10px 22px rgba(34, 197, 94, 0.22);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.feature-card {
  background: #ffffff;
  border: 1px solid #e2ebf2;
  border-radius: 22px;
  padding: 24px;
  display: flex;
  gap: 16px;
  min-height: 170px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(31, 161, 120, 0.07) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.55s ease;
  pointer-events: none;
}

.feature-card:hover::before {
  transform: translateX(120%);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.11);
  border-color: rgba(31, 161, 120, 0.45);
}

.icon-box {
  width: 54px;
  height: 54px;
  min-width: 54px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover .icon-box {
  transform: scale(1.08);
  box-shadow: 0 8px 16px rgba(12, 68, 124, 0.12);
}

.icon-box svg {
  width: 25px;
  height: 25px;
}

.icon-box.blue {
  background: #dbeafe;
  color: #1d4ed8;
}

.icon-box.green {
  background: #d1fae5;
  color: #059669;
}

.icon-box.orange {
  background: #fef3c7;
  color: #d97706;
}

.feature-content h3 {
  margin: 0 0 8px;
  color: #0c447c;
  font-size: 1.08rem;
  font-weight: 800;
}

.feature-content p {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.65;
  font-size: 0.94rem;
}

@media (max-width: 1024px) {
  .features-layout {
    grid-template-columns: 1fr;
  }

  .features-highlight {
    min-height: auto;
  }
}

@media (max-width: 700px) {
  .features-section {
    padding: 70px 18px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    flex-direction: column;
  }
}
</style>