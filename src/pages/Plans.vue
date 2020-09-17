<template>
  <OneSectionTight>
    <h1 data-aos="fade-down" class="text-center">{{ Data.header.title }}</h1>
    <p data-aos="fade-down" data-aos-delay="100" class="text-center">
      {{ Data.header.subtext }}
    </p>
    <div class="my-3" data-aos="fade-up">
      <b-tabs align="center" content-class="pb-5 back-grey">
        <!-- BUYERS -->
        <b-tab title="Buyers" active>
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pr-5 pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              v-model="selected"
              :options="options"
              name="radio-buyers"
            ></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-5 mb-5  container mx-auto">
            <!-- CARD 1 -->
            <b-card title="Member" class="card-top box-shadow1 grey">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.buyer.price1.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.buyer.price1.semester }}
              </h4>
              <h4 class="pricetag" v-else>{{ prices.buyer.price1.annual }}</h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 2 -->
            <b-card title="Basic" class="card-top box-shadow1 plan-col1">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.buyer.price2.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.buyer.price2.semester }}
              </h4>
              <h4 class="pricetag" v-else>{{ prices.buyer.price2.annual }}</h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 3 -->
            <b-card title="Pro" class="card-top box-shadow1 plan-col2">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.buyer.price3.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.buyer.price3.semester }}
              </h4>
              <h4 class="pricetag" v-else>{{ prices.buyer.price3.annual }}</h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
          </b-card-group>
          <div class="text-center">
            <b-button href="#" variant="outline-dark">
              See all features
              <b-icon icon="arrow-down-short" />
            </b-button>
          </div>
        </b-tab>
        <!-- SUPPLIERS -->
        <b-tab title="Suppliers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pr-5 pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              v-model="selected"
              :options="options"
              name="radio-suppliers"
            ></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-5 mb-5  container mx-auto">
            <!-- CARD 1 -->
            <b-card title="Basic" class="card-top box-shadow1 plan-col1">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price1.month }}
              </h4>

              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price1.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price1.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 2 -->
            <b-card title="Team" class="card-top box-shadow1 plan-col2">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price2.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price2.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price2.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 3 -->
            <b-card title="Pro" class="card-top box-shadow1 plan-col3">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price3.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price3.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price3.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
          </b-card-group>
          <div class="text-center">
            <b-button href="#" variant="outline-dark">
              See all features
              <b-icon icon="arrow-down-short" />
            </b-button>
          </div>

          <b-card class="back-white border-0 my-5  container">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text
              >If you are a designer, QA or special service provider, become
              part of the ABANA network.</b-card-text
            >
            <b-button href="#" variant="outline-primary"
              >More Information Here</b-button
            >
          </b-card>
        </b-tab>
        <!-- SERVICE PROVIDERS -->
        <b-tab title="Service Providers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex back-blue">
            <p class="pr-5 pl-sm-5 pr-sm-4">Billed every:</p>
            <b-form-radio-group
              v-model="selected"
              :options="options"
              name="radio-service"
            ></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-5 mb-5 container mx-auto">
            <!-- CARD 1 -->
            <b-card title="Basic" class="card-top box-shadow1 plan-col1">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price1.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price1.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price1.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 2 -->
            <b-card title="Team" class="card-top box-shadow1 plan-col2">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price2.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price2.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price2.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
            <!-- CARD 3 -->
            <b-card title="Pro" class="card-top box-shadow1 plan-col3">
              <b-card-text class="desc"
                >This describes the member plan</b-card-text
              >
              <h4 class="pricetag" v-if="selected === 'month'">
                {{ prices.supplier.price3.month }}
              </h4>
              <h4 class="pricetag" v-else-if="selected === 'semester'">
                {{ prices.supplier.price3.semester }}
              </h4>
              <h4 class="pricetag" v-else>
                {{ prices.supplier.price3.annual }}
              </h4>
              <ul class="features">
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature 1</span>
                </li>
                <li>
                  <b-icon icon="check-circle" class="float-left mr-2" />
                  <span>Feature2</span>
                </li>
              </ul>
            </b-card>
          </b-card-group>
          <div class="text-center ">
            <b-button href="#" variant="outline-dark">
              See all features
              <b-icon icon="arrow-down-short" />
            </b-button>
          </div>

          <b-card class="back-white border-0 my-5 container">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text
              >If you are a designer, QA or special service provider, become
              part of the ABANA network.</b-card-text
            >
            <b-button href="#" variant="outline-primary"
              >More Information Here</b-button
            >
          </b-card>
        </b-tab>
      </b-tabs>
    </div>
  </OneSectionTight>
</template>

<script>
import Data from '~/_settings/plans.json';

export default {
  metaInfo: {
    title: 'Plans',
  },
  data() {
    return {
      Data,
      selected: 'annual',
      options: [
        { text: '12 months', value: 'annual' },
        { text: '6 months', value: 'semester' },
        { text: '3 months', value: 'month' },
      ],
      prices: {
        buyer: {
          price1: {
            month: '$0',
            semester: '$0',
            annual: '$0',
          },
          price2: {
            month: '$119/mo',
            semester: '$109/mo',
            annual: '$99/mo',
          },
          price3: {
            month: '$239/mo',
            semester: '$219/mo',
            annual: '$199/mo',
          },
        },
        supplier: {
          price1: {
            month: '$119/mo',
            semester: '$109/mo',
            annual: '$99/mo',
          },
          price2: {
            month: '$239/mo',
            semester: '$219/mo',
            annual: '$199/mo',
          },
          price3: {
            month: '$349/mo',
            semester: '$329/mo',
            annual: '$299/mo',
          },
        },
      },
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
  padding: 20px 0 10px 0;
  @media (max-width: $break-s) {
    padding-bottom: 0.5rem;
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
  position: sticky;
  padding-top: 10px;
  background-color: white;
  z-index: 10;
  top: 62px;

  @media (min-width: $break-m) {
    top: 52px;
    padding-top: 20px;
  }

  @media (min-width: $break-l) {
    top: 46px;
    padding-top: 20px;
  }
}

.billed {
  position: sticky;
  font-size: 14px;
  top: 178px;
  color: $text-light-on-dark;
  z-index: 10;
  padding-top: 5px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dee2e6;

  @media (min-width: 394px) {
    top: 139px;
  }
  @media (min-width: $break-m) {
    top: 141px;
  }

  @media (min-width: $break-l) {
    top: 135px;
  }
  p {
    font-size: 14px;
    color: $text-light-on-dark;
    margin-bottom: 0;
  }
}

.billed > div {
  @media (max-width: $break-s) {
    display: flex;
    flex-direction: column;
    & > div {
      margin-bottom: 5px;
    }
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
  @media (max-width: $break-m) {
    flex-direction: column;
    .card {
      margin-bottom: 1rem;
    }
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

.grey {
  &:before {
    background-color: #dbdbdb;
  }
}
.plan-col1 {
  &:before {
    background-color: #ffc552;
  }
}
.plan-col2 {
  &:before {
    background-color: #fd5d60;
  }
}
.plan-col3 {
  &:before {
    background-color: #607aff;
  }
}
</style>
