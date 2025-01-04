<template>
  <div class="clients">
    <h1>Clientes</h1>
    <client-list
      @delete-client="handleDeleteClient"
      @select-client="handleSelectedClient"
      :client-list="clients"
    />
    <client-modal v-if="showModal" :client="selectedClient" @close="handleClose" />
    <div>
      <button @click="handleAddClient">Agregar cliente</button>
    </div>
  </div>
</template>

<script lang="ts">
import ClientList from "@/components/client/ClientList.vue";
import ClientModal from "@/components/client/ClientModal.vue";
import { initialClient, type Client } from "@/model/client";
import { deleteClient, getClients } from "@/services/client.service";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ClientsView",
  components: {
    ClientList,
    ClientModal,
  },
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
      selectedClient.value = initialClient;
      showModal.value = false;
    };
    const handleAddClient = () => {
      showModal.value = true;
    };
    const handleDeleteClient = async (client: Client) => {
      await deleteClient(client.id);
      await fetchClients();
    };

    return {
      handleSelectedClient,
      handleClose,
      handleAddClient,
      handleDeleteClient,
      showModal,
      clients,
      selectedClient,
    };
  },
});
</script>
