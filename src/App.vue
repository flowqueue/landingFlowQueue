<script setup>
import Statistics from "@/components/Statistics.vue";
import Funcionalities from "@/components/Funcionalities.vue";
import Access from "@/components/Access.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="lp">
    <header class="hero">
      <h1>Di adiós a las <span>filas interminables</span></h1>
      <p class="hero-sub">
        FlowQueue digitaliza la gestión de turnos en instituciones públicas.
      </p>
      <Statistics />
    </header>

    <main>
      <Funcionalities />
      <Access />
    </main>

    <Footer />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #F1EFE8;
}

.hero {
  background: #0C447C;
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.hero h1 span {
  color: #5DCAA5;
}

.hero-sub {
  font-size: 16px;
  color: #85B7EB;
  max-width: 480px;
  margin: 0 auto;
}
</style>