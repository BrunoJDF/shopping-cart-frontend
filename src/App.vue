<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/clients">Clients</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
      </nav>
  </header>

  <RouterView class="content" />
</template>
<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App"
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(51, 51, 51, 0.7);
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
nav {
  display: flex;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 1rem;
  transition: background-color 0.3s;
}
nav a:hover {
  background-color: #555;
  color: #9bb9e0;
  font-weight: bold;
}

nav a.router-link-active {
  background-color: transparent; /* Sin fondo */
  color: #9bb9e0; /* Cambia el color del texto, elige el que prefieras */
  font-weight: bold;
}
.content {
  padding: 1rem;
  margin-top: 70px;
}
</style>
