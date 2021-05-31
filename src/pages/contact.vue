<template>
  <div>
    <div>
      <div
        class="duration-300 ease-out transition-colors min-h-screen font-sans scale-50 antialiased text-gray-900 dark:text-white leading-normal tracking-wider bg-cover py-24 lg:py-0 bg-gray-200 dark:bg-gray-700"
      >
        <div
          class="max-w-4xl flex items-center justify-center h-auto lg:h-screen flex-wrap mx-auto"
        >
          <div
            id="profile"
            class="w-120 rounded-lg shadow-2xl bg-white dark:bg-gray-800 mx-6 lg:mx-0 md:px-15 px-10 py-10"
          >
            <form @submit.prevent="submit">
              <div>
                <span class="text-sm font-bold">{{ t('full_name') }}</span>
                <input
                  minlength="5"
                  class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  required
                  :placeholder="t('placeholder_name')"
                  v-model="values.name"
                />
              </div>
              <div class="mt-8">
                <span class="text-sm font-bold">{{ t('email') }}</span>
                <input
                  minlength="5"
                  class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  :placeholder="
                    t('placeholder_email_name') + '@' + t('placeholder_email')
                  "
                  required
                  v-model="values.email"
                />
              </div>
              <div class="mt-8">
                <span class="text-sm font-bold">{{ t('message') }}</span>
                <textarea
                  class="resize-none w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                  minlength="20"
                  :placeholder="t('placeholder_message')"
                  v-model="values.message"
                ></textarea>
              </div>
              <div class="mt-8">
                <button
                  class="h-12 text-sm font-bold tracking-wide duration-500 text-gray-100 rounded-lg w-full focus:outline-none focus:shadow-outline flex justify-center items-center"
                  type="submit"
                  :disabled="state.loading"
                  :class="[
                    state.loading
                      ? 'cursor-not-allowed bg-blue-600'
                      : state.status === 'error'
                      ? 'bg-red-500 hover:bg-red-700'
                      : state.status === 'success'
                      ? 'bg-green-500 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700',
                  ]"
                >
                  <span v-if="!state.loading">
                    {{
                      state.status === 'success'
                        ? t('message_success')
                        : state.status === 'error'
                        ? t('message_error')
                        : t('send_message')
                    }}
                  </span>
                  <div
                    v-else
                    class="spinner animate-spin rounded-full w-7 h-7 border-4 border-white border-opacity-20"
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from '@/logics/form'
import firebase from 'firebase/app'
import "firebase/functions"
import { reactive, ref, watchEffect, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import { load } from 'recaptcha-v3'
import { config } from 'config/firebase'

const { locale, t } = useI18n()

onBeforeMount(() => {
  if (!firebase.apps.length) firebase.initializeApp(config)
})

const values = reactive({
  name: '',
  email: '',
  message: '',
  recaptchaToken: '',
})

const state = reactive({
  status: '' as 'success' | 'error',
  loading: false,
})

const { sendResponse } = useForm()

const submit = async () => {
  if (state.loading) return
  state.loading = true

  await validateCaptcha()

  const { status } = await sendResponse(values)

  state.loading = false
  state.status = status
}
watchEffect(() => {
  if (state.status === 'success') {
    values.name = ''
    values.email = ''
    values.message = ''
  }
})

const validateCaptcha = async () => {
  const recaptcha = await load('6Ld6MPoaAAAAAG74-Q-6qTBTw-JizklH_rDMdqMh')
  values.recaptchaToken = await recaptcha.execute('contactForm')
}
</script>

<style scoped>
.spinner {
  border-top: solid white;
}
</style>
