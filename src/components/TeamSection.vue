<template>
  <section class="team-section">
    <div class="team-container">
      <div class="section-header">
        <h2>Sobre nosotros</h2>
      </div>

      <div class="team-grid">
        <div v-for="member in team" :key="member.id" class="team-card">
          <img :src="member.photo" :alt="member.name" class="team-photo" />
          <h3>{{ member.name }}</h3>
          <p class="team-role">{{ member.role }}</p>
        </div>
      </div>

      <p class="team-footer">EQUIPO DE FLOWQUEUE</p>
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
          role: "Frontend Developer",
          photo: "https://via.placeholder.com/220x220.png?text=Alexander",
        },
        {
          id: 2,
          name: "Carlos",
          role: "Backend Developer",
          photo: "https://via.placeholder.com/220x220.png?text=Carlos",
        },
        {
          id: 3,
          name: "Luis",
          role: "UX/UI Designer",
          photo: "https://via.placeholder.com/220x220.png?text=Luis",
        },
        {
          id: 4,
          name: "Jose",
          role: "Analista de Proyecto",
          photo: "https://via.placeholder.com/220x220.png?text=Jose",
        },
        {
          id: 5,
          name: "Marcelo",
          role: "Full Stack Developer",
          photo: "https://via.placeholder.com/220x220.png?text=Marcelo",
        },
      ],
    };
  },
};
</script>

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
}

.team-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
}

.team-role {
  margin: 0;
  font-size: 14px;
  color: #c7d9ec;
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