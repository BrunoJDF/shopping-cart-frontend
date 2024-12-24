<template>
  <div class="product-modal">
    <div class="content">
      <FormInputText v-model="productLocal.name" label="Nombre" />
      <div class="group-button">
        <div class="form-group">
          <button @click="saveProduct">Guardar</button>
        </div>
        <div class="form-group">
          <button @click="close">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType, type Ref, ref } from "vue";
import FormInputText from "@/components/common/FormInputText.vue";
import { initialProduct, type Product } from "@/model/product.ts";

export default defineComponent({
  name: "ProductModal",
  components: {
    FormInputText,
  },
  props: {
    product: {
      type: Object as PropType<Product | null>,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const productLocal = ref<Product>(initialProduct);
    const { saveProduct, close } = useProductModal(productLocal, emit);
    return { productLocal, saveProduct, close };
  },
});
function useProductModal(productLocal: Ref<Product>, emit: (event: "close") => void) {
  const close = () => {
    emit("close");
  };

  const saveProduct = async () => {
    if (productLocal.value.id) {
      console.log("Update product", productLocal.value);
      close();
    } else {
      console.log("Create product", productLocal.value);
      close();
    }
  };
  return { saveProduct, close };
}
</script>
<style scoped>
.product-modal {
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