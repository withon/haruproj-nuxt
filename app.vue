<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  meta: [{ name: 'referrer', content: 'same-origin' }],
});
</script>