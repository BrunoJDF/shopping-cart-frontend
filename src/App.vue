<template>
  <SimpleNavBar title="Carrito de Compras">
    <RouterView />
  </SimpleNavBar>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import SimpleNavBar from "@/components/navbar/SimpleNavBar.vue";
</script>
<style scoped></style>
