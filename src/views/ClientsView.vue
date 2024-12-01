<template>
  <div class="clients">
    <h1>Clients</h1>
    <ClientList />
  </div>
</template>

<script lang="ts">
import ClientList from "@/components/ClientList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ClientList,
  },
  name: "ClientsView",
});
</script>
<style></style>
