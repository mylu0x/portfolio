<script setup lang="ts">
type langs = 'en' | 'ja' | 'de';

const selfIntroLang = ref<langs>('en');
</script>

<template>
  <section v-show="selfIntroLang === 'en'" class="my-42px flex flex-col gap-5px">
    <h1>
      <span class="text-38px font-700 text-shadow-sm mr-16px">Hey There!</span>
      <span class="text-14px font-500 text-gray-7">
        <button @click="selfIntroLang = 'en'">English</button>
        /
        <button @click="selfIntroLang = 'ja'">日本語</button>
        /
        <button @click="selfIntroLang = 'de'">Deutsch</button>
      </span>
    </h1>
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

  <section v-show="selfIntroLang === 'ja'" class="my-42px flex flex-col gap-5px">
    <h1>
      <span class="text-38px font-700 text-shadow-sm mr-16px">Hey There!</span>
      <span class="text-14px font-500 text-gray-7">
        <button @click="selfIntroLang = 'en'">English</button>
        /
        <button @click="selfIntroLang = 'ja'">日本語</button>
        /
        <button @click="selfIntroLang = 'de'">Deutsch</button>
      </span>
    </h1>
    <div class="flex flex-col gap-12px">
      <p class="text-slate-7 text-shadow-sm">
        <strong>Hey!</strong> My name is <strong>Mylu</strong> <small class="text-slate-6">(pronounced as /mɨlu/)</small>
        <span class="text-slate-8">, a newbie front-end developer.</span>
      </p>
      <div class="text-gray-6">
        <p>
          <strong>フロントエンド開発</strong>には主に
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
          <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> and
          <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
          を使用しています。
        </p>
        <p>他には、音楽を聞いたり<strong>Fallout 4</strong>などのゲームを遊ぶことが好きです。</p>
        <p>私は何に対しても慎重ですが、同時に優柔不断でもあります...</p>
      </div>
      <div class="text-gray-7">
        <p class="flex gap-8px">
          <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
          <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
        </p>
      </div>
    </div>
  </section>

  <section v-show="selfIntroLang === 'de'" class="my-42px flex flex-col gap-5px">
    <h1>
      <span class="text-38px font-700 text-shadow-sm mr-16px">Hey There!</span>
      <span class="text-14px font-500 text-gray-7">
      <button @click="selfIntroLang = 'en'">English</button>
      /
      <button @click="selfIntroLang = 'ja'">日本語</button>
      /
      <button @click="selfIntroLang = 'de'">Deutsch</button>
    </span>
    </h1>
    <div class="flex flex-col gap-12px">
      <p class="text-slate-7 text-shadow-sm">
        <strong>Hallo!</strong> Mein Name ist <strong>Mylu</strong> <small class="text-slate-6">(ausgesprochen /mɨlu/)</small>
        <span class="text-slate-8">, ein Anfänger im Front-End-Development.</span>
      </p>
      <div class="text-gray-6">
        <p>
          Ich nutze hauptsächlich
          <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
          <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> und
          <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
          für <strong>meine Front-End-Projekte</strong>.
        </p>
        <p>Außerhalb des Programmierens höre ich gerne <strong>Musik</strong> und spiele Spiele wie <strong><i>Fallout 4</i></strong>.</p>
        <p>Ich bin in allem, was ich tue, sorgfältig, kann aber manchmal unentschlossen sein.</p>
      </div>
      <div class="text-gray-7">
        <p>Finde mich auf:</p>
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