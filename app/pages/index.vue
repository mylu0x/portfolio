<script setup lang="ts">
type Langs = 'en' | 'ja' | 'de' | 'es' | 'fr' | 'ko' | 'zh-CN' | 'zh-TW' | 'pl' | 'uk' | 'ru' | 'hi';

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
      <template v-else-if="lang === 'ko'">
        <p class="text-slate-7">
          <strong>Hey!</strong> 제 이름은 <strong>Mylu</strong> <small class="text-slate-6">(/mɨlu/로 발음합니다)</small>
          <span class="text-slate-8">, 프론트엔드 개발을 막 시작한 초보자입니다.</span>
        </p>
        <div class="text-gray-6">
          <p>
            <strong>프론트엔드 개발</strong>에는 주로
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a>, 그리고
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
            를 사용하고 있습니다.
          </p>
          <p>그 외에도 음악을 듣거나 <strong>Fallout 4</strong> 같은 게임을 즐기는 것을 좋아합니다.</p>
          <p>무엇이든 신중하게 접근하지만, 동시에 조금은 우유부단한 편이에요...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'zh-CN'">
        <p class="text-slate-7">
          <strong>Hey!</strong> 我叫 <strong>Mylu</strong> <small class="text-slate-6">(发音为 /mɨlu/)</small>
          <span class="text-slate-8">，是一名刚入门的前端开发者。</span>
        </p>
        <div class="text-gray-6">
          <p>
            在<strong>前端开发</strong>方面，我主要使用
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>、
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> 和
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>。
          </p>
          <p>此外，我喜欢听音乐，也喜欢玩 <strong>Fallout 4</strong> 等游戏。</p>
          <p>我对任何事情都很谨慎，但有时候也有点优柔寡断...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'zh-TW'">
        <p class="text-slate-7">
          <strong>Hey!</strong> 我叫 <strong>Mylu</strong> <small class="text-slate-6">(發音為 /mɨlu/)</small>
          <span class="text-slate-8">，是一名剛開始接觸前端開發的新手。</span>
        </p>
        <div class="text-gray-6">
          <p>
            在<strong>前端開發</strong>方面，我主要使用
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>、
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> 和
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>。
          </p>
          <p>除此之外，我喜歡聽音樂，也喜歡玩 <strong>Fallout 4</strong> 這類遊戲。</p>
          <p>我對任何事情都很謹慎，但同時也有點優柔寡斷...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'pl'">
        <p class="text-slate-7">
          <strong>Cześć!</strong> Nazywam się <strong>Mylu</strong> <small class="text-slate-6">(wymawia się /mɨlu/)</small>
          <span class="text-slate-8">, jestem początkującym front-end developerem.</span>
        </p>
        <div class="text-gray-6">
          <p>
            W <strong>front-end development</strong> głównie używam
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> oraz
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>.
          </p>
          <p>Poza tym lubię słuchać muzyki i grać w gry, takie jak <strong>Fallout 4</strong>.</p>
          <p>Podchodzę do wszystkiego ostrożnie, ale czasem jestem też niezdecydowany...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'uk'">
        <p class="text-slate-7">
          <strong>Привіт!</strong> Мене звати <strong>Mylu</strong> <small class="text-slate-6">(вимовляється /mɨlu/)</small>
          <span class="text-slate-8">, я початківець фронтенд-розробник.</span>
        </p>
        <div class="text-gray-6">
          <p>
            У <strong>front-end розробці</strong> я в основному використовую
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> та
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>.
          </p>
          <p>Також люблю слухати музику та грати у такі ігри, як <strong>Fallout 4</strong>.</p>
          <p>Я обережний у всьому, але іноді можу бути трохи невпевненим...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'ru'">
        <p class="text-slate-7">
          <strong>Привет!</strong> Меня зовут <strong>Mylu</strong> <small class="text-slate-6">(произносится /mɨlu/)</small>
          <span class="text-slate-8">, я начинающий фронтенд-разработчик.</span>
        </p>
        <div class="text-gray-6">
          <p>
            В <strong>фронтенд-разработке</strong> я в основном использую
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> и
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>.
          </p>
          <p>Кроме того, мне нравится слушать музыку и играть в игры, например <strong>Fallout 4</strong>.</p>
          <p>Я осторожен во всем, но иногда могу быть нерешительным...</p>
        </div>
        <div class="text-gray-7">
          <p class="flex gap-8px">
            <a href="https://github.com/mylu0x" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://misskey.io/@mylu0x" target="_blank" rel="noopener noreferrer">Misskey.io</a>
            <a href="https://zenn.dev/mylu0x" target="_blank" rel="noopener noreferrer">Zenn</a>
          </p>
        </div>
      </template>
      <template v-else-if="lang === 'hi'">
        <p class="text-slate-7">
          <strong>नमस्ते!</strong> मेरा नाम <strong>Mylu</strong> <small class="text-slate-6">(उच्चारण /mɨlu/)</small>
          <span class="text-slate-8">, मैं एक शुरुआत करने वाला फ्रंट-एंड डेवलपर हूँ।</span>
        </p>
        <div class="text-gray-6">
          <p>
            <strong>फ्रंट-एंड डेवलपमेंट</strong> में मैं मुख्य रूप से
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>,
            <a href="https://nuxt.com" target="_blank" rel="noopener noreferrer">Nuxt</a> और
            <a href="https://unocss.dev" target="_blank" rel="noopener noreferrer">UnoCSS</a>
            का उपयोग करता हूँ।
          </p>
          <p>इसके अलावा, मुझे संगीत सुनना और <strong>Fallout 4</strong> जैसी गेम्स खेलना पसंद है।</p>
          <p>मैं किसी भी चीज़ के प्रति सावधान हूँ, लेकिन कभी-कभी थोड़ा अनिर्णयशील भी हूँ...</p>
        </div>
        <div class="text-gray-7">
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
      /
      <button @click="lang = 'ko'">한국어</button>
      /
      <button @click="lang = 'zh-CN'">简体中文</button>
      /
      <button @click="lang = 'zh-TW'">繁體中文</button>
      /
      <button @click="lang = 'pl'">Polski</button>
      /
      <button @click="lang = 'uk'">Українська</button>
      /
      <button @click="lang = 'ru'">Русский</button>
      /
      <button @click="lang = 'hi'">हिन्दी</button>
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