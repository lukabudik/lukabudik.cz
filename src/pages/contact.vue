<template>
  <div>
    <div
      class="duration-300 ease-out transition-colors min-h-screen font-sans scale-50 antialiased text-gray-900 dark:text-white leading-normal tracking-wider bg-cover py-20 lg:py-0 bg-gray-200 dark:bg-gray-700"
    >
      <div
        class="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto"
      >
        <div
          id="profile"
          class="w-120 rounded-lg shadow-2xl bg-white dark:bg-gray-800 mx-6 lg:mx-0 px-15 py-10"
        >
          <div class="">
          <div>
            <span class="text-sm font-bold">{{ t('full_name') }}</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" required>
          </div>
          <div class="mt-8">
            <span class="text-sm font-bold">{{ t('email') }}</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" required>
          </div>
          <div class="mt-8">
            <span class=" text-sm font-bold">{{ t('message') }}</span>
            <textarea
              class="resize-none w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div class="mt-8">
            <button
              class="text-sm font-bold tracking-wide bg-blue-600 hover:bg-blue-700 duration-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"> 
              {{ t('send_message') }}
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute top-0 left--10 h-12 w-18 m-4 flex">
      <button
        class="focus:outline-none px-4"
      >
      <router-link to="/">🏠
      </router-link>
      </button>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
</script>