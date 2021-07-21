<template>
  <div class="mb-4">
    <div class="inline-flex items-center font-medium group text-body cursor-pointer hover:underline mb-4" @click="toggle()">
      Learn More
      <svg class="h-5 w-5 ml-2 group-hover:rotate-90 transition-all transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </div>
    <transition enter-class="opacity-0 scale-y-75" enter-active-class="transition duration-300" leave-active-class="transition duration-100" leave-to-class="opacity-0 scale-y-75">
      <vue-simple-markdown v-show="isActive" :source="source" class="mb-4 text-body"></vue-simple-markdown>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LearnMore',
  props: { source: String },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
