<script lang="ts" setup></script>

<template>
  <div class="h-screen flex dark:bg-gray-800 dark:text-gray-200">
    <div>
      <SideBar />
    </div>

    <main class="overflow-y-auto w-full">
      <div class="">
        <navbar />
      </div>
      <div class="mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
