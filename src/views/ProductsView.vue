<template>
  <div>
    <h1>Productos</h1>
    <product-list :product-list="products" @select-product="handleProductSelected" />
    <product-modal v-if="showModal" :product="selectedProduct" @close="handleClose" />
    <div>
      <button @click="handleAddProduct">Agregar producto</button>
    </div>
  </div>
</template>
<script lang="ts">
import ProductList from "@/components/product/ProductList.vue";
import { initialProduct, type Product } from "@/model/product";
import { getProducts } from "@/services/product.service.ts";
import { defineComponent, onMounted, ref } from "vue";
import ProductModal from "@/components/product/ProductModal.vue";

export default defineComponent({
  name: "ProductsView",
  components: {
    ProductModal,
    ProductList,
  },
  setup() {
    const products = ref<Product[]>([]);
    const showModal = ref(false);
    const selectedProduct = ref<Product | null>(null);

    const fetchProducts = async () => {
      products.value = await getProducts();
    };

    onMounted(fetchProducts);

    const handleClose = async () => {
      await fetchProducts();
      selectedProduct.value = null;
      showModal.value = false;
    };
    const handleProductSelected = (product: Product) => {
      selectedProduct.value = product;
      showModal.value = true;
    };
    const handleAddProduct = () => {
      selectedProduct.value = initialProduct;
      showModal.value = true;
    };

    return {
      handleProductSelected,
      handleAddProduct,
      handleClose,
      products,
      showModal,
      selectedProduct,
    };
  },
});
</script>
