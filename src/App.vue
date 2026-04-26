<script setup>
import Funcionalities from "@/components/Funcionalities.vue";
import Access from "@/components/Access.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import MetricsSection from "@/components/MetricsSection.vue";
import TeamSection from "@/components/TeamSection.vue";
import ProfilesSection from "@/components/ProfilesSection.vue";

</script>
<template>
  <Navbar></Navbar>
  <Home>  </Home>

  <Funcionalities></Funcionalities>
  <Access></Access>
  <ProfilesSection />
  <MetricsSection />
  <TeamSection />

</template>
<style scoped>

</style>

