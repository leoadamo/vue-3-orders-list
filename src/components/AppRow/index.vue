<script setup lang="ts">
// DEPENDENCIES
import { computed } from "vue";

// TYPES
import type { AppRowProps } from "./types";

// CONFIG
import { ICON_MAP } from "./config";

const props = defineProps<AppRowProps>();

/**
 * Determines if the contact row is clickable based on its type.
 *
 * @returns {boolean} Whether the contact row is clickable.
 */
const isClickable = computed(() => {
  return props.type === "email" || props.type === "phone";
});

/**
 * Determines the HTML element and bindings for the contact row.
 *
 * @returns {'a'|'span'} The HTML element for the contact row.
 */
const element = computed(() => (isClickable.value ? "a" : "span"));

/**
 * Computes the HTML element bindings for the contact row.
 * Returns an object containing the CSS classes and, if clickable, the appropriate href attribute.
 *
 * - If the contact type is "email", sets href to a mailto link.
 * - If the contact type is "phone", sets href to a tel link.
 * - Otherwise, only returns the base classes.
 *
 * @returns {{ class: string[]; href?: string }} Object with class names and optional href.
 */
const bindings = computed<{
  class: string[];
  href?: string;
}>(() => {
  const baseClasses = ["inline-flex", "items-center", "gap-1"];

  if (!isClickable.value) {
    return { class: baseClasses };
  }

  const href = props.type === "email" ? `mailto:${props.content}` : `tel:${props.content}`;

  return {
    href,
    class: [
      ...baseClasses,
      "hover:text-primary-500",
      "hover:underline",
      "transition-colors",
      "duration-200",
    ],
  };
});
</script>

<template>
  <div class="flex items-center gap-2">
    <component
      :is="element"
      v-bind="bindings"
    >
      <component :is="ICON_MAP[props.icon]" />

      {{ props.content }}
    </component>
  </div>
</template>
