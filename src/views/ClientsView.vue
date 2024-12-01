<template>
  <div class="clients">
    <h1>Clients</h1>
    <span>{{ msg }}</span>
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
  setup() {
    const msg = "Welcome to the Clients page!";
    return { msg };
  },
});
</script>
<style></style>
