<template>
  <Layout class="one-section-tight-layout">
    <div class="mobile-gutter">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
    </div>
    <div class="mt-3">
      <div class="back-blue">
        <h3 class="iama">I am a:</h3>
      </div>
      <b-tabs align="center" content-class="pt-5 pb-5 back-grey">
        <!--------- BUYERS --------->
        <b-tab title="Buyer" active>
          <form
            action="https://abana.us4.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="eb06fa43da9637c731317d472" />
            <input type="hidden" name="id" value="c18868158b" />

            <input
              type="radio"
              data-dojo-type="dijit/form/RadioButton"
              name="MERGE6"
              id="MERGE6"
              value="Buyer"
              class="d-none"
              checked
            />

            <b-container class="form-container">
              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Your Details</h4>
                  <p class="text-lighter">*Required</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line">
                    <label for="MERGE1">Full Name *</label>
                    <b-form-input id="MERGE1" name="MERGE1" required>
                    </b-form-input>
                  </div>
                  <div class="form-line">
                    <label for="MERGE0">Email Address *</label>
                    <b-form-input
                      id="MERGE0"
                      name="MERGE0"
                      required
                      type="email"
                    >
                    </b-form-input>
                  </div>
                  <div class="form-line">
                    <label for="MERGE5">Your Interests</label>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE5"
                      name="MERGE5"
                      :options="Options.interests.buyers"
                      v-model="interests"
                      ><template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- What brings you here? --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-2" />

              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Your Company</h4>
                  <p class="text-lighter">*Required</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line half">
                    <b-col cols="12" md="6">
                      <label for="MERGE7">Company *</label>
                      <b-form-input id="MERGE7" name="MERGE7" required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                      <label for="MERGE4">Position</label>
                      <b-form-input id="MERGE4" name="MERGE4"> </b-form-input>
                    </b-col>
                  </div>
                  <div class="form-line">
                    <label for="MERGE3">Country *</label>
                    <b-form-select
                      id="MERGE3"
                      name="MERGE3"
                      :options="Options.countries"
                      v-model="selected"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- Please select your Country
                          --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-2" />

              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Comments</h4>
                  <p class="text-lighter">Optional</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line">
                    <b-form-textarea
                      rows="3"
                      max-row="6"
                      no-resize
                      id="MERGE2"
                      name="MERGE2"
                    >
                    </b-form-textarea>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-4" />

              <b-row class="form-submit" no-gutters>
                <b-col cols="12" md="9">
                  <p class="text-lighter">
                    <i
                      >We respect your privacy and promise to never rent or
                      share your details with anybody</i
                    >
                  </p>
                </b-col>
                <b-col
                  cols="12"
                  md="3"
                  class="d-flex justify-content-md-end justify-content-center"
                >
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </b-col>
              </b-row>
            </b-container>
          </form>
        </b-tab>
        <!--------- SUPPLIERS --------->
        <b-tab title="Supplier">
          <form
            action="https://abana.us4.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="eb06fa43da9637c731317d472" />
            <input type="hidden" name="id" value="c18868158b" />

            <b-container class="form-container">
              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Your Details</h4>
                  <p class="text-lighter">*Required</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line">
                    <label for="MERGE6">I am a (select one) *</label>
                    <b-form-radio-group
                      buttons
                      button-variant="outline-primary"
                      required
                      id="MERGE6"
                    >
                      <b-form-radio
                        v-model="radio"
                        name="MERGE6"
                        value="Garment Maker"
                        id="MERGE6-1"
                      >
                        Garment Maker</b-form-radio
                      >
                      <b-form-radio
                        v-model="radio"
                        name="MERGE6"
                        id="MERGE6-2"
                        value="Input Supplier"
                      >
                        Input Supplier</b-form-radio
                      >
                      <b-form-radio
                        v-model="radio"
                        name="MERGE6"
                        id="MERGE6-3"
                        value="Service Provider"
                      >
                        Service Provider</b-form-radio
                      >
                    </b-form-radio-group>
                  </div>

                  <div class="form-line">
                    <label for="MERGE1">Full Name *</label>
                    <b-form-input id="MERGE1" name="MERGE1" required>
                    </b-form-input>
                  </div>
                  <div class="form-line">
                    <label for="MERGE0">Email Address *</label>
                    <b-form-input id="MERGE0" name="MERGE0" required>
                    </b-form-input>
                  </div>
                  <div class="form-line">
                    <label for="MERGE5">Your Speciality</label>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE5"
                      name="MERGE5"
                      v-if="radio == 'Garment Maker'"
                      :options="Options.interests.garment"
                      v-model="interests"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- What brings you here? --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE5"
                      name="MERGE5"
                      v-else-if="radio == 'Input Supplier'"
                      :options="Options.interests.input"
                      v-model="interests"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- What brings you here? --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE5"
                      name="MERGE5"
                      v-else-if="radio == 'Service Provider'"
                      :options="Options.interests.service"
                      v-model="interests"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- What brings you here? --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE5"
                      name="MERGE5"
                      v-else
                      :options="Options.interests.empty"
                      v-model="interests"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- Select which type of supplier you are
                          --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-2" />

              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Your Company</h4>
                  <p class="text-lighter">*Required</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line half">
                    <b-col cols="12" md="6">
                      <label for="MERGE7">Company *</label>
                      <b-form-input id="MERGE7" name="MERGE7" required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="12" md="6">
                      <label for="MERGE4">Position</label>
                      <b-form-input id="MERGE4" name="MERGE4"> </b-form-input>
                    </b-col>
                  </div>
                  <div class="form-line">
                    <label for="MERGE3">Country *</label>
                    <b-form-select
                      placeholder="Select your Interest"
                      id="MERGE3"
                      name="MERGE3"
                      :options="Options.countries"
                      v-model="selected"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- Please select your Country
                          --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-2" />

              <b-row class="form-section" no-gutters>
                <b-col cols="12" md="4">
                  <h4>Comments</h4>
                  <p class="text-lighter">Optional</p>
                </b-col>
                <b-col cols="12" md="8">
                  <div class="form-line">
                    <b-form-textarea
                      rows="3"
                      max-row="6"
                      no-resize
                      id="MERGE2"
                      name="MERGE2"
                    >
                    </b-form-textarea>
                  </div>
                </b-col>
              </b-row>

              <hr class="w-100 divider my-4" />

              <b-row class="form-submit" no-gutters>
                <b-col cols="12" md="9">
                  <p class="text-lighter">
                    <i
                      >We respect your privacy and promise to never rent or
                      share your details with anybody</i
                    >
                  </p>
                </b-col>
                <b-col
                  cols="12"
                  md="3"
                  class="d-flex justify-content-md-end justify-content-center"
                >
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </b-col>
              </b-row>
            </b-container>
          </form>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/register.json';
