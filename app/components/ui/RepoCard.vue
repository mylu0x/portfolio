<script setup lang="ts">
const props = defineProps<{
  name: string;
  repo: string;
  desc: string;
  stars: number;
  forks: number
}>();
</script>

<template>
  <a :href="`https://github.com/${repo}`" target="_blank" rel="noopener noreferrer" class="bg-white px-14px py-10px b-(dotted 1px gray-3) rounded-14px shadow-sm flex justify-between transition-all-50 hover:bg-gray-1">
    <div class="flex flex-col gap-4px">
      <h3 class="font-600 text-gray-8">{{ name }}</h3>
      <p class="text-12px font-500 text-gray-6">{{ desc }}</p>
    </div>
    <div class="flex flex-col justify-between my-4px">
      <p class="flex items-center gap-4px text-gray-7 min-w-30px">
        <Icon name="tabler:star" class="size-14px" />
        <span class="text-14px font-500 leading-none text-12px">
          {{ stars }}
        </span>
      </p>
      <p class="flex items-center gap-4px text-gray-7 min-w-30px">
        <Icon name="tabler:git-fork" class="size-14px" />
        <span class="text-14px font-500 leading-none text-12px">
          {{ forks }}
        </span>
      </p>
    </div>
  </a>
</template>

<style scoped>

</style>