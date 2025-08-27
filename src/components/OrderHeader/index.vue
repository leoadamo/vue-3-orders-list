<script setup lang="ts">
// TYPES
import type { OrderHeaderProps } from "./types";

defineProps<OrderHeaderProps>();
</script>

<template>
  <header>
    <div>
      {{ header }}
    </div>
  </header>
</template>
