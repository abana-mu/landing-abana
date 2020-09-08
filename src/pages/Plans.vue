<template>
  <OneSection>
    <h1 data-aos="fade-down" class="text-center">{{Data.header.title}}</h1>
    <p data-aos="fade-down" data-aos-delay="100" class="text-center">{{Data.header.subtext}}</p>
    <div class="my-5" data-aos="fade-up">
      <b-tabs align="center" content-class>
        <!-- BUYERS -->
        <b-tab title="Buyers" active>
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex">
            <p class="mr-1 mr-sm-4">Billed:</p>
            <b-form-radio-group v-model="selected" :options="options" name="radio-buyers"></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-3 mb-5">
            <!-- CARD 1 -->
            <b-card title="Member" class="card-top box-shadow1 grey">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price1.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price1.semester }}</h4>
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
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price2.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price2.semester }}</h4>
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
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price3.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price3.semester }}</h4>
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
          <div class="billed justify-content-center d-flex">
            <p class="mr-4">Billed:</p>
            <b-form-radio-group v-model="selected" :options="options" name="radio-suppliers"></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-3 mb-5">
            <!-- CARD 1 -->
            <b-card title="Basic" class="card-top box-shadow1 plan-col1">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price1.month }}</h4>

              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price1.semester }}</h4>
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
            <b-card title="Team" class="card-top box-shadow1 plan-col2">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price2.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price2.semester }}</h4>
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
            <b-card title="Pro" class="card-top box-shadow1 plan-col3">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price3.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price3.semester }}</h4>
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

          <b-card class="back-light-red border-0 my-5">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text>If you are a designer, QA or special service provider, become part of the ABANA network.</b-card-text>
            <b-button href="#" variant="outline-primary">More Information Here</b-button>
          </b-card>
        </b-tab>
        <!-- SERVICE PROVIDERS -->
        <b-tab title="Service Providers">
          <!-- RADIO -->
          <div class="billed justify-content-center d-flex">
            <p class="mr-4">Billed:</p>
            <b-form-radio-group v-model="selected" :options="options" name="radio-service"></b-form-radio-group>
          </div>
          <b-card-group deck class="mt-3 mb-5">
            <!-- CARD 1 -->
            <b-card title="Basic" class="card-top box-shadow1 plan-col1">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price1.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price1.semester }}</h4>
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
            <b-card title="Team" class="card-top box-shadow1 plan-col2">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price2.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price2.semester }}</h4>
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
            <b-card title="Pro" class="card-top box-shadow1 plan-col3">
              <b-card-text class="desc">This describes the member plan</b-card-text>
              <h4 class="pricetag" v-if="selected === 'month'">{{ prices.buyer.price3.month }}</h4>
              <h4
                class="pricetag"
                v-else-if="selected === 'semester'"
              >{{ prices.buyer.price3.semester }}</h4>
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

          <b-card class="back-light-red border-0 my-5">
            <b-card-title>We support independant creators</b-card-title>
            <b-card-text>If you are a designer, QA or special service provider, become part of the ABANA network.</b-card-text>
            <b-button href="#" variant="outline-primary">More Information Here</b-button>
          </b-card>
        </b-tab>
      </b-tabs>
    </div>
  </OneSection>
</template>

<script>
import Data from "~/_settings/plans.json";

export default {
  metaInfo: {
    title: "Plans",
  },
  data() {
    return {
      Data,
      selected: "annual",
      options: [
        { text: "Annually", value: "annual" },
        { text: "Semesterly", value: "semester" },
        { text: "Monthly", value: "month" },
      ],
      prices: {
        buyer: {
          price1: {
            month: "$0",
            semester: "$0",
            annual: "$0",
          },
          price2: {
            month: "$129/mo",
            semester: "$119/mo",
            annual: "$99/mo",
          },
          price3: {
            month: "$379/mo",
            semester: "$349/mo",
            annual: "$299/mo",
          },
        },
        supplier: {
          price1: {
            month: "$99/mo",
            semester: "$199/mo",
            annual: "$299/mo",
          },
          price2: {
            month: "$99/mo",
            semester: "$199/mo",
            annual: "$299/mo",
          },
          price3: {
            month: "$99/mo",
            semester: "$199/mo",
            annual: "$299/mo",
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
  @media (max-width: $break-s) {
    padding-bottom: 0.5rem;
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
      border-color: #dee2e6;
      border-radius: 0.25rem;
    }
  }
}

.tabs > :first-child {
  //
  position: sticky;
  top: 72px;
  padding-top: 10px;
  background-color: white;
  z-index: 10;
  margin-left: -10px;
  margin-right: -10px;

  @media (min-width: $break-s) {
    top: 65px;
    padding-top: 20px;
  }
}

.billed {
  position: sticky;
  font-size: 14px;
  top: 173px;
  background-color: white;
  z-index: 10;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: -10px;
  margin-right: -10px;
  border-bottom: 1px solid #dee2e6;
  @media (min-width: 382px) {
    top: 132px;
  }
  @media (min-width: $break-s) {
    top: 127px;
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
  }
}

.custom-control-inline {
  @media (max-width: $break-s) {
    margin-right: 0.5rem;
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