<script setup lang="ts">
// TYPES
import type { AppBadgeProps } from "./types";

defineProps<AppBadgeProps>();
</script>

<template>
  <span class="bg-primary-50 text-primary-500 rounded-lg p-1">{{ content }}</span>
</template>
