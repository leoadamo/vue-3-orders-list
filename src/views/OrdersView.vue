<script setup lang="ts">
// COMPOSABLES
import { useOrder } from "@/composables/useOrder";

const { order, isLoading, error, fetchOrder } = useOrder();

fetchOrder(1);
</script>

<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error.message }}</p>
    <p>Detail: {{ error.detail }}</p>
  </div>

  <div v-else>
    <p>{{ order }}</p>
  </div>
</template>
