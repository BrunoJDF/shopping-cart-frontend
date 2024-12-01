<template>
  <div class="clients">
    <h1>Clients</h1>
    <span>{{ msg }}</span>
    <ul>
      <li v-for="client in clients" :key="client.id">
        <router-link :to="{ name: 'ClientView', params: { id: client.id } }">
          {{ client.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type { Client } from "@/model/client";
import { getClients } from "@/services/client.service";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientsView",
  async setup() {
    const msg = "Welcome to the Clients page!";
    const clients: Client[] = await getClients();
    return { msg, clients };
  },
});
</script>
<style></style>
