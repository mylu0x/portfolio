<script setup lang="ts">

</script>

<template>
  <footer class="my-32px flex flex-col gap-3px">
    <div class="flex items-center gap-6px">
      <NuxtImg src="/icon.svg" alt="Mylu icon" class="size-24px" />
      <span class="text-slate-8 font-600">Mylu</span>
    </div>
    <p class="text-14px font-500 text-gray-8 hover:text-black transition-all-100 ml-3px">&copy; 2025 Mylu. All Rights Reserved.</p>
    <p class="text-14px font-500 text-gray-8 hover:text-black transition-all-100 ml-3px flex">Icons used on this site are open source: <a href="https://github.com/tabler/tabler-icons" target="_blank" rel="noopener noreferrer">Tabler</a></p>
    <p class="mt-1px text-14px flex items-center gap-4px font-500">
      <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
      <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
      <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
    </p>
  </footer>
</template>

<style scoped>
a {
  @apply hover:text-black flex items-center gap-1px b-b-(dotted 1px gray-4) text-gray-8 leading-none py-1px mx-4px transition-all-50;
}
</style>