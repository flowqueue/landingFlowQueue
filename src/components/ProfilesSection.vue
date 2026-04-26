<template>
  <section class="profiles-section">
    <div class="profiles-container">
      <div class="profiles-header">
        <h2>{{ $t("profiles.title") }}</h2>
        <p>{{ $t("profiles.label") }}</p>
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
            <button type="button" class="profile-button">
              {{ profile.buttonText }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfilesSection",
  data() {
    return {
      profiles: [
        {
          id: 1,
          initials: "CL",
          title: "Ciudadano",
          subtitle: "Usuario final",
          badgeClass: "badge-citizen",
          buttonText: "Obtener turno ahora",
          items: [
            "Obtener turno remoto",
            "Ver posición en cola",
            "Recibir notificaciones",
            "Reducir espera",
          ],
        },
        {
          id: 2,
          initials: "OP",
          title: "Operador",
          subtitle: "Personal administrativo",
          badgeClass: "badge-operator",
          buttonText: "Gestionar atención",
          items: [
            "Llamar turnos",
            "Priorizar casos especiales",
            "Controlar flujo en vivo",
            "Reducir el desorden",
          ],
        },
        {
          id: 3,
          initials: "SV",
          title: "Supervisor",
          subtitle: "Responsable de sede",
          badgeClass: "badge-supervisor",
          buttonText: "Ver métricas",
          items: [
            "Ver métricas por sede",
            "Identificar horas pico",
            "Generar reportes",
            "Optimizar recursos",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.profiles-section {
  background: #f5f2ec;
  padding: 72px 24px;
}

.profiles-container {
  max-width: 1200px;
  margin: 0 auto;
}

.profiles-header {
  margin-bottom: 32px;
}

.profiles-label {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #5d7590;
}

.profiles-title {
  margin: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: #214f82;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #dfe5ea;
  border-radius: 18px;
  padding: 18px 18px 20px;
  min-height: 350px;
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
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0) 80%
  );
  transform: translateX(-120%);
  transition: transform 0.5s ease;
  pointer-events: none;
}

.profile-card:hover::before {
  transform: translateX(120%);
}

.profile-card:hover {
  border: 2px solid #2b6aa4;
  box-shadow: 0 14px 28px rgba(34, 79, 130, 0.12);
  transform: translateY(-6px);
}

.profile-top {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #edf0f2;
}

.profile-badge {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #5c6a78;
  flex-shrink: 0;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.profile-card:hover .profile-badge {
  transform: scale(1.08);
  box-shadow: 0 6px 14px rgba(34, 79, 130, 0.12);
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
  font-size: 1rem;
  font-weight: 600;
  color: #365b80;
  transition: color 0.25s ease;
}

.profile-role {
  margin: 4px 0 0;
  font-size: 0.82rem;
  color: #8a97a5;
  transition: color 0.25s ease;
}

.profile-card:hover .profile-name {
  color: #214f82;
}

.profile-card:hover .profile-role {
  color: #6c7f92;
}

.profile-list {
  list-style: none;
  padding: 16px 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.profile-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #66727f;
  font-size: 0.95rem;
  line-height: 1.4;
  transition: transform 0.2s ease;
}

.profile-card:hover .profile-list li {
  transform: translateX(2px);
}

.check-icon {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  display: inline-grid;
  place-items: center;
  background: #e3f4ef;
  color: #44b89d;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.profile-card:hover .check-icon {
  transform: scale(1.08);
}

.profile-action {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transform: translateY(10px);
  transition: all 0.25s ease;
}

.profile-card:hover .profile-action {
  max-height: 80px;
  opacity: 1;
  transform: translateY(0);
  margin-top: 20px;
}

.profile-button {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  background: #dbe5f1;
  color: #547298;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.profile-button:hover {
  background: #cfdbeb;
  transform: scale(1.02);
  box-shadow: 0 8px 18px rgba(84, 114, 152, 0.18);
}

@media (max-width: 960px) {
  .profiles-grid {
    grid-template-columns: 1fr;
  }

  .profile-card {
    min-height: auto;
  }

  .profile-action {
    max-height: 80px;
    opacity: 1;
    transform: translateY(0);
    margin-top: 20px;
  }
}
</style>