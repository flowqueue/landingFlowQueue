<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const contactItems = computed(() => tm("contact.infoItems"));
const socialLinks = computed(() => tm("contact.socialLinks"));

const mapUrl = "https://www.google.com/maps?q=Lima,+Peru&output=embed";
</script>

<template>
  <section class="contact-section" id="contacto">
    <div class="contact-container">
      <div class="contact-header">
        <p class="section-label">{{ t("contact.label") }}</p>
        <h2>{{ t("contact.title") }}</h2>
        <p class="section-description">
          {{ t("contact.description") }}
        </p>
      </div>

      <div class="contact-content">
        <!-- LEFT SIDE -->
        <div class="contact-left">
          <div class="contact-card form-card">
            <h3>{{ t("contact.formTitle") }}</h3>
            <p class="form-subtitle">
              {{ t("contact.formSubtitle") }}
            </p>

            <form class="formulario">
              <input
                  type="text"
                  :placeholder="t('contact.namePlaceholder')"
                  required
              />

              <input
                  type="text"
                  :placeholder="t('contact.lastnamePlaceholder')"
                  required
              />

              <input
                  type="email"
                  :placeholder="t('contact.emailPlaceholder')"
                  required
              />

              <input
                  type="tel"
                  :placeholder="t('contact.phonePlaceholder')"
                  required
              />

              <textarea
                  :placeholder="t('contact.messagePlaceholder')"
                  rows="5"
                  required
              ></textarea>

              <button type="submit">
                {{ t("contact.submit") }}
              </button>
            </form>

            <p class="security-text">
              {{ t("contact.securityText") }}
            </p>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="contact-right">
          <div class="contact-card info-card">
            <h3>{{ t("contact.infoTitle") }}</h3>

            <div class="info-list">
              <div
                  v-for="(item, index) in contactItems"
                  :key="index"
                  class="info-item"
              >
                <div class="info-icon">{{ item.icon }}</div>
                <div class="info-text">
                  <span class="info-label">{{ item.label }}</span>
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-card social-card">
            <h3>{{ t("contact.socialTitle") }}</h3>

            <div class="social-links">
              <a
                  v-for="(social, index) in socialLinks"
                  :key="index"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
              >
                <span class="social-icon">{{ social.icon }}</span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>

          <div class="contact-card map-card">
            <h3>{{ t("contact.mapTitle") }}</h3>

            <div class="map-wrapper">
              <iframe
                  :src="mapUrl"
                  width="100%"
                  height="260"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.contact-section {
  width: 100%;
  padding: 90px 24px;
  background: linear-gradient(180deg, #1fa178 0%, #178e69 100%);
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}

.contact-container {
  max-width: 1250px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
  color: white;
}

.section-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #d7fff1;
}

.contact-header h2 {
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
}

.section-description {
  margin: 0 auto;
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

.contact-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
  align-items: start;
}

.contact-left,
.contact-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.18);
}

.contact-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0c447c;
}

.form-subtitle {
  margin: 0 0 22px;
  color: #5f6f7c;
  line-height: 1.6;
  font-size: 0.96rem;
}

.formulario {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.formulario input,
.formulario textarea {
  width: 100%;
  border: 1px solid #d9e3ea;
  border-radius: 14px;
  padding: 15px 16px;
  font-size: 0.95rem;
  background: #f8fbfd;
  color: #1f2937;
  outline: none;
  transition: all 0.2s ease;
}

.formulario input:focus,
.formulario textarea:focus {
  border-color: #1fa178;
  background: white;
  box-shadow: 0 0 0 4px rgba(31, 161, 120, 0.12);
}

.formulario textarea {
  grid-column: 1 / 3;
  resize: vertical;
  min-height: 130px;
}

.formulario button {
  grid-column: 1 / 3;
  border: none;
  border-radius: 14px;
  padding: 16px 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  background: #0c447c;
  color: white;
  transition: all 0.25s ease;
}

.formulario button:hover {
  background: #08345f;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(12, 68, 124, 0.24);
}

.security-text {
  margin-top: 18px;
  font-size: 0.9rem;
  color: #667784;
  line-height: 1.6;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px;
  border-radius: 14px;
  background: #f7fafc;
  transition: background 0.2s ease, transform 0.2s ease;
}

.info-item:hover {
  background: #eef7f3;
  transform: translateX(4px);
}

.info-icon {
  width: 46px;
  height: 46px;
  min-width: 46px;
  border-radius: 50%;
  background: #dff5eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c447c;
}

.info-text p {
  margin: 0;
  color: #4e5d6a;
  line-height: 1.5;
  font-size: 0.95rem;
}

.social-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 18px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  background: #f7fafc;
  border: 1px solid #e5edf3;
  border-radius: 14px;
  padding: 14px 16px;
  color: #0c447c;
  font-weight: 600;
  transition: all 0.25s ease;
}

.social-link:hover {
  background: #0c447c;
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.1rem;
}

.map-wrapper {
  margin-top: 16px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #dce6ed;
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 70px 18px;
  }

  .formulario {
    grid-template-columns: 1fr;
  }

  .formulario textarea,
  .formulario button {
    grid-column: auto;
  }

  .social-links {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 22px;
  }
}
</style>