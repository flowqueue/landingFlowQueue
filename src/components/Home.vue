<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";
const { t, locale } = useI18n();
const isSpanish = computed(() => locale.value === "es");
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-orbit orbit-one"></div>
    <div class="hero-orbit orbit-two"></div>
    <div class="hero-particles" aria-hidden="true">
      <span v-for="index in 12" :key="index"></span>
    </div>
    <div class="hero-shell">
      <div class="hero-copy">
        <div class="eyebrow">
          <span></span
          >{{
            isSpanish
              ? "Colas digitales para servicios públicos"
              : "Digital queues for public services"
          }}
        </div>
        <h1>
          {{ t("home.titleStart") }} <em>{{ t("home.titleHighlight") }}</em>
        </h1>
        <p>{{ t("home.description") }}</p>
        <div class="hero-actions">
          <a
            :href="FLOWQUEUE_APP_URL"
            class="button-primary"
            data-magnetic
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("navbar.requestDemo") }} <span aria-hidden="true">↗</span></a
          >
          <a href="#como-funciona" class="button-secondary"
            >{{ t("home.secondaryButton") }}
            <span aria-hidden="true">↓</span></a
          >
        </div>
        <div class="hero-note">
          <span aria-hidden="true">●</span>
          {{
            isSpanish
              ? "Propuesta piloto · Datos demostrativos"
              : "Pilot proposal · Demonstration data"
          }}
        </div>
      </div>

      <div
        class="product-stage"
        id="producto"
        aria-label="Vista previa de FlowQueue"
      >
        <div class="ticket-float">
          <span>{{ isSpanish ? "Tu turno" : "Your ticket" }}</span>
          <strong>A-042</strong>
          <small>{{ isSpanish ? "2 personas antes" : "2 people ahead" }}</small>
        </div>
        <div class="dashboard-window">
          <div class="window-bar">
            <div class="window-brand">
              <span class="live-dot"></span> FlowQueue
            </div>
            <div class="window-meta">Lima Centro <span>•••</span></div>
          </div>
          <div class="dashboard-body">
            <div class="dashboard-title">
              <div>
                <small>{{
                  isSpanish ? "Panel de atención" : "Service dashboard"
                }}</small>
                <h2>{{ isSpanish ? "Cola en vivo" : "Live queue" }}</h2>
              </div>
              <span class="live-pill">● LIVE</span>
            </div>
            <div class="metric-row">
              <article>
                <small>{{ isSpanish ? "En espera" : "Waiting" }}</small
                ><strong>47</strong><span>personas</span>
              </article>
              <article>
                <small>{{
                  isSpanish ? "Espera estimada" : "Estimated wait"
                }}</small
                ><strong>18<sup>min</sup></strong
                ><span>{{ isSpanish ? "promedio" : "average" }}</span>
              </article>
            </div>
            <div class="queue-list">
              <div class="queue-head">
                <span>{{ isSpanish ? "Turno" : "Ticket" }}</span
                ><span>{{ isSpanish ? "Estado" : "Status" }}</span
                ><span>{{ isSpanish ? "Módulo" : "Desk" }}</span>
              </div>
              <div class="queue-item active">
                <strong>A-041</strong
                ><span>{{ isSpanish ? "En atención" : "In service" }}</span
                ><b>03</b>
              </div>
              <div class="queue-item">
                <strong>A-042</strong
                ><span>{{ isSpanish ? "Siguiente" : "Next" }}</span
                ><b>—</b>
              </div>
              <div class="queue-item">
                <strong>A-043</strong
                ><span>{{ isSpanish ? "En espera" : "Waiting" }}</span
                ><b>—</b>
              </div>
            </div>
          </div>
        </div>
        <div class="time-float">
          <span>↘</span><strong>-30%</strong
          ><small>{{
            isSpanish ? "objetivo de espera" : "wait-time target"
          }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 820px;
  padding: 154px 24px 100px;
  overflow: hidden;
  color: white;
  background: var(--navy-deep);
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black, transparent 85%);
}
.hero-orbit {
  position: absolute;
  border: 1px solid rgba(57, 217, 138, 0.16);
  border-radius: 50%;
}
.orbit-one {
  width: 700px;
  height: 700px;
  right: -230px;
  top: -250px;
  animation: orbit-spin 28s linear infinite;
}
.orbit-two {
  width: 420px;
  height: 420px;
  right: -80px;
  top: -110px;
  animation: orbit-spin 20s linear infinite reverse;
}
.hero-shell {
  position: relative;
  width: min(100%, var(--container));
  min-width: 0;
  margin: auto;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 70px;
}
.hero-copy,
.product-stage {
  min-width: 0;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
  color: #a9c9d9;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.eyebrow span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 6px rgba(57, 217, 138, 0.12);
}
h1 {
  max-width: 620px;
  margin-bottom: 24px;
  font-size: clamp(3.2rem, 5.2vw, 5rem);
  line-height: 0.93;
}
h1 em {
  display: block;
  color: var(--signal);
  font-style: normal;
  background: linear-gradient(
    110deg,
    var(--signal) 20%,
    var(--signal-soft) 48%,
    var(--signal) 76%
  );
  background-size: 220% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: title-shimmer 5s linear infinite;
}
.hero-copy > p {
  max-width: 590px;
  margin-bottom: 30px;
  color: #c7d9e4;
  font-size: 1.12rem;
  line-height: 1.75;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.hero-note {
  margin-top: 24px;
  color: #91aebf;
  font-size: 0.82rem;
}
.hero-note span {
  color: var(--signal);
}
.hero-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-particles span {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--signal);
  opacity: 0;
  box-shadow: 0 0 12px rgba(57, 217, 138, 0.8);
  animation: particle-drift 8s ease-in-out infinite;
}
.hero-particles span:nth-child(1) {
  left: 8%;
  top: 34%;
  animation-delay: -1s;
}
.hero-particles span:nth-child(2) {
  left: 17%;
  top: 76%;
  animation-delay: -4s;
}
.hero-particles span:nth-child(3) {
  left: 31%;
  top: 18%;
  animation-delay: -2s;
}
.hero-particles span:nth-child(4) {
  left: 43%;
  top: 68%;
  animation-delay: -6s;
}
.hero-particles span:nth-child(5) {
  left: 55%;
  top: 28%;
  animation-delay: -3s;
}
.hero-particles span:nth-child(6) {
  left: 68%;
  top: 82%;
  animation-delay: -7s;
}
.hero-particles span:nth-child(7) {
  left: 78%;
  top: 12%;
  animation-delay: -5s;
}
.hero-particles span:nth-child(8) {
  left: 88%;
  top: 58%;
  animation-delay: -2.5s;
}
.hero-particles span:nth-child(9) {
  left: 94%;
  top: 30%;
  animation-delay: -6.5s;
}
.hero-particles span:nth-child(10) {
  left: 6%;
  top: 88%;
  animation-delay: -3.5s;
}
.hero-particles span:nth-child(11) {
  left: 60%;
  top: 10%;
  animation-delay: -4.5s;
}
.hero-particles span:nth-child(12) {
  left: 37%;
  top: 90%;
  animation-delay: -1.5s;
}
.hero-copy > * {
  animation: hero-rise 0.8s cubic-bezier(0.2, 0.75, 0.25, 1) both;
}
.hero-copy > .eyebrow {
  animation-delay: 0.2s;
}
.hero-copy > h1 {
  animation-delay: 0.3s;
}
.hero-copy > p {
  animation-delay: 0.42s;
}
.hero-actions {
  animation-delay: 0.54s;
}
.hero-note {
  animation-delay: 0.66s;
}
.product-stage {
  position: relative;
  padding: 45px 0 25px;
  animation: stage-enter 1s 0.38s cubic-bezier(0.2, 0.75, 0.25, 1) both;
}
.dashboard-window {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 28px;
  background: #f7fbfd;
  color: var(--ink);
  box-shadow: 0 40px 110px rgba(0, 18, 34, 0.55);
  transform: rotate(1.2deg);
  animation: dashboard-float 6s 1.4s ease-in-out infinite;
}
.window-bar {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  color: #d7e6ee;
  background: var(--navy);
  font-size: 0.78rem;
}
.window-brand {
  font-weight: 800;
}
.live-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 6px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 5px rgba(57, 217, 138, 0.12);
  animation: live-pulse 1.8s ease-out infinite;
}
.window-meta {
  display: flex;
  gap: 18px;
  color: #9eb8c9;
}
.dashboard-body {
  padding: 28px;
}
.dashboard-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 22px;
}
.dashboard-title small {
  color: #718797;
}
.dashboard-title h2 {
  margin: 3px 0 0;
  font-size: 1.7rem;
}
.live-pill {
  padding: 7px 10px;
  border-radius: 999px;
  background: #dff8ec;
  color: #08744b;
  font-size: 0.68rem;
  font-weight: 900;
}
.metric-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.metric-row article {
  padding: 18px;
  border: 1px solid #dce8ed;
  border-radius: 16px;
  background: white;
}
.metric-row small,
.metric-row span {
  display: block;
  color: #718797;
  font-size: 0.72rem;
}
.metric-row strong {
  display: block;
  margin: 8px 0 2px;
  font-family: "Manrope", sans-serif;
  font-size: 2rem;
}
.metric-row sup {
  margin-left: 3px;
  font-size: 0.7rem;
}
.queue-list {
  margin-top: 14px;
  padding: 8px 14px;
  border: 1px solid #dce8ed;
  border-radius: 16px;
  background: white;
}
.queue-head,
.queue-item {
  display: grid;
  grid-template-columns: 1fr 1.3fr 0.5fr;
  align-items: center;
  gap: 8px;
  padding: 11px 5px;
  font-size: 0.74rem;
}
.queue-head {
  color: #8699a6;
  border-bottom: 1px solid #e7eef1;
}
.queue-item {
  border-bottom: 1px solid #edf2f4;
  color: #617784;
}
.queue-item:last-child {
  border: 0;
}
.queue-item.active {
  position: relative;
  overflow: hidden;
}
.queue-item.active::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(57, 217, 138, 0.14),
    transparent
  );
  transform: translateX(-110%);
  animation: queue-scan 2.6s ease-in-out infinite;
}
.queue-item.active span {
  color: #08744b;
  font-weight: 700;
}
.queue-item b {
  text-align: right;
}
.ticket-float,
.time-float {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(18px);
}
.ticket-float {
  top: 0;
  right: -28px;
  width: 150px;
  padding: 16px;
  border-radius: 18px;
  background: rgba(57, 217, 138, 0.92);
  color: var(--ink);
  transform: rotate(4deg);
  animation: ticket-bob 4s 1.3s ease-in-out infinite;
}
.ticket-float span,
.ticket-float small {
  font-size: 0.7rem;
  font-weight: 700;
}
.ticket-float strong {
  font-family: "Manrope";
  font-size: 1.8rem;
}
.time-float {
  left: -32px;
  bottom: -8px;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(7, 61, 103, 0.93);
  color: white;
}
.time-float > span {
  position: absolute;
  right: 13px;
  color: var(--signal);
}
.time-float strong {
  font-size: 1.3rem;
}
.time-float small {
  color: #abc2d1;
}

