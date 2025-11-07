<script setup lang="ts">

</script>

<template>
  <footer class="my-32px flex flex-col gap-4px">
    <div class="flex items-center gap-6px">
      <NuxtImg src="/icon.svg" alt="Mylu icon" class="size-24px" />
      <span class="text-slate-8 font-600">Mylu</span>
    </div>
    <div class="link-group">
      <p class="text-14px font-500 text-gray-8 hover:text-black transition-all-100 ml-3px">&copy; 2025 <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">Mylu</a>. Licensed under the <a href="https://opensource.org/license/mit" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
      <p class="text-14px font-500 text-gray-8 hover:text-black transition-all-100 ml-3px">Icons used on this site are open source: <a href="https://github.com/tabler/tabler-icons" target="_blank" rel="noopener noreferrer">Tabler</a></p>
    </div>
    <p class="mt-1px text-14px flex items-center gap-4px font-500 external-link-group">
      <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
      <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
      <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn<Icon name="tabler:arrow-up-right" class="size-14px text-gray-7" /></a>
    </p>
  </footer>
</template>

<style scoped>
.external-link-group a {
  @apply hover:text-black flex items-center gap-1px b-b-(dotted 1px gray-4) text-gray-8 leading-none py-1px mx-4px transition-all-50;
}

.link-group a {
  @apply text-gray-7 underline underline-(dotted 1px gray-4) hover:text-gray-9;
}
</style>