<template>
  <div class="clients">
    <h1>Clientes</h1>
    <ClientList @select-client="handleSelectedClient" />
    <ClientModal v-if="selectedClient && showModal" :client="selectedClient" @close="handleClose" />
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
    const showModal = ref(false);
    const selectedClient = ref<Client | null>(null);
    const handleSelectedClient = (client: Client) => {
      selectedClient.value = client;
      showModal.value = true;
    };
    const handleClose = () => {
      selectedClient.value = null;
      showModal.value = false;
    };

    return { handleSelectedClient, selectedClient, handleClose, showModal };
  },
});
</script>
<style></style>
