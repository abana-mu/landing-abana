<!-- HTML -->
<template>
  <div>
    <div :class="{ 'text-center': center }" class="mx-auto max-w-2xl text-body">
      <h2 class="spaced text-4xl mb-2 font-medium text-title">{{ data.title }}</h2>
      <p class="text-subtitle text-lg mb-4">{{ data.subtext }}</p>
      <vue-simple-markdown v-if="data.content" :source="data.content" class="text-lg mt-4"></vue-simple-markdown>
    </div>
    <div v-if="data.image" class="mx-auto text-center max-w-5xl">
      <g-image :src="data.image" quality="100" blur="40" width="750" class="mt-12 rounded-md" />
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: {
    data: Object,
    image: Boolean,
    center: Boolean,
  },
};
</script>
