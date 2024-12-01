<template>
  <div>
    <h1>Lista de clientes</h1>
    <div v-for="client in clients" :key="client.id">
      <div class="item">
        <i>{{ client.id }}</i>
        <div class="details">
          <h3>{{ client.name }}</h3>
          <p>{{ client.email }}</p>
        </div>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>
<script lang="ts">
import type { Client } from "@/model/client";
import { getClients } from "@/services/client.service";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ClientList",
  setup() {
    let clients = ref<Client[]>([]);
    const error = ref<string | null>(null);
    onMounted(async () => {
      try {
        clients.value = await getClients();
      } catch (err) {
        error.value = "Error loading clients";
        console.error(error);
      }
    });

    return { clients, error };
  },
});
</script>
