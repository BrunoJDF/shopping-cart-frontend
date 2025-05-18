<template>
  <header>
    <div class="container-header">
      <div class="content-header">
        <div class="content-logo">
          <img src="@/assets/logo.svg" alt="Logo" width="45" height="45" />
        </div>
        <div class="container-nav">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/clients">Clients</RouterLink>
            <RouterLink to="/products">Products</RouterLink>
          </nav>
          <div class="container-actions">
            <button class="btn btn-donate-us">Donate us</button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView class="content" />
</template>
<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
};
</script>
<style scoped>
.btn-donate-us {
  background-color: #9bb9e0;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1rem;
}

.btn-donate-us:hover {
  background-color: #7a9bb0;
}

.container-nav {
  display: flex;
}

.container-actions {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-header {
  width: 60%;
}

.content-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  margin-right: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 1rem;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #555;
  color: #9bb9e0;
  font-weight: bold;
}

nav a.router-link-active {
  background-color: transparent;
  /* Sin fondo */
  color: #9bb9e0;
  /* Cambia el color del texto, elige el que prefieras */
  font-weight: bold;
}

.content {
  padding: 1rem;
  margin-top: 70px;
}
</style>
