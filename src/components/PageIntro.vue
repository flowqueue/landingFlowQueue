<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const visible = ref(false);
let hideTimer;

const finishIntro = () => {
  visible.value = false;
  document.body.classList.remove("intro-visible");
  sessionStorage.setItem("flowqueue_intro_seen", "true");
};

onMounted(() => {
  const alreadySeen = sessionStorage.getItem("flowqueue_intro_seen") === "true";
  const reduced = document.documentElement.dataset.motion === "reduced";
  if (alreadySeen || reduced) return;

  visible.value = true;
  document.body.classList.add("intro-visible");
  hideTimer = window.setTimeout(finishIntro, 2300);
});

onBeforeUnmount(() => {
  window.clearTimeout(hideTimer);
  document.body.classList.remove("intro-visible");
});
</script>

<template>
  <div
    v-if="visible"
    class="page-intro"
    aria-hidden="true"
    @animationend.self="finishIntro"
  >
    <div class="intro-grid"></div>
    <div class="intro-content">
      <div class="intro-mark"><i></i><i></i><i></i></div>
      <div class="intro-name">Flow<span>Queue</span></div>
      <div class="intro-line"><span></span></div>
      <p>Turnos inteligentes · Atención sin filas</p>
    </div>
  </div>
</template>

<style scoped>
.page-intro {
  position: fixed;
  z-index: 10000;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: var(--navy-deep);
  color: white;
  animation: intro-shell 1.9s cubic-bezier(0.65, 0, 0.35, 1) both;
}
.intro-grid {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 56px 56px;
  animation: intro-grid 1.5s ease both;
}
.intro-content {
  position: relative;
  width: min(330px, calc(100% - 48px));
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.intro-mark {
  position: relative;
  width: 72px;
  height: 72px;
  margin-bottom: 22px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  animation: intro-mark 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.intro-mark::before,
.intro-mark::after {
  content: "";
  position: absolute;
  top: 35px;
  left: 17px;
  width: 38px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
  transform: rotate(28deg);
}
.intro-mark::after {
  transform: rotate(-28deg);
}
.intro-mark i {
  position: absolute;
  z-index: 1;
  top: 32px;
  left: 32px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 18px rgba(53, 226, 141, 0.8);
}
.intro-mark i:first-child {
  transform: translate(-17px, 9px);
}
.intro-mark i:last-child {
  transform: translate(17px, -9px);
}
.intro-name {
  font-family: "Manrope", sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.06em;
  animation: intro-copy 0.65s 0.2s ease both;
}
.intro-name span {
  color: var(--signal);
}
.intro-line {
  width: 100%;
  height: 2px;
  margin: 22px 0 14px;
  overflow: hidden;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.12);
}
.intro-line span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--signal);
  transform-origin: left;
  animation: intro-progress 1.15s 0.15s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}
.intro-content p {
  margin: 0;
  color: #9eb9c9;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  animation: intro-copy 0.65s 0.35s ease both;
}
@keyframes intro-shell {
  0%,
  72% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
    filter: blur(10px);
    pointer-events: none;
  }
}
@keyframes intro-mark {
  from {
    opacity: 0;
    transform: scale(0.45) rotate(-90deg);
  }
}
@keyframes intro-copy {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}
@keyframes intro-progress {
  from {
    transform: scaleX(0);
  }
}
@keyframes intro-grid {
  from {
    opacity: 0;
    transform: scale(1.12);
  }
}
</style>
