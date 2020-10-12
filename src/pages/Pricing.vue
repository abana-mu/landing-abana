<template>
  <Layout class="one-section-tight-layout">
    <div class="mobile-gutter">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
    </div>
    <div class="mt-3">
      <b-tabs align="center" content-class="pb-5 back-grey">
        <!--------- BUYERS --------->
        <b-tab title="Buyers" active>
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              class="periods"
              v-model="selected"
              :options="periods"
              name="radio-buyers"
            ></b-form-radio-group>
          </div>
          <!-- CARDS -->
          <b-card-group deck class="mt-5 mb-5 card-container mx-auto">
            <template v-for="card in Plans.buyer.subs">
              <b-card
                :title="card.name"
                class="card-top"
                :class="card.name"
                :key="card.name"
              >
                <b-card-text class="desc">{{ card.desc }}</b-card-text>
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
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <b-button
                  v-b-toggle="'accordion-' + card.name"
                  variant="text"
                  class="see-all d-block d-md-none"
                  >See All Features
                  <b-icon icon="chevron-down" class="ml-2" scale=".6" />
                </b-button>
                <b-collapse :id="'accordion-' + card.name" class="mt-2">
                  <TableMob :data="Plans.buyer" :type="card.name" />
                </b-collapse>
              </b-card>
            </template>
          </b-card-group>

          <!-- TABLE -->
          <div class="pricing-container mt-5">
            <h4 class="allfeatures">All Features</h4>

            <div class="sub-feature">
              <div class="sub-feature-title"></div>
              <template v-for="subs in Plans.buyer.subs">
                <div class="sub-plans-options col" :key="subs">
                  <h5 class="plan-category-title border-0">{{ subs.name }}</h5>
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
            <Table :data="Plans.buyer" />
          </div>
        </b-tab>
        <!--------- SUPPLIERS --------->
        <b-tab title="Suppliers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              class="periods"
              v-model="selected"
              :options="periods"
              name="radio-suppliers"
            ></b-form-radio-group>
          </div>
          <!-- CARDS -->
          <b-card-group deck class="mt-5 mb-5 card-container mx-auto">
            <template v-for="card in Plans.supplier.subs">
              <b-card
                :title="card.name"
                class="card-top"
                :class="card.name"
                :key="card.name"
              >
                <b-card-text class="desc">{{ card.desc }}</b-card-text>
                <h4 class="pricetag" v-if="selected === 'price3'">
                  {{ card.price3 }}
                </h4>
                <h4 class="pricetag" v-else-if="selected === 'price6'">
                  {{ card.price6 }}
                </h4>
                <h4 class="pricetag" v-else>{{ card.price12 }}</h4>
                <ul class="features">
                  <span v-if="card.name === 'Growth'" class="mb-1"
                    >All features in Basic and...</span
                  >
                  <span v-else-if="card.name === 'Pro'" class="mb-1"
                    >All features in Growth and...</span
                  >
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <b-button
                  v-b-toggle="'accordion-' + card.name"
                  variant="text"
                  class="see-all d-block d-md-none"
                  >See All Features
                  <b-icon icon="chevron-down" class="ml-2" scale=".6" />
                </b-button>
                <b-collapse :id="'accordion-' + card.name" class="mt-2">
                  <TableMob :data="Plans.supplier" :type="card.name" />
                </b-collapse>
              </b-card>
            </template>
          </b-card-group>
          <!-- SUPPORT -->
          <b-card class="back-white border-0 mt-3 mb-5 support-creators">
            <b-card-title>We support independent freelancers</b-card-title>
            <b-card-text>
              If you have skills relevant to the Textile & Apparel eco-system (design, technical, advisory, etc.) become part of the ABANA network.
            </b-card-text>
            <b-button href="mailto:arif@abana.mu" variant="outline-primary"
              >Get in touch with us</b-button
            >
          </b-card>
          <!-- TABLE -->
          <div class="pricing-container mt-5">
            <div class="sub-feature">
              <div class="sub-feature-title"></div>
              <template v-for="subs in Plans.supplier.subs">
                <div class="sub-plans-options col" :key="subs">
                  <h5 class="plan-category-title border-0">{{ subs.name }}</h5>
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
            <Table :data="Plans.supplier" />
          </div>
        </b-tab>
        <!--------- SERVICE PROVIDERS --------->
        <b-tab title="Service Providers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              class="periods"
              v-model="selected"
              :options="periods"
              name="radio-service"
            ></b-form-radio-group>
          </div>
          <!-- CARDS -->
          <b-card-group deck class="mt-5 mb-5 card-container mx-auto">
            <template v-for="card in Plans.service.subs">
              <b-card
                :title="card.name"
                class="card-top"
                :class="card.name"
                :key="card.name"
              >
                <b-card-text class="desc">{{ card.desc }}</b-card-text>
                <h4 class="pricetag" v-if="selected === 'price3'">
                  {{ card.price3 }}
                </h4>
                <h4 class="pricetag" v-else-if="selected === 'price6'">
                  {{ card.price6 }}
                </h4>
                <h4 class="pricetag" v-else>{{ card.price12 }}</h4>
                <ul class="features">
                  <span v-if="card.name === 'Growth'" class="mb-1"
                    >All features in Basic and...</span
                  >
                  <span v-else-if="card.name === 'Pro'" class="mb-1"
                    >All features in Growth and...</span
                  >
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
                <b-button
                  v-b-toggle="'accordion-' + card.name"
                  variant="text"
                  class="see-all d-block d-md-none"
                  >See All Features
                  <b-icon icon="chevron-down" class="ml-2" scale=".6" />
                </b-button>
                <b-collapse :id="'accordion-' + card.name" class="mt-2">
                  <TableMob :data="Plans.supplier" :type="card.name" />
                </b-collapse>
              </b-card>
            </template>
          </b-card-group>

          <!-- SUPPORT -->
          <b-card class="back-white border-0 mt-3 mb-5 support-creators">
            <b-card-title>We support independent freelancers</b-card-title>
            <b-card-text>
              If you have skills relevant to the Textile & Apparel eco-system (design, technical, advisory, etc.) become part of the ABANA network.
            </b-card-text>
            <b-button href="mailto:arif@abana.mu" variant="outline-primary"
              >Get in touch with us</b-button
            >
          </b-card>

          <!-- Table -->
          <div class="pricing-container mt-5">
            <div class="sub-feature">
              <div class="sub-feature-title"></div>
              <template v-for="subs in Plans.service.subs">
                <div class="sub-plans-options col" :key="subs">
                  <h5 class="plan-category-title border-0">{{ subs.name }}</h5>
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
            <Table :data="Plans.service" />
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>

