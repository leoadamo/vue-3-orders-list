<script setup lang="ts">
// DEPENDENCIES
import { computed } from "vue";
import { formatOrderDate } from "@/utils/formatDate";

// TYPES
import type { Header as OrderHeaderProps } from "@/types/order";

const props = defineProps<OrderHeaderProps>();

/**
 * It gets the formatted total price for the given order.
 *
 * @returns {string} The formatted total price.
 */
const totalPrice = computed(() => {
  return `${props.currency} ${props.price}`;
});

/**
 * It gets the formatted creation date for the given order.
 *
 * @returns {string} The formatted creation date.
 */
const createdAt = computed(() => {
  return formatOrderDate(props.createdAt);
});
</script>

<template>
  <header class="flex w-full gap-6">
    <div class="bg-primary-500 text-neutrals-white w-[200px] rounded-tr-lg rounded-br-lg p-4">
      <h2 class="text-lg">Pre-Order</h2>
      <h1 class="text-2xl font-bold">{{ number }}</h1>
      <p class="text-xs">#ME{{ serial }}</p>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-neutrals-700 text-lg font-semibold">{{ buyer }}</h3>

      <div class="flex flex-col gap-1">
        <span>
          <ion-person-outline />
          {{ contact.name }}
        </span>

        <div class="flex items-center gap-4">
          <a
            :href="`mailto:${contact.email}`"
            class="hover:text-primary-500 inline-flex items-center gap-1 transition-colors duration-200 hover:underline"
          >
            <ion-mail-outline />
            {{ contact.email }}
          </a>

          <a
            :href="`tel:${contact.phone}`"
            class="hover:text-primary-500 inline-flex items-center gap-1 transition-colors duration-200 hover:underline"
          >
            <ion-call-outline />
            {{ contact.phone }}
          </a>

          <a
            :href="`tel:${contact.fax}`"
            class="hover:text-primary-500 inline-flex items-center gap-1 transition-colors duration-200 hover:underline"
          >
            <ion-call-outline />
            {{ contact.fax }}
          </a>
        </div>
      </div>
    </div>

    <div class="ml-auto flex flex-col items-end gap-1">
      <span class="text-xl font-semibold">{{ totalPrice }}</span>
      <span class="text-success-500 text-xl font-semibold">{{ status }}</span>
      <span>Created at {{ createdAt }}</span>
    </div>
  </header>
</template>
