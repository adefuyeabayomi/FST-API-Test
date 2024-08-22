<template>
    <div>
      <button class="fst-btn fst-btn-hover">{{ buttonVal }}</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      buttonVal: {
        type: String,
        required: true
      }
    }
  });
  </script>
  
  <style lang="css">
  /* Add your styles here */
  .fst-btn{
    padding: 10px 40px;
    background-color: black;
    color: white;
    border-radius: 30px;
    border: 0px solid;
    transition: all 0.5s ease; /* Smooth transition for all changes */
}

.fst-btn:hover {
  box-shadow: -2px 6px 10px rgba(0, 0, 0, 0.3); /* Add shadow */
  transform: translateY(-5px); /* Move up slightly */
}
  </style>