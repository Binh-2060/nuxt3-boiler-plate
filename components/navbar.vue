<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  //@ts-ignore
  return locales.value.filter((i) => {
    return i;
  });
});

const changeLocale = (code: string) => {
  if (code) {
    setLocale(code === "en" ? "en" : "lo");
    return;
  }
};

const modes = [
  {
    name: "light",
    value: "light",
  },
  {
    name: "dark",
    value: "dark",
  },
];
</script>

<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="flex items-center justify-end mx-auto capitalize py-2">
      <HeadlessListbox class="" v-model="$colorMode.preference">
        <div class="relative mt-1 mr-2">
          <HeadlessListboxButton class="relative">
            <Icon
              :name="
                $colorMode.value === 'light'
                  ? 'system-uicons:sun'
                  : 'system-uicons:moon'
              "
              size="1.8rem"
            />
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="absolute right-0 mt-1 max-h-60 w-[180px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-900"
            >
              <HeadlessListboxOption
                v-slot="{ active, selected }"
                v-for="mode in modes"
                :key="mode.value"
                :value="mode.value"
                as="template"
              >
                <li
                  :class="[
                    active ? 'dark:bg-gray-900 dark:text-gray-300 ' : '',
                    'relative cursor-pointer select-none py-2 pl-10 pr-4 hover:text-gray-700',
                  ]"
                >
                  <span>{{ mode.name }}</span>
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                  </span>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>

      <!--change localize -->
      <HeadlessListbox class="" v-model="$colorMode.preference">
        <div class="relative mt-1 mx-3">
          <HeadlessListboxButton class="relative">
            <Icon name="mdi:google-translate" size="1.8rem" />
          </HeadlessListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <HeadlessListboxOptions
              class="absolute right-0 mt-1 max-h-60 w-[180px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-gray-900"
            >
              <HeadlessListboxOption
                v-slot="{ active, selected }"
                v-for="locale in availableLocales"
                :key="locale.code"
                :value="locale.value"
                as="template"
                @click="changeLocale(locale.code)"
              >
                <li
                  :class="[
                    active ? 'dark:bg-gray-900 dark:text-gray-300 ' : '',
                    'relative cursor-pointer select-none py-2 pl-10 pr-4 hover:text-gray-700',
                  ]"
                >
                  <span>{{ locale.name }}</span>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>
  </nav>
</template>
