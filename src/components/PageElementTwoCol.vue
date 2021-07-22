<!-- HTML -->
<template>
  <div class>
    <div
      v-for="(row, index) in data"
      :key="index"
      :id="index"
      class="two-col"
      v-bind:class="{ grey: isGrey }"
    >
      <div
        class="contain grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-4 lg:gap-10 py-16 lg:py-24"
        :class="{ 'items-center': !row.learnmore }"
      >
        <div class="mb-2 md:mb-0 lg:col-span-5 two-col-text">
          <div class="p-0">
            <div class="mb-5">
              <h3 class="text-3xl lg:text-4xl font-medium text-title">{{ row.title }}</h3>
              <p class="italic text-subtitle" v-if="row.subtext">{{ row.subtext }}</p>
            </div>
            <vue-simple-markdown :source="row.content" class="mb-8 text-lg text-body"></vue-simple-markdown>
            <div v-if="row.learnmore">
              <LearnMore :source="row.learnmore" />
            </div>
            <div v-if="row.url">
              <g-link
                class="group inline-flex items-center text-primary hover:underline"
                v-if="row.url.charAt(0) == '/'"
                :to="row.url"
              >
                {{ row.linkText }}
                <!-- Arrow right-short -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </g-link>
              <a
                v-else
                class="group inline-flex items-center text-primary hover:underline"
                :href="row.url"
              >
                {{ row.linkText }}
                <!-- Arrow right-short -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="h-5 w-5 ml-2 transform transition group-hover:translate-x-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mx-0 lg:col-span-7">
          <g-image :src="row.image" quality="100" blur="40" width="750" class="rounded-md w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
import LearnMore from "~/components/LearnMore";

export default {
  components: { LearnMore },
  props: {
    data: Array,
    isGrey: Boolean
  }
};
</script>

<!-- STYLING -->
<style lang="scss" scoped>
.two-col:nth-child(2n) {
  &.grey {
    background-color: #f9fafb;
  }
  @media (min-width: $break-md) {
    .two-col-text {
      order: 2;
    }
  }
}
</style>
