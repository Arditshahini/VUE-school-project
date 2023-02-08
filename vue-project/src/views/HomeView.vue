<script setup>
import HeroImage from "../components/HeroImage.vue";
import CarSection from "../components/CarSection.vue";
import FooterView from "../components/FooterView.vue";
</script>

<template>
  <HeroImage />
  <div class="container text-center">
    <div class="row align-items-start">
      <CarSection />
      <CarSection />
      <CarSection />
    </div>
  </div>

  <FooterView />
</template>
