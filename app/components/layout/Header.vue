<script setup lang="ts">

</script>

<template>
  <header class="flex items-center justify-between gap-12px h-55px">
    <div class="flex items-center gap-3px">
      <NuxtImg src="/icon.svg" class="size-26px" />
    </div>
    <div class="flex items-center gap-18px">
      <HeaderLink text="Home" to="/" />
      <HeaderLink text="Articles" to="/articles" />
    </div>
  </header>
</template>

<style scoped>

</style>
