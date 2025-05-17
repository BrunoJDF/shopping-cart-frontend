<template>
  <div class="dropdown">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-expanded="false"
    >
      {{ selected }}
    </button>
    <div class="dropdown-menu">
      <a v-for="option in options" :key="option.value" class="dropdown-item" @click="handleChange">
        {{ option.text }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SelectOption",
  props: {
    options: {
      type: Array as () => Array<{ text: string; value: string }>,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selected = ref(props.value);
    const handleChange = (event: Event) => {
      const target = event.target as HTMLSelectElement;
      selected.value = target.value;
      emit("update:modelValue", selected.value);
    };
    return { selected, handleChange };
  },
});
</script>
