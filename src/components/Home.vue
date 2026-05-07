<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const stats = computed(() => tm("home.stats"));
</script>

<template>
  <section class="home-section" id="home">
    <div class="descripcion-lugar">
      {{ t("home.location") }}
    </div>

    <h1 class="descripcion">
      {{ t("home.titleStart") }} <br />
      <span class="segunda-linea">{{ t("home.titleHighlight") }}</span>
    </h1>

    <p class="descripcion-p">
      {{ t("home.description") }}
    </p>

    <div class="btns">
      <a href="#solicitar" class="solicitar-btn">
        {{ t("home.primaryButton") }}
      </a>

      <a href="#como-funciona" class="ver-como-funciona-btn">
        {{ t("home.secondaryButton") }}
      </a>
    </div>

    <div class="list-destacados">
      <ul class="destacados">
        <li v-for="stat in stats" :key="stat.label">
          <p class="destacados-grande">
            {{ stat.value }}<br />
            <span class="destacados-pequeño">{{ stat.label }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.destacados-pequeño {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.733);
  font-weight: 500;
}

.destacados-grande {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.destacados {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
  padding: 0;
  list-style: none;
}

.btns {
  gap: 1rem;
  display: flex;
}

.ver-como-funciona-btn {
  background-color: transparent;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s;
  border: rgba(245, 245, 245, 0.445) solid 1px;
}

.ver-como-funciona-btn:hover {
  background-color: white;
  color: black;
}

.solicitar-btn {
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: sans-serif;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color 0.2s;
}

.solicitar-btn:hover {
  background-color: #16a34a;
}

.descripcion-p {
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
  font-size: 1.05rem;
  max-width: 700px;
  line-height: 1.7;
}

.segunda-linea {
  color: #5DCAA5;
}

.descripcion {
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  color: white;
  line-height: 1.05;
  margin: 0;
}

.descripcion-lugar {
  background-color: #185FA5;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.733);
  padding: 0.2rem 3rem;
}

.home-section {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #0C447C 0%, #08345f 100%);
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 5rem;
  text-align: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .descripcion {
    font-size: 1.8rem;
  }

  .descripcion-p {
    font-size: 0.875rem;
  }

  .btns {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .solicitar-btn,
  .ver-como-funciona-btn {
    width: 100%;
    text-align: center;
  }

  .destacados {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    justify-items: center;
  }

  .destacados-grande {
    font-size: 1.2rem;
  }
}
</style>