<script setup lang="ts">
const props = defineProps<{
  text: string;
  to?: string;
}>();
</script>

<template>
  <NuxtLink :to :class="$route.path === to ? 'text-black' : 'text-gray-8'" class="font-fancy text-15px font-500 transition-all-100 hover:text-black">
    {{ text }}
  </NuxtLink>
</template>

<style scoped>
.font-fancy {
  font-family: 'Ubuntu', sans-serif;
}
</style>