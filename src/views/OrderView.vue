<script setup lang="ts">
// COMPONENTS
import OrderHeader from "@/components/OrderHeader/index.vue";
import OrderSupplier from "@/components/OrderSupplier/index.vue";
import OrderAddresses from "@/components/OrderAddresses/index.vue";

// COMPOSABLES
import { useOrder } from "@/composables/useOrder";

const { order, isLoading, error, fetchOrder } = useOrder();

fetchOrder(1);
</script>

<template>
  <div class="base-container">
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>

    <div v-else-if="error">
      <p>Error: {{ error.message }}</p>
      <p>Detail: {{ error.detail }}</p>
    </div>

    <main
      v-else
      class="flex flex-col gap-8"
    >
      <order-header v-bind="order.header" />
      <order-supplier v-bind="order.supplier" />
      <order-addresses :addresses="order.addresses" />
    </main>
  </div>
</template>
