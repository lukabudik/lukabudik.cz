<template>
  <div>
    <div
      class="py-24 px-4 duration-300 ease-out transition-colors justify-center flex items-center min-h-screen antialiased text-gray-900 dark:text-white leading-normal tracking-wider bg-cover bg-gray-200 dark:bg-gray-700 sm:max-w-screen"
    >
      <div class="grid gap-4 my-8 px-5 sm:px-0">
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
import { projects } from '@/shared/projects'
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
}
</style>