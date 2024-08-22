<template>
    <div class="date-input-container">
      <input
        type="date"
        class="date-input"
        :value="modelValue"
        @input="handleInput"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'DateInput',
    props: {
      modelValue: {
        type: String as PropType<string>,
        default: ''
      }
    },
    methods: {
      handleInput(event: Event) {
        const target = event.target as HTMLInputElement | null;
        if (target) {
          this.$emit('update:modelValue', target.value);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .date-input-container {
    width: 100%;
  }
  
  .date-input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid #d3d3d3; /* Very light shade of gray */
    border-radius: 10px;
    box-sizing: border-box; /* Ensures padding is included in the width */
  }
  </style>
  