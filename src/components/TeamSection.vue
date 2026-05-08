<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import carlosPhoto from "@/assets/carlosfoto.jpg";
import franciscoPhoto from "@/assets/franciscofoto.jpg";
import danielPhoto from "@/assets/danielfoto.jpg";
import alexPhoto from "@/assets/alexfoto.png";
import luisPhoto from "@/assets/luisfoto.jpg";

const { t, tm } = useI18n();

const photos = {
  carlos: carlosPhoto,
  francisco: franciscoPhoto,
  daniel: danielPhoto,
  alex: alexPhoto,
  luis: luisPhoto,
};

const team = computed(() => {
  return tm("team.members").map((member) => ({
    ...member,
    photo: photos[member.photoKey],
  }));
});

const values = computed(() => tm("team.values"));

const getRole = (role) => {
  return t(`team.roles.${role}`);
};
</script>

<template>
  <section class="team-section" id="sobre-nosotros">
    <div class="team-container">
      <div class="team-header">
        <p class="section-label">{{ t("team.label") }}</p>
        <h2>{{ t("team.title") }}</h2>
        <p>{{ t("team.description") }}</p>
      </div>

      <div class="about-grid">
        <article class="about-card main-card">
          <span class="card-tag">{{ t("team.storyLabel") }}</span>
          <h3>{{ t("team.storyTitle") }}</h3>
          <p>{{ t("team.storyDescription") }}</p>
        </article>

        <article class="about-card">
          <span class="card-tag">{{ t("team.missionLabel") }}</span>
          <h3>{{ t("team.missionTitle") }}</h3>
          <p>{{ t("team.missionDescription") }}</p>
        </article>

        <article class="about-card">
          <span class="card-tag">{{ t("team.visionLabel") }}</span>
          <h3>{{ t("team.visionTitle") }}</h3>
          <p>{{ t("team.visionDescription") }}</p>
        </article>
      </div>

      <div class="values-section">
        <h3>{{ t("team.valuesTitle") }}</h3>

        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-pill">
            <span>{{ value.icon }}</span>
            {{ value.text }}
          </div>
        </div>
      </div>

      <div class="members-header">
        <h3>{{ t("team.membersTitle") }}</h3>
        <p>{{ t("team.membersDescription") }}</p>
      </div>

      <div class="team-grid">
        <article v-for="member in team" :key="member.id" class="team-card">
          <img :src="member.photo" :alt="member.name" class="team-photo" />

          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="team-role">{{ getRole(member.role) }}</p>
          </div>
        </article>
      </div>

      <p class="team-footer">{{ t("team.footer") }}</p>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  width: 100%;
  padding: 90px 24px;
  background: linear-gradient(180deg, #0c447c 0%, #08345f 100%);
  color: #ffffff;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
}

.team-header {
  text-align: center;
  max-width: 790px;
  margin: 0 auto 46px;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7ee7bf;
}

.team-header h2 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
}

.team-header p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.8;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 22px;
  margin-bottom: 34px;
}

.about-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 24px;
  padding: 28px;
  backdrop-filter: blur(10px);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(126, 231, 191, 0.45);
}

.main-card {
  background: rgba(31, 161, 120, 0.18);
}

.card-tag {
  display: inline-block;
  margin-bottom: 14px;
  color: #7ee7bf;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-card h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.about-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
  font-size: 0.96rem;
}

.values-section {
  margin: 34px 0 48px;
  text-align: center;
}

.values-section h3 {
  margin: 0 0 20px;
  font-size: 1.45rem;
}

.values-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.value-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.13);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 999px;
  padding: 12px 16px;
  font-size: 0.92rem;
  font-weight: 700;
}

.members-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 30px;
}

.members-header h3 {
  margin: 0 0 10px;
  font-size: 1.55rem;
}

.members-header p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.7;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.team-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 22px;
  padding: 24px 16px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  overflow: hidden;
  position: relative;
}

.team-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.55s ease;
}

.team-card:hover::before {
  transform: translateX(120%);
}

.team-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.2);
}

.team-photo {
  width: 106px;
  height: 106px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 3px solid #1fa178;
  transition: transform 0.25s ease, border-color 0.25s ease;
  position: relative;
  z-index: 1;
}

.team-card:hover .team-photo {
  transform: scale(1.06);
  border-color: #7ee7bf;
}

.member-info {
  position: relative;
  z-index: 1;
}

.team-card h3 {
  margin: 0 0 8px;
  font-size: 1rem;
  font-weight: 800;
}

.team-role {
  margin: 0;
  font-size: 0.86rem;
  color: #b9d7ef;
}

.team-footer {
  text-align: center;
  margin-top: 28px;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #9fc2e4;
  text-transform: uppercase;
}

@media (max-width: 1080px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .team-section {
    padding: 70px 18px;
  }

  .about-card {
    padding: 24px;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>