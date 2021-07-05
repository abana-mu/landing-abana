<template>
  <Layout class="one-section-tight-layout">
    <div class="mobile-gutter">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>
    <div class="w-full">
      <div id="tabs" class="mx-auto">
        <div class="bg-secondary-400 flex flex-row justify-center py-4">
          <a
            class="btn-price"
            v-on:click="activetab = index"
            v-bind:class="[activetab === index ? 'active' : '']"
            v-for="(tabs, index) in Plans"
            :key="tabs.index"
          >
            {{ tabs.title }}
          </a>
        </div>

        <div class="max-w-lg mx-auto">
          <div v-for="(tabs, index) in Plans" :key="tabs.index">
            <div v-if="activetab === index" class="tabcontent">
              <div
                class="grid grid-cols-1"
                :class="
                  index === 'seller' ? 'md:grid-cols-3' : 'md:grid-cols-2'
                "
              >
                <div
                  class="grid-span-1"
                  v-for="card in tabs.subs"
                  :key="card.index"
                >
                  <div>{{ card.name }}</div>
                  <div>{{ card.desc }}</div>
                  <h4 class="pricetag" v-if="selected === 'price6'">
                    {{ card.price61 }}
                  </h4>
                  <h4 class="pricetag" v-else>{{ card.price121 }}</h4>
                  <ul class="features">
                    <span v-if="card.name === 'Basic'" class="mb-1"
                      >All features in Member and...</span
                    >
                    <span v-else-if="card.name === 'Pro'" class="mb-1"
                      >All features in Basic and...</span
                    >
                    <li
                      v-for="feature in card.features"
                      :key="feature"
                      class="flex flex-row items-center"
                    >
                      <svg
                        class="h-3.5 w-3.5 mr-2 flex-shrink-0"
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
                  <a
                    v-on:click="toggle('accordion-' + card.name)"
                    class="see-all flex items-center d-md-none"
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
                  <div :id="'accordion-' + card.name" class="mt-2 hidden">
                    <TableMob :data="tabs" :type="card.name" />
                  </div>
                </div>
              </div>
              <div class="pricing-container mt-5">
                <h4 class="allfeatures">All Features</h4>
                <div class="sub-feature">
                  <div class="sub-feature-title"></div>
                  <template v-for="subs in tabs.subs">
                    <div class="sub-plans-options col" :key="subs.name">
                      <h5 class="plan-category-title border-0">
                        {{ subs.name }}
                      </h5>
                      <h4 class="mb-0" v-if="selected === 'price3'">
                        {{ subs.price3 }}
                      </h4>
                      <h4 class="mb-0" v-else-if="selected === 'price6'">
                        {{ subs.price6 }}
                      </h4>
                      <h4 class="mb-0" v-else>{{ subs.price12 }}</h4>
                    </div>
                  </template>
                </div>
                <Table :data="tabs" />
              </div>
            </div>
          </div>

          <!--
          <div v-if="activetab === 'buyer'" class="tabcontent">
            <div class="grid grid-cols-3">
              <div
                class="grid-span-1"
                v-for="card in Plans.buyer.subs"
                :key="card.index"
              >
                <div>{{ card.name }}</div>
                <div>{{ card.desc }}</div>
                <h4 class="pricetag" v-if="selected === 'price3'">
                  {{ card.price3 }}
                </h4>
                <h4 class="pricetag" v-else-if="selected === 'price6'">
                  {{ card.price6 }}
                </h4>
                <h4 class="pricetag" v-else>{{ card.price12 }}</h4>
                <ul class="features">
                  <span v-if="card.name === 'Basic'" class="mb-1"
                    >All features in Member and...</span
                  >
                  <span v-else-if="card.name === 'Pro'" class="mb-1"
                    >All features in Basic and...</span
                  >
                  <li
                    v-for="feature in card.features"
                    :key="feature"
                    class="flex flex-row items-center"
                  >

                    <svg
                      class="h-3.5 w-3.5 mr-2"
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
              </div>
            </div>

            <table>
              <tr>
                <td class="legend">Area:</td>
                <td class="data">640,679 km<sup>2</sup></td>
                <td rowspan="5">
                  <img
                    class="map"
                    src="https://drive.google.com/thumbnail?id=1edVL631_KOzd5zXzwrDNbn7bZDxqcRUQ"
                  />
                </td>
              </tr>
              <tr>
                <td class="legend">Population:</td>
                <td class="data">67 million</td>
              </tr>
              <tr>
                <td class="legend">Capital:</td>
                <td class="data">Paris</td>
              </tr>
              <tr>
                <td class="legend">Language:</td>
                <td class="data">French</td>
              </tr>
              <tr>
                <td class="legend" valign="top">Flag:</td>
                <td class="data">
                  <img
                    class="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png"
                    width="80"
                  />
                </td>
              </tr>
            </table>
          </div>
          <div v-if="activetab === 'supplier'" class="tabcontent">
            <table>
              <tr>
                <td class="legend">Area:</td>
                <td class="data">505,990 km<sup>2</sup></td>
                <td rowspan="5">
                  <img
                    class="map"
                    src="https://drive.google.com/thumbnail?id=1AlVDaA3-wXNhqtXkfWoI3tD5cxZNfJu1"
                  />
                </td>
              </tr>
              <tr>
                <td class="legend">Population:</td>
                <td class="data">47 million</td>
              </tr>
              <tr>
                <td class="legend">Capital:</td>
                <td class="data">Madrid</td>
              </tr>
              <tr>
                <td class="legend">Language:</td>
                <td class="data">Spanish</td>
              </tr>
              <tr>
                <td class="legend" valign="top">Flag:</td>
                <td class="data">
                  <img
                    class="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png"
                    width="80"
                  />
                </td>
              </tr>
            </table>
          </div>
          <div v-if="activetab === 'service'" class="tabcontent">
            <table>
              <tr>
                <td class="legend">Area:</td>
                <td class="data">357,386 km<sup>2</sup></td>
                <td rowspan="5">
                  <img
                    class="map"
                    src="https://drive.google.com/thumbnail?id=1JQyW1aThQxnlk3ZmogomTzhDkQGKbdC1"
                  />
                </td>
              </tr>
              <tr>
                <td class="legend">Population:</td>
                <td class="data">83 million</td>
              </tr>
              <tr>
                <td class="legend">Capital:</td>
                <td class="data">Berlin</td>
              </tr>
              <tr>
                <td class="legend">Language:</td>
                <td class="data">German</td>
              </tr>
              <tr>
                <td class="legend" valign="top">Flag:</td>
                <td class="data">
                  <img
                    class="flag"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1000px-Flag_of_Germany.svg.png"
                    width="89"
                  />
                </td>
              </tr>
            </table>
          </div>
          -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/pricing.json';
