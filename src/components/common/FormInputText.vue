<template>
  <div class="form-group">
    <label :for="label">{{ label }}</label>
    <input :type="type" :value="modelValue" @input="onInput" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormInputText",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const onInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };
    return { onInput };
  },
});
</script>
<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  margin-bottom: 0.5rem;
}
.form-group input {
  padding: 0.5rem;
}
</style>
