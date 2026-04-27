<script setup>
import Funcionalities from "@/components/Funcionalities.vue";
import Access from "@/components/Access.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import MetricsSection from "@/components/MetricsSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import ProfilesSection from "@/components/ProfilesSection.vue";
import Statics from "@/components/Statistics.vue";
import Footer from "@/components/Footer.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <Navbar />
  <Home />
  <Statics />
  <Funcionalities />
  <ProfilesSection />
  <MetricsSection />
  <Access />
  <TeamSection />
  <Contact/>
  <Footer />

</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
</style>