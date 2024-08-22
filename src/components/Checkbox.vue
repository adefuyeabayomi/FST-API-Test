<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @change="updateValue($event)"
      />
      <slot></slot>
      <!-- Allows text to be inserted inside the label -->
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CheckBox",
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement) {
        this.$emit("update:modelValue", inputElement.checked);
      }
    },
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
