<template>
  <div>
    <h3>Lista Productos</h3>
    <div class="products-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productList" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button class="btn btn-secondary me-1" @click="editProduct(product)">Editar</button>
              <button class="btn btn-danger" @click="deleteProduct(product)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import type { Product } from "@/model/product";
import { defineComponent } from "vue";

const ProductList = defineComponent({
  name: "ProductList",
  emits: ["selectProduct", "deleteProduct"],
  props: {
    productList: {
      type: Array as () => Array<Product>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editProduct = (product: Product) => {
      emit("selectProduct", product);
    };

    const deleteProduct = (product: Product) => {
      emit("deleteProduct", product);
    };
    return { editProduct, deleteProduct };
  },
});
export default ProductList;
</script>
<style scoped>
.products-table {
  width: 100%;
  max-width: 800px; /* Ancho máximo de la tabla */
  border-collapse: collapse;
  table-layout: fixed; /* Hacer que las celdas se ajusten automáticamente */
}

.products-table th,
.products-table td {
  border: 1px solid #ddd;
  padding: 8px;
  word-wrap: break-word; /* Permitir que el texto se ajuste dentro de las celdas */
}

.products-table th {
  background-color: #f2f2f2;
  text-align: left;
}

@media (max-width: 600px) {
  .products-table thead {
    display: none; /* Ocultar el encabezado de la tabla en pantallas pequeñas */
  }

  .products-table,
  .products-table tbody,
  .products-table tr,
  .products-table td {
    display: block; /* Hacer que las filas y celdas sean bloques */
    width: 100%;
  }

  .products-table tr {
    margin-bottom: 15px; /* Espacio entre filas */
  }

  .products-table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  .products-table td::before {
    content: attr(data-label); /* Mostrar el encabezado de la celda */
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
