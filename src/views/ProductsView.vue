<template>
  <div>
    <h1>Productos</h1>
    <ProductList :product-list="products" @select-product="handleProductSelected" />
    <div>
      <button @click="handleAddProduct">Agregar producto</button>
    </div>
  </div>
</template>
<script lang="ts">
import ProductList from "@/components/product/ProductList.vue";
import type { Product } from "@/model/product";
import { getProducts } from "@/services/product.servce";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductList,
  },
  setup() {
    const products = ref<Product[]>([]);

    const fetchProducts = async () => {
      products.value = await getProducts();
    };

    onMounted(() => {
      fetchProducts();
    });

    const handleProductSelected = (product: Product) => {
      console.log("Product selected", product);
    };
    const handleAddProduct = () => {
      console.log("Add product");
    };
    return { handleProductSelected, handleAddProduct, products };
  },
});
</script>
