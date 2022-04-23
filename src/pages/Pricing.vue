<template>
  <Layout class="one-section-tight-layout">
    <div class="my-12 text-center max-w-2xl mx-auto contain">
      <h1 class="font-medium text-title text-5xl mb-4">{{ Data.header.title }}</h1>
      <p class="text-lg text-subtitle">{{ Data.header.subtext }}</p>
    </div>
    <div class="w-full">
      <div id="tabs" class="mx-auto">
        <!-- Blue Banner -->
        <div class="bg-secondary-400 flex flex-col items-center justify-center py-5">
          <div class="flex flex-row justify-center mb-6">
            <a
              class="btn-price text-2xl px-6"
              v-on:click="activetab = index"
              v-bind:class="[activetab === index ? 'active' : '']"
              v-for="(tabs, index) in Plans"
              :key="tabs.index"
            >{{ tabs.title }}</a>
          </div>
          <div class="space-y-4 text-sm sm:text-base">
            <div class="flex flex-row space-x-4 text-bodyOnDark">
              <span class="font-medium text-white">Contract:</span>
              <span :class="contract12 ? 'text-bodyOnDark' : 'text-primary-200'">6 Months</span>
              <label
                class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
                :class="contract12 ? 'bg-primary-300' : 'bg-secondary-300'"
              >
                <input type="checkbox" class="hidden" v-model="contract12" />
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span
                  class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  :class="contract12 ? 'translate-x-5' : 'translate-x-0'"
                ></span>
              </label>
              <span :class="!contract12 ? 'text-bodyOnDark' : 'text-primary-200'">12 Months</span>
            </div>

            <div class="flex flex-row space-x-4 text-bodyOnDark">
              <span class="font-medium text-white">Billing:</span>
              <span :class="payFull ? 'text-bodyOnDark' : 'text-primary-200'">Pay monthly</span>
              <label
                class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
                :class="payFull ? 'bg-primary-300' : 'bg-secondary-300'"
              >
                <input type="checkbox" class="hidden" v-model="payFull" />
                <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                <span
                  class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  :class="payFull ? 'translate-x-5' : 'translate-x-0'"
                ></span>
              </label>
              <span :class="!payFull ? 'text-bodyOnDark' : 'text-primary-200'">Pay in full</span>
            </div>
          </div>
        </div>

        <!-- Cards Container -->
        <div class="bg-gray-100">
          <div class="max-w-screen-xl mx-auto xs:px-4 py-10">
            <!-- Cards Tab -->
            <div v-for="(tabs, index) in Plans" :key="tabs.index">
              <transition
                enter-class="opacity-0"
                enter-active-class="transition duration-300"
                leave-active-class="transition duration-200"
                leave-to-class="opacity-0"
              >
                <div v-if="activetab === index" class="tabcontent">
                  <div
                    class="grid grid-cols-1 gap-4"
                    :class="index === 'seller' ? 'md:grid-cols-3' : 'md:grid-cols-2'"
                  >
                    <!-- Cards -->
                    <div
                      class="relative flex flex-col items-start card-top grid-span-1 bg-white xs:rounded-md border-t border-b xs:border p-4 xs:p-5"
                      :class="card.name"
                      v-for="card in tabs.subs"
                      :key="card.index"
                    >
                      <div class="capitalize font-medium text-xl mb-2 mt-1">{{ card.name }}</div>
                      <div class="text-sm mb-4 h-10">{{ card.desc }}</div>
                      <div class="text-4xl font-medium mb-4">
                        <div v-if="card.price == 'Free'">
                          <div>Free</div>
                        </div>
                        <!--REMOVE AFTER FAIR -->
                        <div
                          v-else-if="index === 'seller' && card.name === 'basic' && (currentPrice === '66' || currentPrice === '61')"
                        >
                          <div>
                            <span>Free</span>
                            <span class="text-base">(usually USD${{ card.price[currentPrice] }}/mo)</span>
                          </div>
                        </div>
                        <!---->
                        <div v-else>
                          <span class="text-subtitle font-thin text-xl">US</span>
                          ${{ card.price[currentPrice] }}/mo
                        </div>
                      </div>
                      <div v-if="card.price === 'Free'" class="p-2 text-xl">🎉</div>
                      <!--REMOVE AFTER FAIR -->
                      <div
                        v-else-if="index === 'seller' && card.name === 'basic' && (currentPrice === '66' || currentPrice === '61')"
                      >
                        <div class="p-2 bg-primary-300 font-medium text-white">UNTIL DEC 2022</div>
                      </div>
                      <!---->
                      <div
                        v-else
                        class="p-2 border border-primary-200 text-primary"
                      >Save {{ Math.round((1 - card.price[currentPrice] / card.price[61]) * 100) }}% per month</div>
                      <ul class="mt-4 pl-0 text-subtitle text-sm">
                        <span
                          v-if="card.name === 'pro'"
                          class="flex mb-1"
                        >All features in Basic and...</span>
                        <li
                          v-for="feature in card.features"
                          :key="feature"
                          class="flex items-center"
                        >
                          <svg
                            class="h-3 w-3 mr-2 flex-shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                            />
                          </svg>
                          <span>{{ feature }}</span>
                        </li>
                      </ul>
                      <!-- MObile Table -->
                      <a
                        v-on:click="toggle('accordion-' + card.name)"
                        class="mt-4 p-0 flex items-center md:hidden"
                      >
                        See All Features
                        <!-- Chevron-Down -->
                        <svg
                          class="h-3.5 w-3.5 ml-2 flex"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </a>
                      <div :id="'accordion-' + card.name" class="mt-2 hidden w-full">
                        <TableMob :data="tabs" :type="card.name" />
                      </div>
                    </div>
                  </div>
                  <!-- Desktop Table -->
                  <div class="hidden md:block border p-4 rounded-md bg-white mt-5">
                    <h4 class="mb-4 text-xl text-center">All Features</h4>
                    <div class="flex sticky pl-5 bg-gray-50 border top-24 rounded z-1">
                      <div class="w-3/5 m-0"></div>
                      <div class="w-2/2 flex flex-row flex-1">
                        <div
                          class="flex-1 text-center m-0 py-4 border-l"
                          v-for="subs in tabs.subs"
                          :key="subs.name"
                        >
                          <div
                            class="text-subtitle uppercase text-xs font-medium tracking-wider border-0 text-center"
                          >{{ subs.name }}</div>
                          <div class="mb-0 text-xl font-medium">
                            <div v-if="subs.price === 'Free'">Free</div>
                            <div v-else-if="subs.name === 'basic'">
                              <div>
                                <span>Free</span>
                                <span
                                  class="text-sm"
                                >(usually USD${{ subs.price[currentPrice] }}/mo)</span>
                              </div>
                            </div>
                            <div v-else>${{ subs.price[currentPrice] }}/mo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Table :data="tabs" />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/pricing.json";
