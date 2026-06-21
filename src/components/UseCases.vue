<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();
const useCases = computed(() => tm("useCases.items"));
const glyphs = ["ID", "✚", "S/", "⌂"];
</script>

<template>
  <section class="cases" id="casos-uso">
    <div class="section-shell">
      <div class="cases-intro" data-reveal>
        <span class="section-kicker">{{ t("useCases.label") }}</span>
        <h2 class="section-heading">{{ t("useCases.title") }}</h2>
        <p class="section-copy">{{ t("useCases.description") }}</p>
      </div>
      <div class="cases-list">
        <article
          v-for="(item, index) in useCases"
          :key="item.title"
          data-reveal="left"
          :style="{ '--reveal-delay': `${index * 90}ms` }"
        >
          <span class="case-glyph" aria-hidden="true">{{ glyphs[index] }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <span class="case-arrow" aria-hidden="true">↗</span>
        </article>
      </div>
      <p class="disclaimer">
        {{
          locale === "es"
            ? "Escenarios de aplicación referenciales. No implican una relación comercial con las instituciones mencionadas."
            : "Illustrative application scenarios. They do not imply a commercial relationship with the institutions mentioned."
        }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.cases {
  padding: 120px 24px;
  background: white;
}
.cases-intro {
  max-width: 790px;
  margin-bottom: 48px;
}
.cases-list {
  border-top: 1px solid var(--line);
}
.cases-list article {
  display: grid;
  grid-template-columns: 70px 1fr 42px;
  align-items: center;
  gap: 26px;
  padding: 25px 4px;
  border-bottom: 1px solid var(--line);
  transition:
    padding 0.25s ease,
    background 0.25s ease;
}
.cases-list article:hover {
  padding-inline: 18px;
  background: var(--paper);
}
.case-glyph {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: var(--sky);
  color: var(--navy);
  font-family: "Manrope";
  font-weight: 900;
}
.cases-list h3 {
  margin: 0 0 5px;
  font-size: 1.25rem;
}
.cases-list p {
  margin: 0;
  color: var(--ink-soft);
  line-height: 1.55;
}
.case-arrow {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
}
.disclaimer {
  max-width: 760px;
  margin: 22px 0 0;
  color: #788b97;
  font-size: 0.78rem;
  line-height: 1.5;
}
@media (max-width: 650px) {
  .cases {
    padding: 75px 16px;
  }
  .cases-list article {
    grid-template-columns: 48px 1fr;
    gap: 15px;
  }
  .case-glyph {
    width: 46px;
    height: 46px;
  }
  .case-arrow {
    display: none;
  }
  .cases-list p {
    font-size: 0.9rem;
  }
}
</style>
