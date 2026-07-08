<script setup>
import { computed } from "vue";

const props = defineProps({
  src: { type: String, default: "" },
  label: { type: String, default: "" },
  caption: { type: String, default: "" },
  chip: { type: String, default: "" },
  poster: { type: String, default: "" },
  comingSoon: { type: String, default: "Video en camino" },
  title: { type: String, default: "" },
});

const raw = computed(() => (props.src || "").trim());
const isYoutube = computed(() => /youtu\.?be/.test(raw.value));
const isVimeo = computed(() => /vimeo\.com/.test(raw.value));
const isFile = computed(() => /\.(mp4|webm|ogg)(\?.*)?$/i.test(raw.value));
const hasVideo = computed(() => Boolean(raw.value));

const embedUrl = computed(() => {
  if (isYoutube.value) {
    const match = raw.value.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}?rel=0` : raw.value;
  }
  if (isVimeo.value) {
    const match = raw.value.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return match ? `https://player.vimeo.com/video/${match[1]}` : raw.value;
  }
  return raw.value;
});
</script>

<template>
  <figure class="framed-video" data-tilt>
    <div class="frame-bar">
      <span class="frame-dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="frame-label">{{ label }}</span>
      <span v-if="chip" class="frame-chip">{{ chip }}</span>
    </div>

    <div class="frame-media">
      <iframe
        v-if="isYoutube || isVimeo"
        :src="embedUrl"
        :title="title || label"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>

      <video
        v-else-if="isFile"
        :src="raw"
        :poster="poster || undefined"
        controls
        preload="metadata"
      ></video>

      <div v-else class="frame-placeholder">
        <span class="play" aria-hidden="true">▶</span>
        <p>{{ comingSoon }}</p>
      </div>

      <span class="frame-glow" aria-hidden="true"></span>
      <span class="frame-scan" aria-hidden="true"></span>
    </div>

    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.framed-video {
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(57, 217, 138, 0.28);
  border-radius: 22px;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow:
    0 34px 80px rgba(0, 12, 24, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition:
    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}
.framed-video:hover {
  border-color: rgba(57, 217, 138, 0.55);
  box-shadow:
    0 44px 100px rgba(0, 12, 24, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
.frame-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(4, 22, 38, 0.55);
  backdrop-filter: blur(8px);
}
.frame-dots {
  display: inline-flex;
  gap: 6px;
}
.frame-dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
}
.frame-dots i:nth-child(1) {
  background: #ff5f57;
}
.frame-dots i:nth-child(2) {
  background: #febc2e;
}
.frame-dots i:nth-child(3) {
  background: var(--signal);
}
.frame-label {
  flex: 1;
  color: #cbdbe6;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.frame-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid rgba(57, 217, 138, 0.4);
  border-radius: 999px;
  color: var(--signal);
  font-size: 0.64rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}
.frame-media {
  position: relative;
  aspect-ratio: 16 / 9;
  background:
    radial-gradient(120% 120% at 50% 0%, rgba(57, 217, 138, 0.1), transparent 55%),
    #041626;
  overflow: hidden;
}
.frame-media iframe,
.frame-media video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  object-fit: cover;
}
.frame-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #9fb6c6;
}
.frame-placeholder .play {
  width: 66px;
  height: 66px;
  display: grid;
  place-items: center;
  padding-left: 4px;
  border-radius: 50%;
  background: var(--signal);
  color: var(--ink);
  font-size: 1.4rem;
  box-shadow: 0 0 0 0 rgba(57, 217, 138, 0.5);
  animation: play-pulse 2.4s ease-out infinite;
}
.frame-placeholder p {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.frame-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    130deg,
    transparent 40%,
    rgba(57, 217, 138, 0.06),
    transparent 62%
  );
}
.frame-scan {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    100deg,
    transparent 42%,
    rgba(255, 255, 255, 0.05),
    transparent 58%
  );
  transform: translateX(-100%);
  animation: frame-scan 6s ease-in-out infinite;
}
.framed-video:hover .frame-scan {
  animation-duration: 3.2s;
}
figcaption {
  padding: 16px 18px 18px;
  color: #a9c0cf;
  font-size: 0.9rem;
  line-height: 1.6;
}
@keyframes play-pulse {
  60% {
    box-shadow: 0 0 0 22px rgba(57, 217, 138, 0);
  }
}
@keyframes frame-scan {
  55%,
  100% {
    transform: translateX(100%);
  }
}
</style>
