<template>
  <div>
    <router-view/>
    <div class="absolute top-0 right--10 h-12 w-18 m-4 flex">
      <button
        class="js-change-theme focus:outline-none px-4"
        @click="toggleDark"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
      <button class="js-change-theme focus:outline-none" @click="toggleLocale">
        🌍
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { isDark, toggleDark } from '../logics'
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n({})
const toggleLocale = () => {
  if (t('langcode') === 'cs') locale.value = 'en'
  else locale.value = 'cs'
}
</script>

<style>
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background-color: rgba(37, 78, 216, 1);

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 5px;
}
</style>
