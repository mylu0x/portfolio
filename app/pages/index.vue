<script setup lang="ts">

</script>

<template>
  <section class="my-42px flex flex-col gap-5px">
    <h1 class="text-38px font-700 text-shadow-sm">Hey There!</h1>
    <div class="flex flex-col gap-12px">
      <p class="text-slate-7 text-shadow-sm">
        <strong>Hey!</strong> My name is <strong>Mylu</strong> <small class="text-slate-6">(pronounced as /mɨlu/)</small>
        <span class="text-slate-8">, a newbie front-end developer.</span>
      </p>
      <div class="text-gray-6">
        <p>
          I mainly use
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
          <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> and
          <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
          for <strong>my front-end projects</strong>.
        </p>
        <p>Outside of coding, I love listening to <strong>music</strong> and playing games such as <strong><i>Fallout 4</i></strong>.</p>
        <p></p>
        <p>I am careful in everything I do, yet I can be indecisive at times.</p>
      </div>
      <div class="text-gray-7">
        <p>Find me on:</p>
        <p class="flex gap-8px">
          <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
          <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
strong {
  @apply font-600 text-gray-7;
}

a {
  @apply text-gray-7 underline transition-all-50 underline-(dotted 1px gray-5) hover:underline-gray-7 hover:text-black font-500;
}

ul {
  @apply list-disc;
}

li {
  @apply ml-26px;
}

li::marker {
  color: slategray;
}
</style>