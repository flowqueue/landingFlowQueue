<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import carlosPhoto from "@/assets/carlosfoto.jpg";
import franciscoPhoto from "@/assets/franciscofoto.jpg";
import danielPhoto from "@/assets/danielfoto.jpg";
import alexPhoto from "@/assets/alexfoto.jpg";
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

const getRole = (role) => {
  return t(`team.roles.${role}`);
};
</script>

<template>
  <section class="team-section" id="sobre-nosotros">
    <div class="team-container">
      <div class="section-header">
        <h2>{{ t("team.title") }}</h2>
      </div>

      <div class="team-grid">
        <div v-for="member in team" :key="member.id" class="team-card">
          <img :src="member.photo" :alt="member.name" class="team-photo" />
          <h3>{{ member.name }}</h3>
          <p class="team-role">{{ getRole(member.role) }}</p>
        </div>
      </div>

      <p class="team-footer">{{ t("team.footer") }}</p>
    </div>
  </section>
</template>

<style scoped>
.team-section {
  background-color: #0d4f8b;
  padding: 70px 24px;
  color: #ffffff;
}

.team-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 36px;
}

.section-header h2 {
  margin: 0;
  font-size: 2.1rem;
  font-weight: 500;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  max-width: 1100px;
  margin: 0 auto;
}

.team-card {
  background-color: #083763;
  border-radius: 18px;
  min-height: 270px;
  padding: 26px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
  transition: transform 0.5s ease;
  pointer-events: none;
}

.team-card:hover::before {
  transform: translateX(120%);
}

.team-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
  background-color: #0a3f72;
}

.team-card:nth-child(4) {
  grid-column: 1 / 2;
}

.team-card:nth-child(5) {
  grid-column: 3 / 4;
}

.team-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 3px solid #1f629d;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.team-card:hover .team-photo {
  transform: scale(1.08);
  border-color: #3e83c0;
  box-shadow: 0 10px 18px rgba(31, 98, 157, 0.22);
}

.team-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  transition: color 0.25s ease;
}

.team-card:hover h3 {
  color: #dcecff;
}

.team-role {
  margin: 0;
  font-size: 14px;
  color: #c7d9ec;
  transition: color 0.25s ease;
}

.team-card:hover .team-role {
  color: #e3eef9;
}

.team-footer {
  text-align: center;
  margin-top: 24px;
  font-size: 12px;
  letter-spacing: 0.08em;
  color: #9fc2e4;
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-card:nth-child(4),
  .team-card:nth-child(5) {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .team-section {
    padding: 50px 20px;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>