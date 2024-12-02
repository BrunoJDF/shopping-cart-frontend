<template>
  <div class="clients">
    <h1>Clientes</h1>
    <ClientList @select-client="handleSelectedClient" :client-list="clients" />
    <ClientModal v-if="showModal" :client="selectedClient" @close="handleClose" />
    <div>
      <button @click="handleAddClient">Agregar cliente</button>
    </div>
  </div>
</template>

<script lang="ts">
import ClientList from "@/components/ClientList.vue";
import ClientModal from "@/components/ClientModal.vue";
import { initialClient, type Client } from "@/model/client";
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

    const fetchClients = async () => {
      clients.value = await getClients();
    };

    onMounted(fetchClients);

    const handleSelectedClient = (client: Client) => {
      selectedClient.value = client;
      showModal.value = true;
    };
    const handleClose = async () => {
      await fetchClients();
      selectedClient.value = null;
      showModal.value = false;
    };
    const handleAddClient = () => {
      selectedClient.value = initialClient;
      showModal.value = true;
    };

    return {
      handleSelectedClient,
      handleClose,
      handleAddClient,
      showModal,
      clients,
      selectedClient,
    };
  },
});
</script>
<style></style>
