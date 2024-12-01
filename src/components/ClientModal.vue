<template>
  <div class="client-modal">
    <div class="content">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="client.name" />
      </div>
      <div class="form-group">
        <label for="lastName">Apellido</label>
        <input type="text" id="lastName" v-model="client.lastName" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="client.email" />
      </div>
      <div class="group-button">
        <div class="form-group">
          <button @click="saveClient(client)">Guardar</button>
        </div>
        <div class="form-group">
          <button @click="close">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { Client } from "@/model/client";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "ClientModal",
  props: {
    client: {
      type: Object as PropType<Client>,
      required: true,
    },
  },
  emits: ["close"],
  setup(_, { emit }) {
    const saveClient = (client: Client) => {
      console.log("Saving client", client);
    };
    const close = () => {
      emit("close");
    };
    return { saveClient, close };
  },
});
</script>
<style scoped>
.client-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    background-color: rgb(24, 20, 20);
    padding: 1rem;
    border-radius: 0.5rem;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.5rem;
}
.form-group input {
  padding: 0.5rem;
}
.form-group button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.group-button {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
