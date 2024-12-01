<template>
  <div class="clients">
    <h1>Clientes</h1>
    <ClientList @select-client="handleSelectedClient" />
    <ClientModal v-if="selectedClient" :client="selectedClient" />
  </div>
</template>

<script lang="ts">
import ClientList from "@/components/ClientList.vue";
import ClientModal from "@/components/ClientModal.vue";
import type { Client } from "@/model/client";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    ClientList,
    ClientModal,
  },
  name: "ClientsView",
  setup() {
    const selectedClient = ref<Client | null>(null);
    const handleSelectedClient = (client: Client) => {
      console.log("Selected client on ClientsView", client);
      selectedClient.value = client;
    };

    return { handleSelectedClient, selectedClient };
  },
});
</script>
<style></style>
