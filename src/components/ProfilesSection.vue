<template>
  <section class="profiles-section">
    <div class="profiles-container">
      <div class="profiles-header">
        <p class="profiles-label">PARA QUIÉN</p>
        <h2 class="profiles-title">Una plataforma, tres perfiles</h2>
      </div>

      <div class="profiles-grid">
        <article
            v-for="profile in profiles"
            :key="profile.id"
            class="profile-card"
            :class="{ featured: profile.featured }"
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

          <button
              v-if="profile.featured"
              type="button"
              class="profile-button"
          >
            Obtener turno ahora
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      team: [
        {
          id: 1,
          name: "Alexander",
          role: "Miembro",
          photo: "https://via.placeholder.com/220x220.png?text=Alexander",
        },
        {
          id: 2,
          name: "Carlos",
          role: "Miembro",
          photo: "https://via.placeholder.com/220x220.png?text=Carlos",
        },
        {
          id: 3,
          name: "Luis",
          role: "Team Leader",
          photo: "https://via.placeholder.com/220x220.png?text=Luis",
        },
        {
          id: 4,
          name: "Jose",
          role: "Miembro",
          photo: "https://via.placeholder.com/220x220.png?text=Jose",
        },
        {
          id: 5,
          name: "Marcelo",
          role: "Miembro",
          photo: "https://via.placeholder.com/220x220.png?text=Marcelo",
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
  border: 1px solid #e3e7eb;
  border-radius: 16px;
  padding: 18px 18px 16px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

.profile-card.featured {
  border: 2px solid #2b6aa4;
  box-shadow: 0 8px 18px rgba(34, 79, 130, 0.08);
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
}

.profile-role {
  margin: 4px 0 0;
  font-size: 0.82rem;
  color: #8a97a5;
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
}

.profile-button {
  margin-top: 22px;
  border: none;
  border-radius: 12px;
  padding: 14px 18px;
  background: #dbe5f1;
  color: #547298;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
}

.profile-button:hover {
  background: #cfdbeb;
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