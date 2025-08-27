<script setup lang="ts">
const isDev = import.meta.env.DEV;
</script>

<template>
  <router-view />

  <vue-axe-popup-wrapper v-if="isDev" />
</template>
