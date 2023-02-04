<script lang="ts" setup>
const customer = ref();
const query = gql`
  query MyQuery {
    customer {
      ip_address
      last_name
      id
      first_name
    }
  }
`;
const { result: apolloData, error, loading } = await useQuery(query);
watchEffect(() => {
  customer.value = apolloData.value;
});

// console.log(error)

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="dark:bg-gray-800 dark:text-gray-200">
    <div class="">
      <!-- <button
        type="button"
        class="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white"
        disabled
      >
        <ButtonLoading />
      </button> -->
      <div class="">
        {{ $t("hello") }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
