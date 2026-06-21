<script setup>
import { useI18n } from "vue-i18n";
import { FLOWQUEUE_APP_URL } from "@/config/links";
const { t, locale } = useI18n();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="section-shell">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#home">Flow<span>Queue</span></a>
          <p>{{ t("footer.description") }}</p>
        </div>
        <nav :aria-label="locale === 'es' ? 'Enlaces del pie' : 'Footer links'">
          <a href="#producto">{{ t("navbar.features") }}</a
          ><a href="#como-funciona">{{ t("navbar.howItWorks") }}</a
          ><a href="#casos-uso">{{ t("navbar.useCases") }}</a
          ><a
            :href="FLOWQUEUE_APP_URL"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("navbar.requestDemo") }}</a
          >
        </nav>
        <div class="footer-contact">
          <span>{{ t("footer.contactTitle") }}</span
          ><a href="mailto:contacto@flowqueue.pe">contacto@flowqueue.pe</a>
          <p>Lima, Perú</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© {{ year }} FlowQueue. {{ t("footer.rights") }}</p>
        <p>
          {{
            locale === "es"
              ? "Proyecto académico · Propuesta piloto"
              : "Academic project · Pilot proposal"
          }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 70px 24px 26px;
  background: var(--navy-deep);
  color: white;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 0.8fr;
  gap: 70px;
  padding-bottom: 50px;
}
.footer-brand > a {
  font-family: "Manrope";
  font-size: 1.4rem;
  font-weight: 900;
  text-decoration: none;
}
.footer-brand > a span {
  color: var(--signal);
}
.footer-brand p {
  max-width: 430px;
  margin: 16px 0 0;
  color: #9eb7c7;
  line-height: 1.65;
}
.footer nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: 14px;
}
.footer nav a {
  color: #c4d5df;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
}
.footer nav a:hover,
.footer-contact a:hover {
  color: var(--signal);
}
.footer-contact span {
  display: block;
  margin-bottom: 15px;
  color: #7191a5;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.footer-contact a {
  color: white;
  font-weight: 700;
  text-decoration: none;
}
.footer-contact p {
  margin: 8px 0 0;
  color: #9eb7c7;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #7896a8;
  font-size: 0.78rem;
}
.footer-bottom p {
  margin: 0;
}
@media (max-width: 800px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .footer-bottom {
    flex-direction: column;
  }
}
@media (max-width: 560px) {
  .footer {
    padding: 55px 16px 24px;
  }
  .footer nav {
    grid-template-columns: 1fr;
  }
}
</style>
