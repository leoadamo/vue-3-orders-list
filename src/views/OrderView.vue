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
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error.message }}</p>
    <p>Detail: {{ error.detail }}</p>
  </div>

  <template v-else>
    <order-header :header="order.header" />
    <order-supplier :supplier="order.supplier" />
    <order-addresses :addresses="order.addresses" />
  </template>
</template>
