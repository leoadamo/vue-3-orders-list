<script setup lang="ts">
const isDev = import.meta.env.DEV;
</script>

<template>
  <h1 class="shadow-level-1 text-primary-500 m-3 block p-7">You did it!</h1>
  <p>
    Visit
    <a
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener"
    >
      vuejs.org
    </a>
    to read the documentation
  </p>

  <vue-axe-popup-wrapper v-if="isDev" />
</template>
