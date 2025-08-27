<script setup lang="ts">
// COMPONENTS
import AppCard from "@/components/AppCard/index.vue";

// TYPES
import type { Supplier as OrderSupplierProps } from "@/types/order";

defineProps<OrderSupplierProps>();
</script>

<template>
  <section>
    <app-card
      subtitle="Supplier"
      :title="name"
      :badge="code"
    >
      <p>{{ address }}</p>
    </app-card>
  </section>
</template>
