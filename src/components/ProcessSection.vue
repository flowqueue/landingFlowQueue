<script setup>
import { useI18n } from "vue-i18n";
import FramedVideo from "@/components/FramedVideo.vue";
import {
  FLOWQUEUE_PROCESS_VIDEO_URL,
  FLOWQUEUE_DEMO_VIDEO_URL,
} from "@/config/links";

const { t } = useI18n();
</script>

<template>
  <section class="process" id="proceso">
    <div class="process-light" aria-hidden="true"></div>
    <div class="section-shell">
      <header class="process-header" data-reveal>
        <span class="section-kicker">{{ t("process.label") }}</span>
        <h2>{{ t("process.title") }}</h2>
        <p>{{ t("process.description") }}</p>
      </header>

      <div class="process-videos">
        <div class="video-main" data-reveal="left">
          <FramedVideo
            :src="FLOWQUEUE_PROCESS_VIDEO_URL"
            :label="t('process.videoLabel')"
            :caption="t('process.videoCaption')"
            :chip="t('process.chipProcess')"
            :coming-soon="t('process.comingSoon')"
            :title="t('process.title')"
          />
        </div>

        <div class="video-side" data-reveal="right">
          <FramedVideo
            :src="FLOWQUEUE_DEMO_VIDEO_URL"
            :label="t('process.demoLabel')"
            :caption="t('process.demoCaption')"
            :chip="t('process.chipDemo')"
            :coming-soon="t('process.comingSoon')"
            :title="t('process.demoLabel')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  position: relative;
  padding: 110px 24px 120px;
  overflow: hidden;
  color: white;
  background: var(--navy-deep);
}
.process::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.14;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 14%,
    black 84%,
    transparent
  );
}
.process-light {
  position: absolute;
  top: -220px;
  right: -160px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--signal);
  filter: blur(120px);
  opacity: 0.14;
  pointer-events: none;
}
.process-header {
  position: relative;
  max-width: 720px;
  margin-bottom: 54px;
}
.process .section-kicker {
  color: var(--signal);
}
.process-header h2 {
  margin: 0 0 18px;
  font-size: clamp(2.3rem, 4.6vw, 4rem);
  line-height: 1;
}
.process-header p {
  margin: 0;
  color: #b7ccd8;
  font-size: 1.06rem;
  line-height: 1.75;
}
.process-videos {
  position: relative;
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 22px;
  align-items: start;
}
@media (max-width: 980px) {
  .process {
    padding: 90px 20px 96px;
  }
  .process-videos {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .process {
    padding: 74px 16px 80px;
  }
  .process-header {
    margin-bottom: 38px;
  }
}
</style>
