<template>
  <div class="client-modal">
    <div class="content">
      <FormInputText v-model="client.name" label="Nombre" />
      <FormInputText v-model="client.lastName" label="Apellido" />
      <FormInputText v-model="client.email" label="Email" />
      <FormInputText v-model="client.phone" label="Teléfono" />
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
import FormInputText from "@/components/common/FormInputText.vue";
import { patchClient } from "@/services/client.service";

export default defineComponent({
  name: "ClientModal",
  components: {
    FormInputText,
  },
  props: {
    client: {
      type: Object as PropType<Client>,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const saveClient = (client: Client) => {
      patchClient(client)
        .then(() => {
          emit("close");
        })
        .catch((err) => {
          console.error(err);
        });
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