import Plans from "~/_settings/plans2.json";
import Table from "~/components/PricingPlanTable";
import TableMob from "~/components/PricingPlanTableMob";

export default {
  components: {
    Table,
    TableMob
  },
  metaInfo: {
    title: "Pricing",
    meta: [
      {
        name: "description",
        content:
          "Choose the plan that is right for you and your business. Join as a free buyer to access our ecommerce solutions or subscribe to access a world of features to help your business."
      }
    ]
  },
  data() {
    return {
      activetab: "buyer",
      Data,
      Plans,

      contract12: false,
      payFull: false,

      periods: [
        { text: "12 months", value: "price12" },
        { text: "6 months", value: "price6" }
      ]
    };
  },
  methods: {
    toggle: function(target) {
      document.getElementById(target).classList.toggle("hidden");
    }
  },
  computed: {
    currentPrice: function() {
      if (this.contract12 && this.payFull) {
        return "1212";
      } else if (this.contract12 && !this.payFull) {
        return "121";
      } else if (!this.contract12 && this.payFull) {
        return "66";
      } else if (!this.contract12 && !this.payFull) {
        return "61";
      }
    }
  }
};
</script>

<style lang="scss">
// Style Radio Buttons
.custom-control-label::after {
  display: none !important;
}

.custom-control-input:checked ~ .custom-control-label {
  color: $light-red;
}
.custom-control-label::before {
  border: none !important;
}

.custom-control-inline {
  @media (max-width: $break-sm) {
    margin-right: 0.5rem;
  }
  margin-right: 2rem;
}

.card-top {
  &:before {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    content: "";
    height: 10px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.card-top.member,
.card-top.freelancer {
  &:before {
    background-color: #dbdbdb;
  }
}
.card-top.freelancer {
  &:before {
    background-color: #ffc552;
  }
}
.card-top.pro {
  &:before {
    background-color: #fd5d60;
  }
}
.card-top.basic {
  &:before {
    background-color: #607aff;
  }
}

.support-creators {
  width: 95%;
  margin: 0 auto;

  @media (min-width: $break-xl) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: $break-2xl) {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
