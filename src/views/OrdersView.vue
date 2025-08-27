<script setup lang="ts">
// DEPENDENCIES
import { ref } from "vue";

// TYPES
import type { Order } from "@/types/order";

const order = ref<Order | null>(null);
const isLoading = ref<boolean>(false);
const error = ref<string>("");

/**
 * It fetches order details from the API
 * and handles loading and error states.
 *
 * @async
 * @throws {Error} If the fetch fails.
 * @returns {void}
 */
async function fetchOrder(): Promise<void> {
  try {
    isLoading.value = true;

    const response = await fetch("/api/orders/1");
    const data: Order = await response.json();

    order.value = data;
  } catch (err) {
    error.value = "Failed to fetch order details. Please, try again later.";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

fetchOrder();
</script>

<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
    <p>{{ order }}</p>
  </div>
</template>
