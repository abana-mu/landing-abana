<template>
  <Layout class="one-section-tight-layout">
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
      <div class="image-banner"></div>
    </div>

    <section class="back-grey">
      <div class="rep-container ">
        <b-row no-gutters>
          <b-col
            v-for="(reps, index) in Data.reps"
            :key="index"
            cols="12"
            md="6"
          >
            <div class="rep-card">
              <div class="rep-banner">
                <g-image src="~/assets/images/cdm.jpg" />
              </div>

              <b-row class="rep-header d-flex ">
                <b-col cols="12" lg="9" class="d-flex flex-row">
                  <div class="avatar">
                    <g-image src="~/assets/images/avatar.jpg" />
                  </div>
                  <div class="header-text d-flex flex-column align-items-start">
                    <h3>{{ reps.name }}</h3>
                    <span class="m-0"
                      ><BIconGeoAlt class="mr-2" />{{ reps.location }}</span
                    >
                  </div>
                </b-col>
                <b-col cols="12" lg="3" class="p-0 ">
                  <div
                    class="d-flex rep-button justify-content-center mt-3 mt-lg-0"
                  >
                    <b-button variant="outline-primary" class="m-0"
                      >E-mail</b-button
                    >
                  </div>
                </b-col>
              </b-row>
              <div class="rep-content d-flex flex-column">
                <p><BIconGlobe2 class="mr-3" />{{ reps.coverage }}</p>
                <a :href="'tel:' + reps.number"
                  ><BIconTelephone class="mr-3" />{{ reps.number }}</a
                >
                <a :href="'mailto:' + reps.email"
                  ><BIconEnvelope class="mr-3" />{{ reps.email }}</a
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
  </Layout>
</template>

<script>
import Data from '~/_settings/countryreps.json';
import {
  BIcon,
  BIconGeoAlt,
  BIconEnvelope,
  BIconTelephone,
  BIconGlobe2,
} from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconGeoAlt,
    BIconEnvelope,
    BIconTelephone,
    BIconGlobe2,
  },
  metaInfo: {
    title: 'Country Reps',
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.rep-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.rep-card {
  background-color: $white;
  border-radius: 4px;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.rep-banner {
  height: 150px;
  width: 100%;
  overflow: hidden;
}

.rep-header {
  align-items: center;
  padding: 1.5rem 1rem;
  position: relative;
  align-items: flex-start;
}

.header-text {
  padding-left: 106px;
  @media (min-width: $break-m) {
    padding-left: 116px;
  }
}

.rep-content {
  background-color: $grey-light;
  border-top: 1px solid $border;
  padding: 1rem 2rem;
  p,
  a {
    margin-bottom: 0.25rem;
    color: $subtitle-dark;
  }
}

.avatar {
  position: absolute;
  top: -50px;

  img {
    vertical-align: middle;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 4px solid $white;
    @media (min-width: $break-m) {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
