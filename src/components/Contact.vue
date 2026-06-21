<script setup>
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";

const { t, locale } = useI18n();
const mapUrl = "https://www.google.com/maps?q=Lima,+Peru&z=12&output=embed";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Lima%2C%20Peru";
</script>

<template>
  <section class="contact" id="contacto">
    <div class="contact-orbit" aria-hidden="true"></div>
    <div class="section-shell">
      <header class="contact-heading" data-reveal>
        <div>
          <span class="section-kicker">{{ t("contact.label") }}</span>
          <h2 class="section-heading">{{ t("contact.title") }}</h2>
        </div>
        <p class="section-copy">{{ t("contact.description") }}</p>
      </header>

      <div class="contact-layout">
        <div class="map-stage" data-reveal="left">
          <iframe
            :src="mapUrl"
            :title="
              locale === 'es'
                ? 'Mapa de ubicación de FlowQueue en Lima, Perú'
                : 'FlowQueue location map in Lima, Peru'
            "
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="map-tint" aria-hidden="true"></div>
          <div class="map-grid" aria-hidden="true"></div>
          <div class="map-pin" aria-hidden="true"><span></span></div>
          <div class="location-chip">
            <span class="chip-status" aria-hidden="true"></span>
            <div>
              <small>{{
                locale === "es" ? "Base operativa" : "Operating base"
              }}</small
              ><strong>Lima, Perú</strong>
            </div>
          </div>
          <a
            class="map-link"
            :href="directionsUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ locale === "es" ? "Abrir mapa" : "Open map" }}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <aside class="contact-panel" data-reveal="right">
          <div class="panel-label">FLOWQUEUE / CONTACT</div>
          <h3>
            {{
              locale === "es"
                ? "Conversemos sobre tu próxima sede piloto."
                : "Let’s talk about your next pilot location."
            }}
          </h3>
          <p>
            {{
              locale === "es"
                ? "Cuéntanos cómo funciona hoy tu atención y revisaremos contigo dónde puede generar más impacto una cola digital."
                : "Tell us how your service works today and we will identify where a digital queue can have the most impact."
            }}
          </p>

          <div class="contact-list">
            <a href="mailto:contacto@flowqueue.pe" class="contact-item">
              <span class="item-icon" aria-hidden="true">@</span>
              <span
                ><small>{{ locale === "es" ? "Correo" : "Email" }}</small
                ><strong>contacto@flowqueue.pe</strong></span
              >
              <b aria-hidden="true">↗</b>
            </a>
            <a href="tel:+51987654321" class="contact-item">
              <span class="item-icon phone" aria-hidden="true">⌕</span>
              <span
                ><small>{{ locale === "es" ? "Teléfono" : "Phone" }}</small
                ><strong>+51 987 654 321</strong></span
              >
              <b aria-hidden="true">↗</b>
            </a>
            <div class="contact-item">
              <span class="item-icon clock" aria-hidden="true">◷</span>
              <span
                ><small>{{ locale === "es" ? "Horario" : "Hours" }}</small
                ><strong>{{
                  locale === "es"
                    ? "Lun–Vie · 9:00–18:00"
                    : "Mon–Fri · 9:00–18:00"
                }}</strong></span
              >
            </div>
          </div>

          <a
            :href="FLOWQUEUE_APP_URL"
            class="contact-cta"
            data-magnetic
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("navbar.requestDemo") }} <span aria-hidden="true">↗</span></a
          >
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  padding: 120px 24px;
  overflow: hidden;
  background: var(--mist);
}
.contact::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.32;
  background-image:
    linear-gradient(rgba(7, 61, 103, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(7, 61, 103, 0.08) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}
.contact-orbit {
  position: absolute;
  width: 620px;
  height: 620px;
  right: -310px;
  top: -300px;
  border: 1px solid rgba(22, 125, 88, 0.18);
  border-radius: 50%;
  box-shadow:
    0 0 0 70px rgba(22, 125, 88, 0.04),
    0 0 0 140px rgba(22, 125, 88, 0.03);
  animation: contact-orbit 18s linear infinite;
}
.contact-heading {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: end;
  gap: 60px;
  margin-bottom: 52px;
}
.contact-heading .section-heading {
  margin-bottom: 0;
}
.contact-heading .section-copy {
  margin-bottom: 3px;
}
.contact-layout {
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  min-height: 570px;
  border: 1px solid rgba(7, 36, 59, 0.12);
  border-radius: 32px;
  background: white;
  box-shadow: 0 32px 80px rgba(4, 41, 70, 0.14);
  overflow: hidden;
}
.map-stage {
  position: relative;
  min-height: 570px;
  overflow: hidden;
  background: #b8ddd3;
}
.map-stage iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: saturate(0.72) contrast(1.05);
}
.map-tint {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    rgba(5, 47, 80, 0.12),
    transparent 45%,
    rgba(57, 217, 138, 0.12)
  );
  mix-blend-mode: multiply;
}
.map-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.14;
  background-image:
    linear-gradient(white 1px, transparent 1px),
    linear-gradient(90deg, white 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(135deg, black, transparent 62%);
}
.map-pin {
  position: absolute;
  left: 53%;
  top: 47%;
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50% 50% 50% 0;
  background: var(--navy);
  box-shadow: 0 12px 28px rgba(5, 47, 80, 0.35);
  transform: rotate(-45deg);
  animation: pin-float 2.8s ease-in-out infinite;
}
.map-pin::before {
  content: "";
  position: absolute;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(5, 47, 80, 0.28);
  border-radius: 50%;
  animation: map-radar 2s ease-out infinite;
  transform: rotate(45deg);
}
.map-pin span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--signal);
  transform: rotate(45deg);
}
.location-chip {
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 17px;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 15px;
  background: rgba(5, 47, 80, 0.9);
  color: white;
  box-shadow: 0 18px 40px rgba(5, 47, 80, 0.24);
  backdrop-filter: blur(15px);
}
.chip-status {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 0 6px rgba(57, 217, 138, 0.13);
  animation: status-pulse 1.8s ease-out infinite;
}
.location-chip small,
.location-chip strong {
  display: block;
}
.location-chip small {
  margin-bottom: 2px;
  color: #9eb9ca;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.location-chip strong {
  font-family: "Manrope";
  font-size: 0.9rem;
}
.map-link {
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 13px 16px;
  border-radius: 13px;
  background: white;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 900;
  text-decoration: none;
  box-shadow: 0 14px 34px rgba(5, 47, 80, 0.18);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.map-link:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(5, 47, 80, 0.25);
}
.map-link span {
  transition: transform 0.2s ease;
}
.map-link:hover span {
  transform: translate(3px, -3px);
}
.contact-panel {
  display: flex;
  flex-direction: column;
  padding: 42px;
  background: #fff;
}
.panel-label {
  margin-bottom: 18px;
  color: var(--signal-dark);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}
