<template>
  <div>
    <h1>Lista de clientes</h1>
    <div class="clients-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.lastName }}</td>
            <td>{{ client.email }}</td>
          </tr>
        </tbody>
      </table>
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
<style scoped>
.clients-table {
  width: 100%;
  border-collapse: collapse;
}

.clients-table th,
.clients-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.clients-table th {
  background-color: #181818;
  text-align: left;
}
</style>
