<template>
  <div>
    <h1>Productos</h1>
    <ProductList :product-list="products" />
  </div>
</template>
<script lang="ts">
import ProductList from "@/components/product/ProductList.vue";
import type { Product } from "@/model/product";
import { getProducts } from "@/services/product.servce";
import { defineComponent, onMounted, ref } from "vue";

const ProductsView = defineComponent({
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
    return { products };
  },
});

export default ProductsView;
</script>
