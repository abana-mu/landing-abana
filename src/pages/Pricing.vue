<template>
  <Layout class="one-section-tight-layout">
    <div class="mobile-gutter">
      <h1 class="text-center">{{ Data.header.title }}</h1>
      <p class="text-center">
        {{ Data.header.subtext }}
      </p>
    </div>
    <div class="my-3">
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
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </b-card>
            </template>
          </b-card-group>
          <!-- TABLE -->
          <div class="pricing-container mt-5">
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
            <Table :data="Plans.buyer" class="mt-4" />
          </div>
        </b-tab>
        <!--------- SUPPLIERS --------->
        <b-tab title="Suppliers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
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
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </b-card>
            </template>
          </b-card-group>
          <!-- SUPPORT -->
          <b-card class="back-white border-0 mt-3 mb-5  support-creators">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text>
              If you are a designer, QA or special service provider, become part
              of the ABANA network.
            </b-card-text>
            <b-button href="#" variant="outline-primary"
              >More Information Here</b-button
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
            <Table :data="Plans.supplier" class="mt-4" />
          </div>
        </b-tab>
        <!--------- SERVICE PROVIDERS --------->
        <b-tab title="Service Providers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
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
                  <li v-for="feature in card.features" :key="feature">
                    <b-icon icon="check-circle" class="float-left mr-2" />
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </b-card>
            </template>
          </b-card-group>

          <!-- SUPPORT -->
          <b-card class="back-white border-0 mt-3 mb-5 support-creators">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text>
              If you are a designer, QA or special service provider, become part
              of the ABANA network.
            </b-card-text>
            <b-button href="#" variant="outline-primary"
              >More Information Here</b-button
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
            <Table :data="Plans.service" class="mt-4" />
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/pricing.json';
import Plans from '~/_settings/plans.json';
import Table from '~/components/PlanTable';

export default {
  components: {
    Table,
  },
  metaInfo: {
    title: 'Pricing',
  },
  data() {
    return {
      Data,
      Plans,
      selected: 'price12',
      periods: [
        { text: '12 months', value: 'price12' },
        { text: '6 months', value: 'price6' },
        { text: '3 months', value: 'price3' },
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
  color: $text-light-on-dark;
}

.nav-tabs .nav-link {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #dee2e63d;
  text-transform: uppercase;
  color: $text-light-on-dark;
  padding: 0.5rem 0.75rem;

  @media (min-width: 400px) {
    padding: 0.5rem 1rem;
  }

  &.active {
    font-weight: 600;
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

  a.active {
    @media (max-width: $break-s) {
      border-color: $text-light-on-dark;
      border-radius: 0rem;
    }
  }
}

.tabs > :first-child {
  //

  padding-top: 10px;
  background-color: white;
  z-index: 10;
  /*
  @media (min-width: 370px) {
    position: sticky;
    top: 33px;
  }

  @media (min-width: $break-m) {
    top: 20px;
    padding-top: 20px;
  }

  @media (min-width: $break-l) {
    top: 30px;
    padding-top: 20px;
  }
  */
}

.billed {
  font-size: 14px;
  color: $text-light-on-dark;
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
    top: 66px;
  }

  p {
    font-size: 14px;
    color: $text-light-on-dark;
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
}

.features {
  margin-top: 1rem;
  padding-left: 0;
  li {
    display: flex;
    align-items: center;
    color: $text-light-on-light;
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

.pricing-container {
  display: none;

  @media (min-width: $break-m) {
    display: block;
  }
}

.pricing-container,
.support-creators {
  width: 85%;
  margin: 0 auto;

  @media (min-width: $break-xl) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: $break-xxl) {
    width: 55%;
    margin: 0 auto;
  }
}

.plan-category-title {
  padding-bottom: 4px;
  margin-bottom: 8px;
  color: $text-light-on-light;
  border-bottom: 1px solid $text-light-on-dark;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
}

//sub title
.sub-feature-title {
  width: 30%;
  margin: 0;
}

//sub Row
.sub-feature {
  display: flex;
  position: sticky;
  top: 126px;
  padding: 5px 20px;
  background-color: $grey-light;
  border-bottom: 2px solid $text-light-on-dark;
  z-index: 10;
  @media (min-width: $break-s) {
    top: 100px;
  }
  @media (min-width: $break-l) {
    top: 110px;
  }
}

.sub-plans-options {
  text-align: center;
  margin: 0;
}
</style>
