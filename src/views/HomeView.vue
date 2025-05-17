<template>
  <main>
    <h1>Boleta</h1>
    <div>
      <div>
        {{ selectedClient?.name }}
      </div>
      <div v-for="option in clients" :key="option.id">
        <div @click="handleSelectClient(option)">
          {{ option.name }}
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import FormInputText from "@/components/common/FormInputText.vue";
import { defineComponent, onMounted, ref } from "vue";
import { getClients } from "@/services/client.service.ts";
import type { Client } from "@/model/client.ts";

export default defineComponent({
  name: "HomeView",
  components: {
    FormInputText,
  },
  setup() {
    const clients = ref<Client[]>([]);
    const selectedClient = ref<Client | null>(null);
    const fetchClients = async () => {
      clients.value = await getClients();
      return clients;
    };

    onMounted(fetchClients);

    const handleSelectClient = (client: Client) => {
      selectedClient.value = client;
      console.log(client.name);
    };
    return { clients, selectedClient, handleSelectClient };
  },
});
</script>
