<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import carlos from "@/assets/carlosfoto.jpg";
import francisco from "@/assets/franciscofoto.jpg";
import daniel from "@/assets/danielfoto.jpg";
import alex from "@/assets/alexfoto.png";
import luis from "@/assets/luisfoto.jpg";

const { t, tm, locale } = useI18n();
const photos = { carlos, francisco, daniel, alex, luis };

const team = computed(() =>
  tm("team.members").map((member) => ({
    ...member,
    photo: photos[member.photoKey],
  })),
);

const leader = computed(() =>
  team.value.find((member) => member.role === "leader"),
);
const members = computed(() =>
  team.value.filter((member) => member.role !== "leader"),
);
</script>

<template>
  <section class="team" id="sobre-nosotros">
    <div class="team-light light-one" aria-hidden="true"></div>
    <div class="team-light light-two" aria-hidden="true"></div>
    <div class="team-rings" aria-hidden="true"><i></i><i></i><i></i></div>

    <div class="section-shell">
      <header class="team-header" data-reveal>
        <div>
          <span class="section-kicker">{{ t("team.label") }}</span>
          <h2>{{ t("team.title") }}</h2>
        </div>
        <div class="team-intro">
          <p>{{ t("team.storyDescription") }}</p>
          <div class="team-facts">
            <span
              ><strong>05</strong
              >{{ locale === "es" ? "integrantes" : "members" }}</span
            >
            <span
              ><strong>01</strong
              >{{ locale === "es" ? "misión" : "mission" }}</span
            >
            <span
              ><strong>∞</strong>{{ locale === "es" ? "ideas" : "ideas" }}</span
            >
          </div>
        </div>
      </header>

      <div class="team-showcase">
        <article class="leader-card" data-reveal="left" data-tilt>
          <div class="leader-photo">
            <img
              :src="leader.photo"
              :alt="leader.name"
              width="680"
              height="760"
              loading="lazy"
              decoding="async"
            />
            <span class="photo-noise" aria-hidden="true"></span>
            <div class="leader-index" aria-hidden="true">05 / 05</div>
            <div class="leader-status">
              <i></i
              >{{
                locale === "es" ? "Liderando el equipo" : "Leading the team"
              }}
            </div>
          </div>
          <div class="leader-info">
            <div>
              <span>{{ t(`team.roles.${leader.role}`) }}</span>
              <h3>{{ leader.name }}</h3>
            </div>
            <p>
              {{
                locale === "es"
                  ? "Dirección del producto y coordinación"
                  : "Product direction and coordination"
              }}
            </p>
          </div>
        </article>

        <div class="members-grid">
          <article
            v-for="(member, index) in members"
            :key="member.id"
            class="member-card"
            data-reveal="right"
            data-tilt
            :style="{ '--reveal-delay': `${index * 110}ms` }"
          >
            <img
              :src="member.photo"
              :alt="member.name"
              width="420"
              height="360"
              loading="lazy"
              decoding="async"
            />
            <div class="member-shade"></div>
            <span class="member-number">0{{ index + 1 }}</span>
            <div class="member-info">
              <span>{{ t(`team.roles.${member.role}`) }}</span>
              <h3>{{ member.name }}</h3>
            </div>
            <span class="member-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </div>

      <div class="mission-strip" data-reveal="scale">
        <span class="mission-label">{{ t("team.missionLabel") }}</span>
        <p>{{ t("team.missionDescription") }}</p>
        <div class="mission-mark" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>

      <div class="team-marquee" aria-hidden="true">
        <div>
          <span>Diseño</span><i></i><span>Tecnología</span><i></i
          ><span>Impacto ciudadano</span><i></i><span>Datos</span><i></i
          ><span>Colaboración</span><i></i> <span>Diseño</span><i></i
          ><span>Tecnología</span><i></i><span>Impacto ciudadano</span><i></i
          ><span>Datos</span><i></i><span>Colaboración</span><i></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  position: relative;
  padding: 130px 24px 90px;
  overflow: hidden;
  color: white;
  background: var(--navy-deep);
}
.team::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.16;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 16%,
    black 82%,
    transparent
  );
}
.team-light {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.16;
  pointer-events: none;
  animation: team-light 9s ease-in-out infinite;
}
.light-one {
  top: -260px;
  left: -180px;
  background: var(--signal);
}
.light-two {
  right: -200px;
  bottom: -260px;
  background: var(--blue);
  animation-delay: -4s;
}
.team-rings {
  position: absolute;
  right: -150px;
  top: 80px;
  width: 470px;
  height: 470px;
  animation: rings-spin 28s linear infinite;
}
.team-rings i {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(57, 217, 138, 0.12);
  border-radius: 50%;
}
.team-rings i:nth-child(2) {
  inset: 70px;
}
.team-rings i:nth-child(3) {
  inset: 140px;
}
.team-header {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: end;
  gap: 70px;
  margin-bottom: 58px;
}
.team .section-kicker {
  color: var(--signal);
}
.team-header h2 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(2.8rem, 5.6vw, 5.6rem);
  line-height: 0.94;
}
.team-intro > p {
  margin: 0 0 28px;
  color: #b7ccd8;
  font-size: 1.04rem;
  line-height: 1.72;
}
.team-facts {
  display: flex;
  gap: 28px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.13);
}
.team-facts span {
  color: #8faabb;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.team-facts strong {
  display: block;
  margin-bottom: 3px;
  color: white;
  font-family: "Manrope";
  font-size: 1.45rem;
  letter-spacing: -0.04em;
}
.team-showcase {
  position: relative;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 18px;
}
.leader-card,
.member-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 28px 70px rgba(0, 10, 20, 0.28);
}
.leader-card {
  display: flex;
  flex-direction: column;
  min-height: 680px;
  border-radius: 30px;
}
.leader-photo {
  position: relative;
  flex: 1 1 auto;
  min-height: 555px;
  overflow: hidden;
}
.leader-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 45%,
    rgba(4, 31, 53, 0.92)
  );
  pointer-events: none;
}
.leader-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  filter: saturate(0.78) contrast(1.04);
  transition:
    transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 0.6s ease;
}
.photo-noise {
  position: absolute;
  z-index: 1;
  inset: 0;
  opacity: 0.13;
  pointer-events: none;
  background-image: radial-gradient(
    circle at 1px 1px,
    white 1px,
    transparent 0
  );
  background-size: 7px 7px;
  mix-blend-mode: overlay;
}
.leader-index {
  position: absolute;
  z-index: 2;
  top: 22px;
  left: 22px;
  padding: 8px 11px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 10px;
  background: rgba(4, 31, 53, 0.55);
  color: #c9d9e3;
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  backdrop-filter: blur(10px);
}
.leader-status {
  position: absolute;
  z-index: 2;
  right: 22px;
  bottom: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  background: rgba(4, 31, 53, 0.72);
  color: white;
  font-size: 0.7rem;
  font-weight: 800;
  backdrop-filter: blur(12px);
}
.leader-status i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  animation: leader-pulse 1.9s ease-out infinite;
}
.leader-info {
  flex: 0 0 125px;
  min-height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  padding: 24px 28px;
}
.leader-info span,
.member-info span {
  color: var(--signal);
  font-size: 0.67rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.leader-info h3 {
  margin: 4px 0 0;
  font-size: 1.8rem;
}
.leader-info p {
  max-width: 190px;
  margin: 0;
  color: #9db5c4;
  font-size: 0.82rem;
  line-height: 1.45;
  text-align: right;
}
.leader-card:hover .leader-photo img {
  transform: scale(1.06);
  filter: saturate(1) contrast(1.04);
}
.members-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.member-card {
  min-height: 331px;
  border-radius: 24px;
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}
.member-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  filter: grayscale(0.25) saturate(0.8);
  transition:
    transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1),
    filter 0.45s ease;
}
.member-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(4, 31, 53, 0.04) 25%,
    rgba(4, 31, 53, 0.92) 100%
  );
}
.member-number {
  position: absolute;
  top: 18px;
  left: 18px;
  color: rgba(255, 255, 255, 0.72);
  font-family: "Manrope";
  font-size: 0.72rem;
  font-weight: 900;
}
.member-info {
  position: absolute;
  z-index: 2;
  left: 20px;
  right: 55px;
  bottom: 20px;
  transition: transform 0.35s ease;
}
.member-info h3 {
  margin: 5px 0 0;
  font-size: 1.18rem;
}
.member-arrow {
  position: absolute;
  z-index: 2;
  right: 18px;
  bottom: 18px;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;
  color: var(--signal);
  transition:
    transform 0.35s ease,
    background 0.35s ease;
}
.member-card:hover {
  z-index: 2;
  transform: translateY(-8px) rotate(-0.6deg);
  border-color: rgba(57, 217, 138, 0.55);
  box-shadow: 0 38px 80px rgba(0, 10, 20, 0.4);
}
.member-card:hover img {
  transform: scale(1.09);
  filter: grayscale(0) saturate(1);
}
.member-card:hover .member-info {
  transform: translateY(-5px);
}
.member-card:hover .member-arrow {
  transform: rotate(45deg);
  background: var(--signal);
  color: var(--ink);
  border-color: var(--signal);
}
.mission-strip {
  position: relative;
  display: grid;
  grid-template-columns: 140px 1fr 90px;
  align-items: center;
  gap: 30px;
  margin-top: 22px;
  padding: 28px 32px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
}
.mission-strip::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 35%,
    rgba(57, 217, 138, 0.1),
    transparent 65%
  );
  transform: translateX(-100%);
  animation: mission-scan 5.5s ease-in-out infinite;
}
.mission-strip > * {
  position: relative;
  z-index: 1;
}
.mission-label {
  color: var(--signal);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}
