<script setup lang="ts">
type Langs = 'en' | 'ja' | 'de' | 'es' | 'fr';

const lang = ref<Langs>('en');
</script>

<template>
  <section class="my-52px flex flex-col gap-16px">
    <h1 class="text-38px font-700 text-shadow-sm">Hey There!</h1>
    <div class="flex flex-col gap-18px">
      <template v-if="lang === 'en'">
        <p class="text-slate-7">
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
          <p>I am cautious about everything, but at the same time, I am also indecisive.</p>
        </div>
        <div class="text-gray-7">
          <p>Find me on:</p>
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'ja'">
        <p class="text-slate-7">
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
          <p>何に対しても慎重ですが、同時に優柔不断でもあります...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'de'">
        <p class="text-slate-7">
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
          <p>Ich bin bei allem vorsichtig, aber gleichzeitig auch unentschlossen..</p>
        </div>
        <div class="text-gray-7">
          <p>Finde mich auf:</p>
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'es'">
        <p class="text-slate-7">
          <strong>¡Hola!</strong> Mi nombre es <strong>Mylu</strong> <small class="text-slate-6">(se pronuncia /mɨlu/)</small>
          <span class="text-slate-8">, una desarrolladora front-end principiante.</span>
        </p>
        <div class="text-gray-6">
          <p>
            Principalmente utilizo
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> y
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
            para <strong>mis proyectos de front-end</strong>.
          </p>
          <p>Fuera de la programación, me encanta escuchar <strong>música</strong> y jugar juegos como <strong><i>Fallout 4</i></strong>.</p>
          <p>Soy cuidadoso con todo, pero al mismo tiempo también soy indeciso.</p>
        </div>
        <div class="text-gray-7">
          <p>Encuéntrame en:</p>
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'fr'">
        <p class="text-slate-7">
          <strong>Salut!</strong> Je m'appelle <strong>Mylu</strong> <small class="text-slate-6">(se prononce /mɨlu/)</small>
          <span class="text-slate-8">, une débutante en développement front-end.</span>
        </p>
        <div class="text-gray-6">
          <p>
            J'utilise principalement
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> et
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
            pour <strong>mes projets front-end</strong>.
          </p>
          <p>En dehors du code, j'adore écouter de la <strong>musique</strong> et jouer à des jeux comme <strong><i>Fallout 4</i></strong>.</p>
          <p>Je suis prudent dans tout, mais en même temps, je suis aussi indécis.</p>
        </div>
        <div class="text-gray-7">
          <p>Retrouvez-moi sur :</p>
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
    </div>
    <div class="text-14px font-500 text-gray-7">
        <button @click="lang = 'en'">English</button>
        /
        <button @click="lang = 'ja'">日本語</button>
        /
        <button @click="lang = 'de'">Deutsch</button>
        /
        <button @click="lang = 'es'">Español</button>
        /
        <button @click="lang = 'fr'">Français</button>
      </div>
  </section>
</template>

<style scoped>
strong {
  @apply font-600 text-gray-8;
}

a {
  @apply text-gray-8 underline transition-all-50 underline-(dotted 1px gray-5) hover:underline-gray-7 hover:text-black font-500;
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