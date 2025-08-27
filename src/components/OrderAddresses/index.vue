<script setup lang="ts">
// TYPES
import type { OrderAddressesProps } from "./types";

defineProps<OrderAddressesProps>();
</script>

<template>
  <section>
    <div>
      {{ addresses }}
    </div>
  </section>
</template>
