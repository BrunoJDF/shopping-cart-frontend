<template>
  <div class="clients">
    <h1>Clientes</h1>
    <ClientList @select-client="handleSelectedClient" :client-list="clients" />
    <ClientModal v-if="selectedClient && showModal" :client="selectedClient" @close="handleClose" />
  </div>
</template>

<script lang="ts">
import ClientList from "@/components/ClientList.vue";
import ClientModal from "@/components/ClientModal.vue";
import type { Client } from "@/model/client";
import { getClients } from "@/services/client.service";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {
    ClientList,
    ClientModal,
  },
  name: "ClientsView",
  setup() {
    const clients = ref<Client[]>([]);
    const showModal = ref(false);
    const selectedClient = ref<Client | null>(null);

    onMounted(async () => {
      clients.value = await getClients();
    });

    const handleSelectedClient = (client: Client) => {
      selectedClient.value = client;
      showModal.value = true;
    };
    const handleClose = async () => {
      selectedClient.value = null;
      showModal.value = false;
      clients.value = await getClients();
    };

    return { handleSelectedClient, selectedClient, handleClose, showModal, clients };
  },
});
</script>
<style></style>
