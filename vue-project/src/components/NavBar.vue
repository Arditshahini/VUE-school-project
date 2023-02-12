<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" style="color: black" href="/">BILSALONGEN AB</a>
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
.nav-item,
.navbar-brand {
  margin-left: 2rem;
  margin: 10px;
  padding: 5px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.nav-item:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.nav-item:active {
  transform: scale(0.95);
}
</style>
