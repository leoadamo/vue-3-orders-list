<script setup lang="ts">
// DEPENDENCIES
import { omit } from "lodash-es";

// COMPONENTS
import AppRow from "@/components/AppRow/index.vue";
import AppCard from "@/components/AppCard/index.vue";

// UTILS
import { formatDate } from "@/utils/formatDate";

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
      <ul class="flex flex-col gap-1">
        <li>
          <app-row
            type="raw"
            icon="card"
            :content="`${document.type}: ${document.value}`"
          />
        </li>

        <li>
          <app-row
            type="raw"
            icon="location"
            :content="address"
          />
        </li>

        <li>
          <app-row
            type="raw"
            icon="person"
            :content="name"
          />
        </li>
      </ul>

      <ul class="flex flex-col gap-1">
        <li
          v-for="(value, key) in omit(contact, 'name')"
          :key="key"
        >
          <app-row
            :type="key"
            :icon="key"
            :content="value"
          />
        </li>

        <li>
          <app-row
            type="raw"
            icon="eye"
            :content="formatDate(lastReplyAt)"
          />
        </li>
      </ul>
    </app-card>
  </section>
</template>
