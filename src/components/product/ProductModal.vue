<template>
  <div class="product-modal">
    <div class="content">
      <form-input-text v-model="productLocal.name" label="Nombre" />
      <div class="form-group pt-1">
        <label for="price">Precio</label>
        <input type="number" v-model="productLocal.price" placeholder="Precio" />
      </div>
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
import { defineComponent, onMounted, type PropType, type Ref, ref } from "vue";
import FormInputText from "@/components/common/FormInputText.vue";
import { initialProduct, type Product } from "@/model/product.ts";
import { patchProduct, postProduct } from "@/services/product.service.ts";

export default defineComponent({
  name: "ProductModal",
  components: {
    FormInputText,
  },
  props: {
    product: {
      type: Object as PropType<Product | null>,
      required: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const productLocal = ref<Product>(initialProduct);
    onMounted(() => {
      if (props.product) {
        productLocal.value = { ...props.product };
      }
    });
    const { saveProduct, close } = useProductModal(productLocal, emit);
    return { productLocal, saveProduct, close };
  },
});
function useProductModal(productLocal: Ref<Product>, emit: (event: "close") => void) {
  const close = () => {
    emit("close");
  };

  const saveProduct = async () => {
    let product = productLocal.value;
    if (product.id) {
      await patchProduct(product);
      console.log("Update product");
      close();
    } else {
      await postProduct(product);
      console.log("Create product");
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
    background-color: rgb(255, 255, 255, 0.9);
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