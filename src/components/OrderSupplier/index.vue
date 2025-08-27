<script setup lang="ts">
// TYPES
import type { OrderSupplierProps } from "./types";

defineProps<OrderSupplierProps>();
</script>

<template>
  <section>
    <div>
      {{ supplier }}
    </div>
  </section>
</template>