import Options from '~/_settings/register-options.json';

import {
  BIcon,
  BIconCheckCircle,
  BIconChevronDown,
  BIconChevronUp,
  BFormInput,
  BFormSelect,
  BFormSelectOption,
  BFormTextarea,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue';
import { BCollapse } from 'bootstrap-vue';

export default {
  components: {
    BFormInput,
    BCollapse,
    BIcon,
    BIconCheckCircle,
    BIconChevronDown,
    BIconChevronUp,
    BFormSelect,
    BFormSelectOption,
    BFormTextarea,
    BFormRadio,
    BFormRadioGroup,
  },
  metaInfo: {
    title: 'Register',
    meta: [
      {
        name: 'description',
        content:
          'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
  data() {
    return {
      selected: null,
      radio: null,
      interests: null,
      Data,
      Options,
    };
  },
};
</script>

<style lang="scss">
.iama {
  color: white;
  text-align: center;
  margin: 0;
  padding-top: 10px;
  font-weight: 400;
}
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
  padding: 10px 0 20px 0;
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

.form-container {
  padding: 0rem 0;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  @media (min-width: $break-xl) {
    max-width: 75%;
  }
}

.form-section {
  padding: 2rem;
  @media (min-width: $break-m) {
    padding: 2rem 0 1rem 0;
  }
  .col-md-4 {
    padding-left: 0rem;
    @media (min-width: $break-m) {
      padding-left: 2rem;
    }
  }
}

.form-submit {
  display: flex;
  align-items: center;
  padding: 1rem 2rem 2rem;
}

.form-line {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  @media (min-width: $break-m) {
    width: 75%;
  }
  &.half {
    @media (min-width: $break-m) {
      flex-direction: row;
    }
  }
  &.half > div {
    padding: 0;
    @media (min-width: $break-m) {
      padding-right: 0;
      padding-left: 0.5rem;
    }
  }
  &.half > div:first-child {
    margin-bottom: 2rem;
    @media (min-width: $break-m) {
      margin-bottom: 0;
      padding-right: 0.5rem;
      padding-left: 0;
    }
  }
}
</style>
