<script setup lang="ts">
type Repo = {
  id: number;
  name: string;
  repo: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  stars: number;
  watchers: number;
  forks: number;
  defaultBranch: string;
}

type Response = {
  repos: Repo[]
}

const myluRepos: Response = await $fetch('https://ungh.cc/users/mylu0x/repos');
</script>

<template>
  <section class="py-32px text-center">
    <h1 class="text-48px font-700 text-gray-8 text-shadow-sm">Projects</h1>
    <p class="text-14px font-500 text-gray-7">My projects</p>
  </section>
  <main class="flex flex-col gap-12px">
    <section>
      <h2 class="mb-4px flex items-center gap-3px">
        <Icon name="tabler:brand-github-filled" class="text-gray-7" />
        <span class="font-500 text-gray-8">GitHub Repositories</span>
        <span class="ml-auto text-14px font-500 text-gray-7">This list may not be up to date.</span>
      </h2>
      <div class="flex flex-col gap-12px">
        <RepoCard v-for="repo in myluRepos.repos" :key="repo.id" :name="repo.name" :repo="repo.repo" :desc="repo.description" :stars="repo.stars" :forks="repo.forks" />
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>