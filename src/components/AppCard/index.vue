<script setup lang="ts">
// DEPENDENCIES
import { computed } from "vue";

// COMPONENTS
import AppBadge from "@/components/AppBadge/index.vue";

// TYPES
import type { AppCardProps } from "./types";

const props = withDefaults(defineProps<AppCardProps>(), {
  badge: "",
  singleColumn: false,
});

/**
 * Computed property to determine if the badge should be shown.
 *
 * @returns {boolean} True if badge prop is provided, false otherwise.
 */
const showBadge = computed(() => Boolean(props.badge));

/**
 * Computed property to determine the classes for the grid layout.
 *
 * @returns {string} The classes for the grid layout.
 */
const classes = computed(() => {
  return props.singleColumn
    ? "grid w-full grid-cols-1 gap-1"
    : "grid w-full grid-cols-1 gap-1 sm:grid-cols-2";
});
</script>

<template>
  <div class="bg-neutral-white shadow-level-1 flex w-full flex-col gap-4 rounded-lg p-4">
    <div class="flex w-fit flex-col gap-1">
      <h5 class="text-xs">
        {{ subtitle }}
      </h5>

      <h4 class="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700">
        {{ title }}

        <app-badge
          v-if="showBadge"
          :content="`#${badge}`"
        />
      </h4>
    </div>

    <div :class="classes">
      <slot />
    </div>
  </div>
</template>
