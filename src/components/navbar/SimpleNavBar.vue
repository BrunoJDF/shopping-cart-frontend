<template>
  <nav class="simple-navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">{{ title }}</router-link>
      <div class="nav-links">
        <router-link
          v-for="route in navRoutes"
          :key="route.name"
          :to="route.path"
          class="nav-link"
          active-class="nav-link-active"
        >
          {{ route.meta?.title || route.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

defineProps<{ title: string }>();

const router = useRouter();

const navRoutes = router.getRoutes().filter((route) => route.meta?.showInNav);

onMounted(() => {
  console.log("Navigation routes:", navRoutes);
});
</script>

<style scoped>
.simple-navbar {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 1rem;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-transform: capitalize;
}

.nav-link:hover {
  background: #f3f4f6;
  color: #374151;
}

.nav-link-active {
  background: #eff6ff;
  color: #2563eb;
  font-weight: 600;
}
</style>
