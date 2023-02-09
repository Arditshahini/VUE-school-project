<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" style="color: white" href="#">AUTOSALOON</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink to="/">Start</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about">Om</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.nav-item {
  margin-left: 2rem;
}
.navbar-brand {
  margin-left: 2rem;
}
</style>
