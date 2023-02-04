<script lang="ts" setup>
import { onMounted } from "vue";
const route = useRoute();

const getRoutePathNow = (path: string) => {
  if (path === route.path) {
    return "bg-gray-100 dark:bg-gray-800";
  } else {
    return "";
  }
};

const sideMenu = [
  {
    name: "Dashboard",
    path: "/",
    icon: "system-uicons:archive",
  },

  {
    name: "Account",
    path: "/account",
    icon: "system-uicons:user-male",
  },
];

onMounted(() => {
  // getRoutePathNow();
});
</script>

<template>
  <!-- <div
    class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
  >
    <a href="#"> </a>

    <div class="relative mt-6">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>

      <input
        type="text"
        class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        placeholder="Search"
      />
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <a
          class="flex items-center px-4 py-2 mb-5 text-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-200"
          v-for="(menu, index) in sideMenu"
          :key="`menu${index}`"
          :href="menu.path"
        >
          <Icon :name="menu.icon" size="1.3rem" />

          <span class="mx-4 font-medium">{{ menu.name }}</span>
        </a>
      </nav>

      <a href="#" class="flex items-center px-4 -mx-2">
        <img
          class="object-cover mx-2 rounded-full h-9 w-9"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <span class="mx-2 font-medium text-gray-800 dark:text-gray-200"
          >John Doe</span
        >
      </a>
    </div>
  </div> -->

  <aside
    class="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"
  >
    <a href="#">
      <!-- <img
        class="w-auto h-7"
        src="https://merakiui.com/images/logo.svg"
        alt=""
      /> -->
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="flex-1 -mx-3 space-y-3">
        <div class="relative mx-3">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>

        <a
          class="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 d dark:hover:text-gray-200 hover:text-gray-700"
          v-for="(menu, index) in sideMenu"
          :class="getRoutePathNow(menu.path)"
          :key="`menu-${index}`"
          :href="menu.path"
        >
          <Icon :name="menu.icon" size="1.2rem" />

          <span class="mx-2 text-sm font-medium">{{ menu.name }}</span>
        </a>
      </nav>
    </div>
  </aside>
</template>
