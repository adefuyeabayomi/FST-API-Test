<template>
    <div class="text-input-container">
      <input
        type="text"
        class="text-input"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'Input',
    props: {
      modelValue: {
        type: String as PropType<string>,
        default: ''
      },
      placeholder: {
        type: String as PropType<string>,
        default: 'Enter text here...'
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
  .text-input-container {
    width: 100%;
  }
  
  .text-input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 1px solid #d3d3d3; /* Very light shade of gray */
    border-radius: 10px;
    box-sizing: border-box; /* Ensures padding is included in the width */
  }
  </style>
  