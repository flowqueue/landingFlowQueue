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
  <div class="hero-mockup">
    <div class="hm-bar">
      <span class="hm-bar-brand">FlowQueue — RENIEC Lima Centro</span>
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
</template>

<style scoped>
.hero-mockup {
  background: #042C53;
  border: 0.5px solid #185FA5;
  border-radius: 12px;
  padding: 1rem;
  margin: 2rem auto 0;
  max-width: 520px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}

.hm-bar {
  background: #0C447C;
  border-radius: 6px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.hm-bar-brand {
  font-size: 12px;
  font-weight: 500;
  color: white;
}

.hm-bar-links {
  display: flex;
  gap: 12px;
}

.hm-bar-links span {
  font-size: 10px;
  color: #85B7EB;
}

.hm-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}

.hm-card {
  background: #0C447C;
  border-radius: 8px;
  padding: 10px 12px;
}

.hm-card-label {
  font-size: 10px;
  color: #85B7EB;
  margin-bottom: 4px;
}

.hm-card-val {
  font-size: 20px;
  font-weight: 500;
  color: white;
}

.hm-card-sub {
  font-size: 10px;
  color: #5DCAA5;
}

.hm-queue {
  background: #0C447C;
  border-radius: 8px;
  padding: 10px 12px;
}

.hm-queue-title {
  font-size: 10px;
  color: #85B7EB;
  margin-bottom: 8px;
}

.hm-ticket {
  background: #185FA5;
  border-radius: 6px;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.hm-ticket-num {
  font-size: 14px;
  font-weight: 500;
  color: white;
}

.hm-ticket-badge {
  background: #0C447C;
  border-radius: 4px;
  padding: 2px 7px;
  font-size: 9px;
  color: #B5D4F4;
}

.hm-ticket-next {
  background: #042C53;
  border-radius: 6px;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hm-ticket-next-num {
  font-size: 13px;
  color: #85B7EB;
}

.hm-ticket-next-time {
  font-size: 10px;
  color: #5F5E5A;
}

@media (max-width: 480px) {
  .hm-row {
    grid-template-columns: 1fr;
  }
}
</style>