<script>
import Data from "~/_settings/pricing.json";
import Plans from "~/_settings/plans.json";
import Table from "~/components/PlanTable";
import TableMob from "~/components/PlanTableMob";
import {
  BIcon,
  BIconCheckCircle,
  BIconChevronDown,
  BIconChevronUp,
} from "bootstrap-vue";
import { BCollapse } from "bootstrap-vue";

export default {
  components: {
    BCollapse,
    BIcon,
    BIconCheckCircle,
    BIconChevronDown,
    BIconChevronUp,
    Table,
    TableMob,
  },
  metaInfo: {
    title: "Pricing",
  },
  data() {
    return {
      visible: false,
      Data,
      Plans,
      selected: "price12",
      periods: [
        { text: "12 months", value: "price12" },
        { text: "6 months", value: "price6" },
        { text: "3 months", value: "price3" },
      ],
    };
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

.nav-tabs {
  background-color: $blue-grey;
  border: none;
  padding: 15px 0 1px 0;
  @media (min-width: $break-s) {
    padding: 20px 0 10px 0;
  }
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
  color: $subtitle-light;
}

.nav-tabs .nav-link {
  /*border: none;
  border-radius: 0;
  border-bottom: 1px solid #dee2e63d;*/

  border: solid 1px rgba(255, 218, 216, 0.164);
  border-radius: 10px;
  margin: 5px;

  text-transform: uppercase;
  color: $subtitle-light;
  padding: 0.5rem 0.75rem;

  @media (min-width: $break-collapse) {
    padding: 0.5rem 1rem;
    margin: 0 10px;
  }

  &:hover {
    border: solid 1px rgba(255, 97, 88, 0.5);
    background-color: rgba(255, 97, 88, 0.05);
  }

  &.active {
    border: solid 1px rgba(255, 97, 88, 0.7);
    background-color: rgba(255, 97, 88, 0.2);
    color: white;
  }
}

.nav-tabs .nav-item {
  text-align: center;

  @media (min-width: $break-s) {
    min-width: 150px;
  }
  .nav-link:focus {
    outline: none;
  }
}

.tabs > :first-child {
  background-color: white;
  z-index: 10;
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
    content: "";
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
    align-items: center;
    color: $subtitle-dark;
    font-size: 0.85rem;
  }
}

.pricetag {
  font-size: 2rem;
}

.card.Member {
  &:before {
    background-color: #dbdbdb;
  }
}
.card.Basic {
  &:before {
    background-color: #ffc552;
  }
}
.card.Growth {
  &:before {
    background-color: #fd5d60;
  }
}
.card.Pro {
  &:before {
    background-color: #607aff;
  }
}

.see-all {
  padding: 0;
}

.pricing-container {
  display: none;
  border: 1px solid #d7d7f58f;
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