@keyframes hero-rise {
  from {
    opacity: 0;
    transform: translateY(28px);
    filter: blur(7px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
@keyframes stage-enter {
  from {
    opacity: 0;
    transform: translate(45px, 25px) scale(0.94);
    filter: blur(9px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
@keyframes dashboard-float {
  0%,
  100% {
    transform: rotate(1.2deg) translateY(0);
  }
  50% {
    transform: rotate(0.4deg) translateY(-10px);
  }
}
@keyframes ticket-bob {
  0%,
  100% {
    transform: rotate(4deg) translateY(0);
  }
  50% {
    transform: rotate(1deg) translateY(-13px);
  }
}
@keyframes live-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(57, 217, 138, 0.5);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(57, 217, 138, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(57, 217, 138, 0);
  }
}
@keyframes queue-scan {
  50%,
  100% {
    transform: translateX(110%);
  }
}
@keyframes orbit-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes particle-drift {
  0%,
  100% {
    opacity: 0;
    transform: translateY(22px) scale(0.6);
  }
  35%,
  65% {
    opacity: 0.65;
  }
  50% {
    transform: translate(12px, -34px) scale(1.25);
  }
}
@keyframes title-shimmer {
  to {
    background-position: 220% center;
  }
}

@media (max-width: 980px) {
  .hero {
    min-height: auto;
    padding: 130px 20px 90px;
  }
  .hero-shell {
    grid-template-columns: minmax(0, 1fr);
    gap: 45px;
  }
  .hero-copy {
    text-align: center;
  }
  .eyebrow,
  .hero-actions {
    justify-content: center;
  }
  .hero-copy > p {
    margin-inline: auto;
  }
  .product-stage {
    width: min(100%, 680px);
    margin: auto;
  }
  .ticket-float {
    right: 0;
  }
  .time-float {
    left: 0;
  }
}
@media (max-width: 560px) {
  .hero {
    padding: 112px 16px 70px;
  }
  h1 {
    font-size: clamp(2.65rem, 14vw, 4rem);
  }
  .hero-copy > p {
    font-size: 1rem;
  }
  .hero-actions {
    display: grid;
  }
  .button-primary,
  .button-secondary {
    width: 100%;
  }
  .product-stage {
    padding-top: 25px;
  }
  .dashboard-window {
    border-radius: 20px;
    transform: none;
  }
  .dashboard-body {
    padding: 16px;
  }
  .window-bar {
    padding: 0 14px;
  }
  .window-meta {
    display: none;
  }
  .metric-row article {
    padding: 13px;
  }
  .metric-row strong {
    font-size: 1.5rem;
  }
  .queue-head,
  .queue-item {
    grid-template-columns: 0.8fr 1.3fr 0.4fr;
  }
  .ticket-float {
    top: 0;
    right: 8px;
    width: 122px;
    padding: 11px;
  }
  .ticket-float strong {
    font-size: 1.35rem;
  }
  .time-float {
    display: none;
  }
}
</style>
