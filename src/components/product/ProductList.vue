<template>
  <div>
    <h2>Lista Productos</h2>
    <ul>
      <li v-for="product in productList" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import type { Product } from "@/model/product";
import { defineComponent } from "vue";

const ProductList = defineComponent({
  name: "ProductList",
  props: {
    productList: {
      type: Array as () => Array<Product>,
      required: true,
    },
  },
  setup(props, { emit }) {
    return {};
  },
});
export default ProductList;
</script>
