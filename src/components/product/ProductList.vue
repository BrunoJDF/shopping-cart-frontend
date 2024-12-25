<template>
  <div>
    <h3>Lista Productos</h3>
    <div class="products-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productList" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="editProduct(product)">Editar</button>
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
  emits: ["selectProduct"],
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
    return { editProduct };
  },
});
export default ProductList;
</script>
<style scoped>
.products-table {
  width: 100%;
  border-collapse: collapse;
}

.products-table th,
.products-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.products-table th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
