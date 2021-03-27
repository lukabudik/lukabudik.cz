<template>
  <div class="transition-colors">
    <div
      class="lg:px-48 md:px-2 justify-center flex items-center h-auto lg:h-screen flex-wrap min-h-screen font-sans scale-50 antialiased text-gray-900 dark:text-white leading-normal tracking-wider bg-cover py-16 md:py-0 bg-gray-200 dark:bg-gray-700"
    >
      <div class="projects my-8 px-5">
        <project
          v-for="(project, index) of projects"
          :key="index"
          :title="project.title"
          :href="project.href"
          :href-source="project.source"
          :source-label="project.sourceLabel"
        >
          {{ t(project.transKey) }}
        </project>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
import { projects } from '../shared/projects'
</script>
<style>
#container {
  padding-top: 4em;
}
.projects {
  display: grid;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  grid-template-columns: repeat(3, 1fr);
}
@media only screen and (max-width: 1200px) {
  .projects {
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 768px) {
  .projects {
    display: grid;
    grid-row-gap: 1em;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
