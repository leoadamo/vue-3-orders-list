<script setup lang="ts">
// DEPENDENCIES
import { computed } from "vue";
import { omit } from "lodash-es";

// ICONS
import AppIconInfoTip from "~icons/app-icons/info-tip";

// COMPONENTS
import AppContactRow from "@/components/AppRow/index.vue";

// UTILS
import { formatDate } from "@/utils/formatDate";

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
  return formatDate(props.createdAt);
});
</script>

<template>
  <header class="flex w-full flex-col gap-6 lg:flex-row">
    <div
      class="bg-primary-500 text-neutral-white -m-4 w-auto p-4 lg:m-0 lg:min-w-[200px] lg:rounded-tr-lg lg:rounded-br-lg"
    >
      <h2 class="text-lg">Pre-Order</h2>
      <h1 class="text-2xl font-bold">{{ number }}</h1>
      <p class="text-xs">#ME{{ serial }}</p>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-semibold text-neutral-700">{{ buyer }}</h3>

      <div class="flex flex-col gap-1">
        <app-contact-row
          type="raw"
          icon="person"
          :content="contact.name"
        />

        <div class="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:gap-4">
          <app-contact-row
            v-for="(value, key) in omit(contact, 'name')"
            :key="key"
            :type="key"
            :icon="key"
            :content="value"
          />
        </div>
      </div>
    </div>

    <div class="ml-auto flex flex-col items-end gap-1">
      <span class="text-xl font-semibold">{{ totalPrice }}</span>
      <span class="text-success-500 text-xl font-semibold">{{ status }}</span>
      <span class="inline-flex items-center gap-1">
        Created at {{ createdAt }} <app-icon-info-tip />
      </span>
    </div>
  </header>
</template>
