<template>
    <div class="file-input-container">
      <input 
        type="file" 
        :accept="accept" 
        class="file-input" 
        @change="handleFileChange" 
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FileInput',
    props: {
      accept: {
        type: String,
        default: '*/*'
      }
    },
    methods: {
      handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
          this.$emit('update:modelValue', input.files);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .file-input-container {
    width: 100%;
  }
  
  .file-input {
    width: 100%;
    height: 50px;
    border: 1px solid #d3d3d3; /* Very light gray */
    border-radius: 10px;
    box-sizing: border-box; /* Ensures padding is included in the width */
    padding: 10px;
  }
  </style>
  