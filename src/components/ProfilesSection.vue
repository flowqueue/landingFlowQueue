<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const profiles = computed(() => [
  {
    id: 1,
    initials: "CL",
    badgeClass: "badge-citizen",
    title: t("profiles.citizen.title"),
    subtitle: t("profiles.citizen.subtitle"),
    items: tm("profiles.citizen.items"),
    buttonText: t("profiles.citizen.button"),
    href: "#solicitar",
  },
  {
    id: 2,
    initials: "OP",
    badgeClass: "badge-operator",
    title: t("profiles.operator.title"),
    subtitle: t("profiles.operator.subtitle"),
    items: tm("profiles.operator.items"),
    buttonText: t("profiles.operator.button"),
    href: "#como-funciona",
  },
  {
    id: 3,
    initials: "SV",
    badgeClass: "badge-supervisor",
    title: t("profiles.supervisor.title"),
    subtitle: t("profiles.supervisor.subtitle"),
    items: tm("profiles.supervisor.items"),
    buttonText: t("profiles.supervisor.button"),
    href: "#resultados",
  },
]);
</script>

<template>
  <section class="profiles-section" id="perfiles">
    <div class="profiles-container">
      <div class="profiles-header">
        <p class="profiles-label">{{ t("profiles.label") }}</p>
        <h2 class="profiles-title">{{ t("profiles.title") }}</h2>
        <p class="profiles-description">{{ t("profiles.description") }}</p>
      </div>

      <div class="profiles-grid">
        <article
            v-for="profile in profiles"
            :key="profile.id"
            class="profile-card"
        >
          <div class="profile-top">
            <div class="profile-badge" :class="profile.badgeClass">
              {{ profile.initials }}
            </div>

            <div>
              <h3 class="profile-name">{{ profile.title }}</h3>
              <p class="profile-role">{{ profile.subtitle }}</p>
            </div>
          </div>

          <ul class="profile-list">
            <li v-for="(item, index) in profile.items" :key="index">
              <span class="check-icon">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <div class="profile-action">
            <a :href="profile.href" class="profile-button">
              {{ profile.buttonText }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profiles-section {
  width: 100%;
  background: #f5f2ec;
  padding: 90px 24px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.profiles-container {
  max-width: 1200px;
  margin: 0 auto;
}

.profiles-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 46px;
}

.profiles-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1fa178;
  text-transform: uppercase;
}

.profiles-title {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: #0c447c;
}

.profiles-description {
  margin: 0;
  color: #5f6f7c;
  line-height: 1.8;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #dfe5ea;
  border-radius: 24px;
  padding: 28px;
  min-height: 390px;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.profile-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(31, 161, 120, 0.08) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.55s ease;
  pointer-events: none;
}

.profile-card:hover::before {
  transform: translateX(120%);
}

.profile-card:hover {
  border-color: #1fa178;
  box-shadow: 0 18px 38px rgba(34, 79, 130, 0.13);
  transform: translateY(-7px);
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 18px;
  border-bottom: 1px solid #edf0f2;
}

.profile-badge {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 0.95rem;
  font-weight: 900;
  color: #0c447c;
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.profile-card:hover .profile-badge {
  transform: scale(1.07);
  box-shadow: 0 8px 18px rgba(34, 79, 130, 0.12);
}

.badge-citizen {
  background: #e9f1fb;
}

.badge-operator {
  background: #e4f3ee;
}

.badge-supervisor {
  background: #f7eddc;
}

.profile-name {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  color: #0c447c;
}

.profile-role {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: #81909f;
}

.profile-list {
  list-style: none;
  padding: 20px 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.profile-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #5f6f7c;
  font-size: 0.96rem;
  line-height: 1.5;
}

.check-icon {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  background: #e3f4ef;
  color: #1fa178;
  font-size: 0.78rem;
  font-weight: 900;
  flex-shrink: 0;
}

.profile-action {
  margin-top: 24px;
}

.profile-button {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 14px;
  padding: 14px 18px;
  background: #0c447c;
  color: white;
  font-size: 0.95rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.profile-button:hover {
  background: #08345f;
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(12, 68, 124, 0.2);
}

@media (max-width: 960px) {
  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    min-height: auto;
  }
}
</style>