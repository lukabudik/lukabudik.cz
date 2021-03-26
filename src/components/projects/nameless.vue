<template>
    <div class="transition-colors project shadow-2xl bg-white dark:bg-gray-800 rounded-lg" >
        <div class="w-full rounded-sm p-6 flex flex-col justify-between leading-normal">
            <div>
                <div class="my-4 clearfix">
                    <a class="float-right" href="https://www.facebook.com/namelessesport/>
                        🔗
                    </a>
                </div>
                <div class=" font-bold text-xl mb-2">Nameless.esport</div>
                <p class="text-label-info text-base">{{ t("nameless_desc") }}</p>
            </div>
            <div class="py-2 ">
                <div class="flex items-center py-4">
                  <div class="text-sm">
                        <p class="text-label-info leading-none"><b>Source:</b> <a class="text-blue-600 dark:hover:dark:text-gray-600 hover:text-blue-700 duration-500" href="https://github.com/lukabudik/budik.me">GitHub</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { isDark, toggleDark } from "../../logics";
import { ref, defineComponent } from "vue";
// @ts-ignore
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n({});
const toggleLocale = () => {
  if (t("langcode") === "cs") locale.value = "en";
  else locale.value = "cs";
};
</script>
<style scoped>
.project {
  display: grid;
}
@media only screen and (max-width: 600px) {
  .project {
    display: block;
    width: 100%;
  }
}
</style>