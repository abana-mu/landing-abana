<!-- HTML -->
<template>
  <div class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeModal"></div>
      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <!--
          Modal panel, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
      <div
        class="inline-block w-full max-w-sm align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden border shadow-3xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      >
        <div>
          <div class="flex-shrink-0 flex absolute top-4 right-4" @click="closeModal">
            <button class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400">
              <span class="sr-only">Close</span>
              <!-- Heroicon name: solid/x -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100">
            <!-- Heroicon name: outline/check -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-300" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              {{ title }}
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                {{ description }}
              </p>
            </div>
          </div>
        </div>

        <form @submit="onSubmit" method="POST" action="https://abana78924.activehosted.com/proc.php" id="_form_1_" novalidate>
          <input type="hidden" name="u" value="1" />
          <input type="hidden" name="f" value="1" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <p class="my-8" v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors" :key='error'>{{ error }}</li>
            </ul>
          </p>
          <label for="email" class="block text-sm font-medium text-gray-700">Full Name</label>
          <div class="mt-1">
            <input
              type="text"
              id="fullname"
              v-model="fullname"
              name="fullname"
              class="mb-5 shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Type your name"
            />
          </div>

          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <div class="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              placeholder="Type your email"
              required
              class="mb-5 shadow-sm focus:ring-primary-300 focus:border-primary-300 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-300 text-base font-medium text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 sm:text-sm"
          >
            {{ cta }}
          </button>
        </form>
        <div class="mt-2">
          <p class="text-xs text-gray-500">
            {{ warning }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ['close', 'title', 'description', 'cta', 'warning'],
  data() {
    return {
      errors: [],
      email: '',
      fullname: '',
    };
  },
  methods: {
    closeModal() {
      this.close();
    },
    onSubmit(e) {
      this.errors =[];
      if (!this.fullname) {
        this.errors.push('Name required.');
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.errors.length) {
        return true;
      }
      e.preventDefault();
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
