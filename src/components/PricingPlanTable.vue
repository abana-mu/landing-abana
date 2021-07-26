<!-- HTML -->
<template>
  <div>
    <div v-for="categories in data.categories" class="py-4 " :key="categories.title">
      <div class="p-3 border text-sm font-medium uppercase text-subtitle tracking-wider bg-gray-50">
        {{ categories.title }}
      </div>
      <div
        v-for="(features, index) in categories.features"
        :key="index"
        class="flex py-0 pl-5 items-center border-b border-l border-r hover:bg-green-50"
      >
        <div class="text-base w-3/5 inline-flex items-center">
          {{ features.title }}
          <div class="group relative">
            <!-- Question Circle fill -->
            <svg
              v-if="features.tooltip"
              :id="features.title"
              class="h-4 w-4 ml-2 opacity-75 cursor-pointer text-caption"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
              />
            </svg>
            <div
              class=" bg-secondary-400 rounded text-white w-max max-w-xs text-sm p-2 top-1/2 transform -translate-y-1/2 left-10 absolute hidden group-hover:block"
            >
              {{ features.tooltip }}
            </div>
          </div>
        </div>
        <div class="flex w-2/5 flex-row flex-1">
          <div
            v-for="(plans, index) in features.plans"
            :key="index"
            :class="{ 'bg-gray-50': !plans }"
            class="h-12 min-h-full flex justify-center items-center border-l p-0 flex-1"
          >
            <!-- Check circle -->
            <svg
              v-if="plans === true"
              class="h-5 w-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
              />
            </svg>

            <!-- X circle -->
            <svg
              v-else-if="plans === false"
              class="h-5 w-5 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>

            <div v-else class="text-green-500">{{ plans }}</div>
          </div>
        </div>
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