import Plans from '~/_settings/plans2.json';
import Table from '~/components/PricingPlanTable';
import TableMob from '~/components/PricingPlanTableMob';

export default {
  components: {
    Table,
    TableMob,
  },
  metaInfo: {
    title: 'Pricing',
    meta: [
      {
        name: 'description',
        content:
          'Choose the plan that is right for you and your business. Join as a free buyer to access our ecommerce solutions or subscribe to access a world of features to help your business.',
      },
    ],
  },
  data() {
    return {
      visible: false,
      activetab: 'buyer',
      Data,
      Plans,
      selected: 'price12',
      periods: [
        { text: '12 months', value: 'price12' },
        { text: '6 months', value: 'price6' },
        //{ text: '3 months', value: 'price3' },
      ],
    };
  },
  methods: {
    toggle: function(target) {
      document.getElementById(target).classList.toggle('hidden');
    },
  },
};
</script>

<style lang="scss">
.duration {
  display: flex;
  flex-direction: row;
}

.custom-control-label {
  cursor: pointer;
}

.billed {
  font-size: 14px;
  color: $subtitle-light;
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 56px;

  @media (min-width: $break-s) {
    padding-top: 10px;
  }

  @media (max-width: $break-s) {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: $break-l) {
    top: 64px;
  }

  p {
    font-size: 14px;
    color: $subtitle-light;
    margin-bottom: 0;
  }
}

.periods {
  padding-top: 5px;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: $break-s) {
    padding-top: 0px;
  }
}

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
  @media (max-width: $break-s) {
    margin-right: 0.5rem;
  }
  margin-right: 2rem;
}

//CARDS

.card-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: $break-s) {
    max-width: 1140px;
  }
}

.card-top {
  &:before {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    content: '';
    height: 10px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}

.card-title {
  margin-top: 0.5rem;
}

.card-deck {
  flex-direction: column;
  .card {
    margin-bottom: 1rem;
  }
  @media (min-width: $break-m) {
    flex-direction: row;
  }
}

.card-deck .card {
  @media (min-width: $break-m) and (max-width: $break-l) {
    margin-right: 5px;
    margin-left: 5px;
  }
}

.desc {
  font-size: 0.9rem;
  line-height: 1.2em;
  min-height: 2.4em;
}

.features {
  margin-top: 1rem;
  padding-left: 0;
  span,
  li {
    display: flex;
    color: $subtitle-dark;
    font-size: 0.85rem;
  }
}

.pricetag {
  font-size: 2rem;
}

.card-top.Member,
.card-top.Freelancer {
  &:before {
    background-color: #dbdbdb;
  }
}
.card-top.Basic {
  &:before {
    background-color: #ffc552;
  }
}
.card-top.Growth {
  &:before {
    background-color: #fd5d60;
  }
}
.card-top.Pro {
  &:before {
    background-color: #607aff;
  }
}

.see-all {
  padding: 0;
}

.pricing-container {
  display: none;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem;
  border-radius: 4px;
  background-color: white;
  @media (min-width: $break-m) {
    display: block;
  }
}

.pricing-container,
.support-creators {
  width: 95%;
  margin: 0 auto;

  @media (min-width: $break-xl) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: $break-xxl) {
    width: 60%;
    margin: 0 auto;
  }
}

//sub title

.allfeatures {
  margin-bottom: 1rem;
  text-align: center;
}
.sub-feature-title {
  width: 40%;
  margin: 0;
}

//sub Row
.sub-feature {
  display: flex;
  position: sticky;
  padding: 0 20px;
  background-color: $grey-light;
  border: 1px solid #d7d7f58f;
  z-index: 10;
  top: 100px;

  @media (min-width: $break-l) {
    top: 108px;
  }
  .plan-category-title {
    color: $subtitle-dark;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
}

.sub-plans-options {
  text-align: center;
  margin: 0;
  padding: 1rem 0;
  border-left: 1px solid #d7d7f58f;
}
</style>
