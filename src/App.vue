<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" src="@/assets/logo.svg" width="50" height="50" />

    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/clients">Clients</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="content" />
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
  color: white;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}
nav a:hover {
  background-color: #555;
}

nav a.router-link-active {
  background-color: #007bff;
}
.content {
  padding: 1rem;
}
</style>
