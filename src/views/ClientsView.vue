<template>
  <div class="clients">
    <h1>Clients</h1>
    <span>{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientsView",
  setup() {
    const msg = "Welcome to the Clients page!";
    return { msg };
  },
});
</script>
<style></style>
