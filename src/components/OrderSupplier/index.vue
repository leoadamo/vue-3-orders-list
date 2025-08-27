<script setup lang="ts">
// TYPES
import type { Supplier as OrderSupplierProps } from "@/types/order";

defineProps<OrderSupplierProps>();
</script>

<template>
  <section>
    <div>
      {{ name }}
    </div>
  </section>
</template>