.mission-strip p {
  margin: 0;
  color: #bfd1dc;
  line-height: 1.6;
}
.mission-mark {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
}
.mission-mark i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--signal);
  animation: mark-wave 1.5s ease-in-out infinite;
}
.mission-mark i:nth-child(2) {
  animation-delay: 0.15s;
  opacity: 0.65;
}
.mission-mark i:nth-child(3) {
  animation-delay: 0.3s;
  opacity: 0.35;
}
.team-marquee {
  margin-top: 48px;
  overflow: hidden;
  border-block: 1px solid rgba(255, 255, 255, 0.1);
}
.team-marquee > div {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 16px 0;
  animation: team-marquee 24s linear infinite;
}
.team-marquee span {
  color: #8ea9b9;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  white-space: nowrap;
}
.team-marquee i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--signal);
}
@keyframes leader-pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(57, 217, 138, 0);
  }
}
@keyframes team-light {
  50% {
    transform: translate(40px, 28px) scale(1.12);
    opacity: 0.23;
  }
}
@keyframes rings-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mission-scan {
  55%,
  100% {
    transform: translateX(100%);
  }
}
@keyframes mark-wave {
  50% {
    transform: translateY(-6px);
  }
}
@keyframes team-marquee {
  to {
    transform: translateX(-50%);
  }
}
@media (max-width: 1050px) {
  .team-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .team-showcase {
    grid-template-columns: 1fr;
  }
  .leader-card {
    min-height: auto;
  }
  .leader-photo {
    flex: 0 0 580px;
    min-height: 580px;
  }
  .member-card {
    min-height: 390px;
  }
}
@media (max-width: 680px) {
  .team {
    padding: 90px 16px 70px;
  }
  .team-header h2 {
    font-size: clamp(2.7rem, 13vw, 4.4rem);
  }
  .team-facts {
    gap: 18px;
  }
  .leader-photo {
    flex-basis: 470px;
    min-height: 470px;
  }
  .leader-info {
    align-items: flex-start;
    flex-direction: column;
  }
  .leader-info p {
    max-width: none;
    text-align: left;
  }
  .members-grid {
    grid-template-columns: 1fr;
  }
  .member-card {
    min-height: 430px;
  }
  .mission-strip {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 24px;
  }
  .mission-mark {
    justify-content: flex-start;
  }
  .team-rings {
    opacity: 0.55;
  }
}
</style>
