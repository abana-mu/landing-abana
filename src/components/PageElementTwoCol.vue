<!-- HTML -->
<template>
  <div class="mt-16 space-y-32">
    <div v-for="(row, index) in data" :key="index" :id="index" class="two-col grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
      <div class="mb-2 md:mb-0 two-col-text ">
        <div cols="11" lg="10" class="p-0">
          <div class="mb-5">
            <h3 class="text-3xl font-medium">{{ row.title }}</h3>
            <p class="italic text-subtitle" v-if="row.subtext">{{ row.subtext }}</p>
          </div>
          <vue-simple-markdown :source="row.content" class="mb-4 text-body"></vue-simple-markdown>
          <g-link class="group inline-flex items-center text-primary hover:underline" v-if="row.url" :to="row.url">
            {{ row.linkText }}
            <!-- Arrow right-short -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </g-link>
        </div>
      </div>
      <div class="mx-0">
        <g-image :src="row.image" quality="100" blur="40" width="750" class="rounded-md w-full" />
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<!-- STYLING -->
<style lang="scss" scoped>
@media (min-width: $break-lg) {
  .two-col:nth-child(2n) {
    .two-col-text {
      order: 2;
    }
  }
}
</style>
