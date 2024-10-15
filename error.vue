<template>
  <NuxtLayout>
    <section class="section-light pt-5 pb-5">
      <h1>{{ error ? error.message : '500' }}</h1>
    </section>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const props = defineProps({
  error: Object,
});
</script>

<style scoped lang="scss"></style>
