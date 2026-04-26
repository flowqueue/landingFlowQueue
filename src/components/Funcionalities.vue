<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const features = computed(() => tm("functionalities.items"));
</script>

<template>
  <section class="section-wrapper" id="funcionalidades">
    <div class="container">

      <!-- HEADER -->
      <div class="section-header">
        <h2>{{ t("functionalities.label") }}</h2>
        <h1>{{ t("functionalities.title") }}</h1>
        <p>{{ t("functionalities.description") }}</p>
      </div>

      <!-- GRID -->
      <div class="cards-container">
        <div class="card" v-for="f in features" :key="f.title">

          <!-- ICON -->
          <div class="icon-box" :class="f.color">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">

              <template v-if="f.icon === 'ticket'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3.375 5.25h17.25v13.5H3.375zM7.5 12h5.25M7.5 15h3"
                />
              </template>

              <template v-else-if="f.icon === 'clock'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </template>

              <template v-else-if="f.icon === 'bell'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0018 9.75V9a6 6 0 10-12 0v.75c0 2.086-.672 4.017-1.857 5.522"
                />
              </template>

              <template v-else-if="f.icon === 'dashboard'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zm0-8h8V3h-8v10zM3 21h8v-4H3v4z"
                />
              </template>

              <template v-else-if="f.icon === 'chart'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 17l6-6 4 4 8-8"
                />
              </template>

              <template v-else-if="f.icon === 'layers'">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M12 3l9 6-9 6-9-6 9-6zm0 12l9 6-9 6-9-6 9-6z"
                />
              </template>

            </svg>
          </div>

          <!-- TEXT -->
          <div class="content">
            <h4>{{ f.title }}</h4>
            <p>{{ f.desc }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* FULL WIDTH SECTION */
.section-wrapper {
  width: 100%;
  background: #f5f3ef;
  padding: 80px 20px;
  box-sizing: border-box;
}

/* CENTERED CONTENT */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* HEADER */
.section-header {
  margin-bottom: 40px;
  max-width: 600px;
}

.section-header h2 {
  font-size: 14px;
  color: #1f5fa8;
  letter-spacing: 1px;
  margin: 0;
}

.section-header h1 {
  font-size: 36px;
  margin: 8px 0;
  color: #0C447C;
}

.section-header p {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

/* GRID */
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* CARD */
.card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  padding: 16px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(31, 95, 168, 0.08) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.card:hover::before {
  transform: translateX(120%);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(12, 68, 124, 0.12);
  border-color: rgba(31, 95, 168, 0.35);
}

/* ICON */
.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover .icon-box {
  transform: scale(1.08);
  box-shadow: 0 8px 16px rgba(12, 68, 124, 0.12);
}

.icon-box svg {
  width: 22px;
  height: 22px;
}

/* COLORS */
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

/* TEXT */
.content h4 {
  margin: 0 0 4px;
  font-size: 15px;
  color: #0C447C;
  transition: color 0.25s ease;
}

.content p {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}

.card:hover .content h4 {
  color: #1f5fa8;
}

/* TABLET */
@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* MOBILE */
@media (max-width: 640px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .section-header h1 {
    font-size: 28px;
  }

  .card {
    height: auto;
    min-height: 130px;
  }
}
</style>