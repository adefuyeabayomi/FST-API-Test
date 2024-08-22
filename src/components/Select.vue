<template>
  <div>
    <select v-model="selectedValue" @change="emitChange">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

interface Option {
  label: string;
  value: string;
}

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const selectedValue = ref(props.modelValue);

    const emitChange = () => {
      emit("update:modelValue", selectedValue.value);
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        selectedValue.value = newValue;
      },
    );

    return {
      selectedValue,
      emitChange,
    };
  },
});
</script>

<style scoped>
/* Add your styles here if needed */
</style>
