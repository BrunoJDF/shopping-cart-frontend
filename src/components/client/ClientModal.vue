<template>
  <div class="client-modal">
    <div class="content">
      <form-input-text v-model="clientLocal.name" label="Nombre" />
      <form-input-text v-model="clientLocal.lastName" label="Apellido" />
      <form-input-text v-model="clientLocal.email" label="Email" />
      <form-input-text v-model="clientLocal.phone" label="Teléfono" />
      <div class="group-button">
        <div class="form-group">
          <button @click="saveClient">Guardar</button>
        </div>
        <div class="form-group">
          <button @click="close">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { initialClient, type Client } from "@/model/client";
import { defineComponent, onMounted, ref, type PropType, type Ref } from "vue";
import FormInputText from "@/components/common/FormInputText.vue";
import { patchClient, postClient } from "@/services/client.service";

export default defineComponent({
  name: "ClientModal",
  components: {
    FormInputText,
  },
  props: {
    client: {
      type: Object as PropType<Client | null>,
      required: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const clientLocal = ref<Client>(initialClient);
    onMounted(() => {
      if (props.client) {
        clientLocal.value = { ...props.client };
      }
    });
    const { saveClient, close } = useClientModal(clientLocal, emit);
    return { saveClient, close, clientLocal };
  },
});

function useClientModal(clientLocal: Ref<Client>, emit: (event: "close") => void) {
  const close = () => {
    emit("close");
  };

  const saveClient = async () => {
    let client = clientLocal.value;
    if (client?.id) {
      await patchClient(client);
      console.log("Update client");
      close();
    } else {
      await postClient(client);
      console.log("Create client");
      close();
    }
  };
  return { saveClient, close };
}
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