.contact-panel > h3 {
  margin-bottom: 16px;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.05;
}
.contact-panel > p {
  margin-bottom: 28px;
  color: var(--ink-soft);
  line-height: 1.65;
}
.contact-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--line);
}
.contact-item {
  display: grid;
  grid-template-columns: 42px 1fr 24px;
  align-items: center;
  gap: 12px;
  padding: 17px 0;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  text-decoration: none;
  transition:
    padding 0.25s ease,
    color 0.25s ease;
}
.contact-item:is(a):hover {
  padding-left: 8px;
  color: var(--signal-dark);
}
.item-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: var(--sky);
  color: var(--navy);
  font-weight: 900;
}
.item-icon.phone {
  background: #e8f0f8;
}
.item-icon.clock {
  background: #fff3d9;
}
.contact-item small,
.contact-item strong {
  display: block;
}
.contact-item small {
  margin-bottom: 3px;
  color: #7b909d;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.contact-item strong {
  font-size: 0.86rem;
}
.contact-item b {
  text-align: right;
  font-weight: 500;
}
.contact-cta {
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: auto;
  border-radius: 14px;
  background: var(--navy);
  color: white;
  font-weight: 900;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.contact-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 30px rgba(5, 47, 80, 0.22);
}
.contact-cta span {
  color: var(--signal);
  transition: transform 0.2s ease;
}
.contact-cta:hover span {
  transform: translate(3px, -3px);
}
@keyframes map-radar {
  to {
    transform: rotate(45deg) scale(2.2);
    opacity: 0;
  }
}
@keyframes pin-float {
  50% {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
@keyframes status-pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(57, 217, 138, 0);
  }
}
@keyframes contact-orbit {
  to {
    transform: rotate(360deg);
  }
}
@media (max-width: 960px) {
  .contact {
    padding: 90px 20px;
  }
  .contact-heading {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .contact-layout {
    grid-template-columns: 1fr;
  }
  .map-stage {
    min-height: 450px;
  }
  .contact-panel {
    min-height: 520px;
  }
}
@media (max-width: 600px) {
  .contact {
    padding: 75px 16px;
  }
  .contact-layout {
    border-radius: 22px;
  }
  .map-stage {
    min-height: 390px;
  }
  .contact-panel {
    min-height: auto;
    padding: 27px 21px;
  }
  .location-chip {
    left: 14px;
    bottom: 14px;
  }
  .map-link {
    right: 14px;
    bottom: 14px;
    padding: 12px;
  }
  .location-chip {
    max-width: 175px;
  }
  .contact-panel > h3 {
    font-size: 2rem;
  }
  .contact-cta {
    margin-top: 26px;
  }
}
</style>
