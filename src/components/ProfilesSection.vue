<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
const profiles = computed(() => [
  {
    code: "01",
    key: "citizen",
    items: tm("profiles.citizen.items"),
    accent: "mint",
  },
  {
    code: "02",
    key: "operator",
    items: tm("profiles.operator.items"),
    accent: "blue",
  },
  {
    code: "03",
    key: "supervisor",
    items: tm("profiles.supervisor.items"),
    accent: "gold",
  },
]);
</script>

<template>
  <section class="profiles" id="solucion">
    <div class="section-shell">
      <div class="profiles-head" data-reveal>
        <div>
          <span class="section-kicker">{{ t("profiles.label") }}</span>
          <h2 class="section-heading">{{ t("profiles.title") }}</h2>
        </div>
        <p class="section-copy">{{ t("profiles.description") }}</p>
      </div>
      <div class="profile-board">
        <article
          v-for="(profile, index) in profiles"
          :key="profile.key"
          :class="['profile-panel', profile.accent]"
          data-reveal
          data-tilt
          :style="{ '--reveal-delay': `${index * 130}ms` }"
        >
          <div class="panel-top">
            <span>{{ profile.code }}</span>
            <div class="avatar" aria-hidden="true"><i></i><b></b></div>
          </div>
          <p class="role">{{ t(`profiles.${profile.key}.subtitle`) }}</p>
          <h3>{{ t(`profiles.${profile.key}.title`) }}</h3>
          <ul>
            <li v-for="item in profile.items.slice(0, 3)" :key="item">
              <span aria-hidden="true">✓</span>{{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profiles {
  padding: 120px 24px;
  background: var(--paper);
}
.profiles-head {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 50px;
  align-items: end;
  margin-bottom: 52px;
}
.profiles-head .section-heading {
  margin-bottom: 0;
}
.profile-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: white;
  box-shadow: var(--shadow-sm);
}
.profile-panel {
  position: relative;
  min-height: 430px;
  padding: 34px;
  border-right: 1px solid var(--line);
  overflow: hidden;
}
.profile-panel:last-child {
  border: 0;
}
.profile-panel::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  right: -150px;
  bottom: -170px;
  border-radius: 50%;
  background: var(--panel-color);
  opacity: 0.3;
  transition: transform 0.35s ease;
}
.profile-panel:hover::after {
  transform: scale(1.25);
}
.mint {
  --panel-color: var(--signal);
}
.blue {
  --panel-color: var(--blue);
}
.gold {
  --panel-color: var(--gold);
}
.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;
}
.panel-top > span {
  color: #8ca0ad;
  font-family: "Manrope";
  font-size: 0.75rem;
  font-weight: 800;
}
.avatar {
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 19px;
  background: color-mix(in srgb, var(--panel-color) 25%, white);
}
.avatar i {
  position: absolute;
  width: 14px;
  height: 14px;
  left: 22px;
  top: 12px;
  border-radius: 50%;
  background: var(--navy);
}
.avatar b {
  position: absolute;
  width: 28px;
  height: 16px;
  left: 15px;
  bottom: 10px;
  border-radius: 20px 20px 7px 7px;
  background: var(--navy);
}
.role {
  margin-bottom: 7px;
  color: var(--signal-dark);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.profile-panel h3 {
  margin-bottom: 26px;
  font-size: 1.7rem;
}
.profile-panel ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.profile-panel li {
  display: flex;
  gap: 10px;
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}
.profile-panel li span {
  color: var(--signal-dark);
  font-weight: 900;
}
@media (max-width: 900px) {
  .profiles {
    padding: 90px 20px;
  }
  .profiles-head {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  .profile-board {
    grid-template-columns: 1fr;
  }
  .profile-panel {
    min-height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
}
@media (max-width: 560px) {
  .profiles {
    padding: 75px 16px;
  }
  .profile-panel {
    padding: 26px;
  }
  .panel-top {
    margin-bottom: 28px;
  }
}
</style>
