<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const currentYear = new Date().getFullYear();
const { t, tm } = useI18n();

const productLinks = computed(() => tm("footer.productLinks"));
const companyLinks = computed(() => tm("footer.companyLinks"));
const legalLinks = computed(() => tm("footer.legalLinks"));
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand-block">
          <a href="#home" class="footer-brand">
            Flow<span>Queue</span>
          </a>

          <p class="footer-description">
            {{ t("footer.description") }}
          </p>

          <div class="footer-socials">
            <a href="https://github.com/flowqueue" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="#" target="_blank" rel="noopener">
              Instagram
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3>{{ t("footer.productTitle") }}</h3>
          <a
              v-for="(link, index) in productLinks"
              :key="index"
              :href="link.href"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="footer-column">
          <h3>{{ t("footer.companyTitle") }}</h3>
          <a
              v-for="(link, index) in companyLinks"
              :key="index"
              :href="link.href"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="footer-column">
          <h3>{{ t("footer.legalTitle") }}</h3>
          <a
              v-for="(link, index) in legalLinks"
              :key="index"
              :href="link.href"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="footer-column contact-column">
          <h3>{{ t("footer.contactTitle") }}</h3>
          <p>{{ t("footer.email") }}</p>
          <p>{{ t("footer.phone") }}</p>
          <p>{{ t("footer.location") }}</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>
          © {{ currentYear }} <strong>FlowQueue</strong>. {{ t("footer.rights") }}
        </p>

        <p class="footer-note">
          {{ t("footer.note") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #042c53;
  padding: 4rem 1.5rem 2rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 34px;
  align-items: start;
}

.footer-brand {
  display: inline-block;
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  text-decoration: none;
  margin-bottom: 14px;
}

.footer-brand span {
  color: #22c55e;
}

.footer-description {
  max-width: 340px;
  margin: 0 0 18px;
  color: #b8cce0;
  line-height: 1.7;
  font-size: 0.94rem;
}

.footer-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-socials a {
  color: #dcecff;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  transition: all 0.2s ease;
}

.footer-socials a:hover {
  background: #22c55e;
  color: white;
  transform: translateY(-2px);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-column h3 {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 800;
}

.footer-column a,
.footer-column p {
  margin: 0;
  color: #9fc2e4;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1.5;
  transition: color 0.2s ease, transform 0.2s ease;
}

.footer-column a:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.contact-column p {
  color: #b8cce0;
}

.footer-bottom {
  margin-top: 38px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #cbd5e1;
  font-size: 0.85rem;
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom strong {
  color: #ffffff;
}

.footer-note {
  color: #8fb0ce;
  text-align: right;
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-brand-block {
    grid-column: 1 / 3;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 3.5rem 1.2rem 2rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-brand-block {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .footer-note {
    text-align: left;
  }
}
</style>