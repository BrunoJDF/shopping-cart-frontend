<template>
  <div>
    <h1>{{ client.name }} {{ client.lastName }}</h1>
    <p>{{ client.email }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClientModal",
  props: {
    client: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
