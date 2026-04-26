<script setup>
const stats = {
  espera: 47,
  tiempoEstimado: '18 min',
  ticketActual: 'A-041',
  ventana: 3,
  proximoTicket: 'A-042',
  proximoTiempo: '~3 min'
}
</script>

<template>
  <div class="mockup-wrapper">
    <div class="hero-mockup">
      <div class="hm-bar">
        <span class="hm-bar-brand">
          <span class="status-dot"></span> FlowQueue — RENIEC Lima Centro
        </span>
        <div class="hm-bar-links">
          <span>Dashboard</span>
          <span>Turnos</span>
        </div>
      </div>

      <div class="hm-row">
        <div class="hm-card">
          <div class="hm-card-label">En espera ahora</div>
          <div class="hm-card-val">{{ stats.espera }}</div>
          <div class="hm-card-sub">personas en cola</div>
        </div>
        <div class="hm-card">
          <div class="hm-card-label">T. espera estimado</div>
          <div class="hm-card-val">{{ stats.tiempoEstimado }}</div>
          <div class="hm-card-sub">promedio actual</div>
        </div>
      </div>

      <div class="hm-queue">
        <div class="hm-queue-title">Cola en vivo</div>
        <div class="hm-ticket">
          <span class="hm-ticket-num">{{ stats.ticketActual }} — En atención</span>
          <span class="hm-ticket-badge">Ventana {{ stats.ventana }}</span>
        </div>
        <div class="hm-ticket-next">
          <span class="hm-ticket-next-num">{{ stats.proximoTicket }} — próximo</span>
          <span class="hm-ticket-next-time">{{ stats.proximoTiempo }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mockup-wrapper {
  width: 100%;
  background-color: #0C447C;
  padding: 0 20px 60px 20px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.hero-mockup {
  background: #042C53;
  border: 1px solid rgba(24, 95, 165, 0.6);
  border-radius: 20px;
  color:white;
  font-family:sans-serif;
  padding: 1.5rem;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.8s ease-out;
}

/* Animación de entrada */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hm-bar {
  background: rgba(12, 68, 124, 0.5);
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #22c55e;
  border-radius: 50%;
  margin-right: 8px;
  box-shadow: 0 0 8px #22c55e;
}

.hm-bar-brand {
  font-size: 14px;
  color: white;
  font-weight: 500;
}

.hm-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.hm-card {
  background: #0C447C;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease;
}

.hm-card:hover {
  transform: scale(1.02);
}

.hm-card-label {
  font-size: 12px;
  color: #85B7EB;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.hm-card-val {
  font-size: 32px;
  font-weight: 700;
  color: white;
}

.hm-queue {
  background: #0C447C;
  border-radius: 12px;
  padding: 20px;
}

.hm-ticket {
  background: #185FA5;
  border-radius: 10px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.hm-ticket-num {
  font-size: 18px;
  font-weight: 600;
  color: white;
}


.hm-ticket-num::before {
  content: '●';
  color: #22c55e;
  margin-right: 10px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
  100% { opacity: 1; transform: scale(1); }
}

.hm-ticket-badge {
  background: #042C53;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 11px;
  color: #5DCAA5;
  border: 1px solid rgba(93, 202, 165, 0.3);
}

@media (max-width: 640px) {
  .hm-row {
    grid-template-columns: 1fr;
  }
  .hm-card-val {
    font-size: 26px;
  }
}
</style>