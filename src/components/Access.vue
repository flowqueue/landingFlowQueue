<script setup>
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const loading = ref(false);
const status = ref("");
const form = reactive({
  name: "",
  institution: "",
  email: "",
  phone: "",
  message: "",
});
const copy = computed(() =>
  locale.value === "es"
    ? {
        institution: "Institución",
        institutionPlaceholder: "Nombre de la institución",
        success:
          "Solicitud preparada. Si no se abrió tu correo, escríbenos a contacto@flowqueue.pe.",
        error: "No pudimos preparar la solicitud. Inténtalo nuevamente.",
      }
    : {
        institution: "Institution",
        institutionPlaceholder: "Institution name",
        success:
          "Request prepared. If your email did not open, write to contacto@flowqueue.pe.",
        error: "We could not prepare your request. Please try again.",
      },
);

async function submitLead() {
  status.value = "";
  loading.value = true;
  try {
    const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;
    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Lead endpoint error");
    } else {
      const subject = encodeURIComponent(
        `FlowQueue · Demo para ${form.institution}`,
      );
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nInstitución: ${form.institution}\nCorreo: ${form.email}\nTeléfono: ${form.phone || "-"}\n\nMensaje:\n${form.message || "-"}`,
      );
      window.location.href = `mailto:contacto@flowqueue.pe?subject=${subject}&body=${body}`;
    }
    status.value = copy.value.success;
  } catch {
    status.value = copy.value.error;
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <section class="access" id="solicitar">
    <div class="access-glow"></div>
    <div class="section-shell access-layout">
      <div class="access-copy" data-reveal="left">
        <span class="section-kicker">{{ t("access.label") }}</span>
        <h2>{{ t("access.title") }}</h2>
        <p>{{ t("access.subtitle") }}</p>
        <ul>
          <li>
            <span>01</span
            >{{
              locale === "es"
                ? "Revisamos el flujo actual de tu sede"
                : "We review your current service flow"
            }}
          </li>
          <li>
            <span>02</span
            >{{
              locale === "es"
                ? "Configuramos una demostración a medida"
                : "We configure a tailored demonstration"
            }}
          </li>
          <li>
            <span>03</span
            >{{
              locale === "es"
                ? "Definimos métricas para un piloto"
                : "We define metrics for a pilot"
            }}
          </li>
        </ul>
      </div>

      <form class="demo-form" data-reveal="right" @submit.prevent="submitLead">
        <div class="form-heading">
          <span>FLOWQUEUE / DEMO</span>
          <h3>{{ t("access.formTitle") }}</h3>
          <p>{{ t("access.formDescription") }}</p>
        </div>
        <div class="field-grid">
          <label
            ><span>{{ locale === "es" ? "Nombre" : "Name" }}</span
            ><input
              v-model.trim="form.name"
              name="name"
              autocomplete="name"
              required
              :placeholder="t('contact.namePlaceholder')"
          /></label>
          <label
            ><span>{{ copy.institution }}</span
            ><input
              v-model.trim="form.institution"
              name="organization"
              autocomplete="organization"
              required
              :placeholder="copy.institutionPlaceholder"
          /></label>
          <label
            ><span>Email</span
            ><input
              v-model.trim="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :placeholder="t('access.emailPlaceholder')"
          /></label>
          <label
            ><span>{{
              locale === "es" ? "Teléfono (opcional)" : "Phone (optional)"
            }}</span
            ><input
              v-model.trim="form.phone"
              name="phone"
              type="tel"
              autocomplete="tel"
              :placeholder="t('contact.phonePlaceholder')"
          /></label>
          <label class="wide"
            ><span>{{
              locale === "es"
                ? "¿Qué proceso quieres mejorar?"
                : "What process would you like to improve?"
            }}</span
            ><textarea
              v-model.trim="form.message"
              name="message"
              rows="3"
              :placeholder="t('contact.messagePlaceholder')"
            ></textarea>
          </label>
        </div>
        <button type="submit" data-magnetic :disabled="loading">
          {{
            loading
              ? t("access.loading")
              : locale === "es"
                ? "Enviar solicitud"
                : "Send request"
          }}
          <span aria-hidden="true">↗</span>
        </button>
        <p class="form-meta">{{ t("access.meta") }}</p>
        <p v-if="status" class="form-status" role="status">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.access {
  position: relative;
  padding: 120px 24px;
  overflow: hidden;
  background: var(--navy-deep);
  color: white;
}
.access::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.13;
  background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0);
  background-size: 28px 28px;
}
.access-glow {
  position: absolute;
  width: 580px;
  height: 580px;
  left: -220px;
  bottom: -360px;
  border-radius: 50%;
  background: var(--signal);
  filter: blur(80px);
  opacity: 0.13;
}
.access-layout {
  position: relative;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 80px;
  align-items: center;
}
.access .section-kicker {
  color: var(--signal);
}
.access-copy h2 {
  margin-bottom: 22px;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0.98;
}
.access-copy > p {
  max-width: 520px;
  color: #bfd2de;
  font-size: 1.05rem;
  line-height: 1.75;
}
.access-copy ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 38px 0 0;
  padding: 0;
  list-style: none;
}
.access-copy li {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #d7e5ec;
}
.access-copy li span {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(57, 217, 138, 0.35);
  border-radius: 50%;
  color: var(--signal);
  font-size: 0.7rem;
  font-weight: 800;
}
.demo-form {
  padding: 38px;
  border-radius: 30px;
  background: white;
  color: var(--ink);
  box-shadow: 0 40px 100px rgba(0, 17, 31, 0.35);
}
.form-heading > span {
  color: var(--signal-dark);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}
.form-heading h3 {
  margin: 8px 0 9px;
  font-size: 1.7rem;
}
.form-heading p {
  margin-bottom: 26px;
  color: var(--ink-soft);
  line-height: 1.55;
}
.field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 17px;
}
.field-grid label {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.field-grid label > span {
  font-size: 0.78rem;
  font-weight: 800;
}
.field-grid .wide {
  grid-column: 1/-1;
}
.field-grid input,
.field-grid textarea {
  width: 100%;
  border: 1px solid #d6e1e6;
  border-radius: 12px;
  padding: 13px 14px;
  background: #f7fafb;
  color: var(--ink);
  outline: none;
}
.field-grid input:focus,
.field-grid textarea:focus {
  border-color: var(--signal-dark);
  box-shadow: 0 0 0 4px rgba(57, 217, 138, 0.14);
  background: white;
}
.field-grid textarea {
  resize: vertical;
}
.demo-form > button {
  width: 100%;
  min-height: 52px;
  margin-top: 18px;
  border: 0;
  border-radius: 13px;
  background: var(--signal);
  color: var(--ink);
  font-weight: 900;
  cursor: pointer;
}
.demo-form > button:disabled {
  opacity: 0.65;
  cursor: wait;
}
.form-meta,
.form-status {
  margin: 13px 0 0;
  text-align: center;
  color: #718692;
  font-size: 0.78rem;
  line-height: 1.5;
}
.form-status {
  color: var(--signal-dark);
  font-weight: 700;
}
@media (max-width: 960px) {
  .access {
    padding: 90px 20px;
  }
  .access-layout {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}
@media (max-width: 600px) {
  .access {
    padding: 75px 16px;
  }
  .demo-form {
    padding: 25px 20px;
    border-radius: 22px;
  }
  .field-grid {
    grid-template-columns: 1fr;
  }
  .field-grid .wide {
    grid-column: auto;
  }
}
</style>
