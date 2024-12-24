<template>
  <div>
    <h3>Lista de clientes</h3>
    <div class="clients-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clientList" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.lastName }}</td>
            <td>{{ client.email }}</td>
            <td>
              <button @click="editClient(client)">Editar</button>
              <button @click="deleteClient(client)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import type { Client } from "@/model/client";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "ClientList",
  emits: ["selectClient", "deleteClient"],
  props: {
    clientList: {
      type: Array as PropType<Client[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editClient = (client: Client) => {
      emit("selectClient", client);
    };

    const deleteClient = (client: Client) => {
      emit("deleteClient", client);
    };

    return { editClient, deleteClient };
  },
});
</script>
<style scoped>
.clients-table {
  width: 100%;
  border-collapse: collapse;
}

.clients-table th,
.clients-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.clients-table th {
  background-color: #181818;
  text-align: left;
}
</style>
