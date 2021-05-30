<template>
  <div>
    <router-view />
    <div class="flex justify-between top-0 py-6 px-6 absolute w-screen text-xl">
      <div class="p-4">
        <button class="focus:outline-none px-4">
          <router-link to="/"
            >{{ route.name != 'index' ? '🏠' : '👋' }}
          </router-link>
        </button>
      </div>
      <div class="p-4">
        <button
          class="animatedbutton focus:outline-none px-4"
          @click="toggleDark"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
        <button class="animatedbutton focus:outline-none" @click="switchLocale">
          🌍
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { isDark, toggleDark } from '@/logics/dark'
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
const { locale, t } = useI18n({})
const switchLocale = () => {
  if (t('langcode') === 'cs') locale.value = 'en'
  else locale.value = 'cs'
}
const route = useRoute()
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
<style scoped>
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.animatedbutton:focus {
  animation: ease-out bounce-in 0.5s;
}
.animatedbutton:active {
  -webkit-animation: none;
  animation: none;
}
</style>
