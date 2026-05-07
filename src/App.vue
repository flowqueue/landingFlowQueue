<script setup>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import ProblemSection from "@/components/ProblemSection.vue";
import HowItWorks from "@/components/HowItWorks.vue";
import Funcionalities from "@/components/Funcionalities.vue";
import ProfilesSection from "@/components/ProfilesSection.vue";
import MetricsSection from "@/components/MetricsSection.vue";
import Access from "@/components/Access.vue";
import TeamSection from "@/components/TeamSection.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <Home />
  <ProblemSection />
  <HowItWorks />
  <Funcionalities />
  <ProfilesSection />
  <MetricsSection />
  <Access />
  <TeamSection />
  <Contact />
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
</style>