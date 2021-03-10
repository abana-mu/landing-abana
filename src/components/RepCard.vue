<template>
  <div class="rep-card">
    <b-row class="rep-header-no-image d-flex ">
      <b-col cols="12" lg="9" class="d-flex flex-row">
        <div class="header-text d-flex flex-column align-items-start">
          <h3>{{ data.name }}</h3>
          <span class="m-0"
            ><BIconGeoAlt class="mr-2" />{{ data.location }}</span
          >
        </div>
      </b-col>
      <b-col cols="12" lg="3" class="p-0 ">
        <div class="d-flex rep-button justify-content-center mt-3 mt-lg-0">
          <b-button
            href="mailto:support@abana.mu"
            variant="outline-primary"
            class="m-0"
          >
            E-mail
          </b-button>
        </div>
      </b-col>
    </b-row>

    <div class="rep-content d-flex flex-column">
      <p><BIconGlobe2 class="mr-3" />{{ data.coverage }}</p>
      <p><BIconBriefcase class="mr-3" />{{ data.company }}</p>
    </div>
  </div>
</template>

<script>
import {
  BIcon,
  BIconGeoAlt,
  BIconEnvelope,
  BIconTelephone,
  BIconBriefcase,
  BIconGlobe2,
} from 'bootstrap-vue';

export default {
  components: {
    BIcon,
    BIconGeoAlt,
    BIconEnvelope,
    BIconTelephone,
    BIconGlobe2,
    BIconBriefcase,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss">
.rep-card {
  background-color: $white;
  border-radius: 5px;
  overflow: hidden;
  margin: 0.75rem;
  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2);
  border: 1px solid $border;
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

  .header-text {
    padding-left: 106px;
    @media (min-width: $break-m) {
      padding-left: 116px;
    }
  }
}

.rep-header-no-image {
  align-items: center;
  padding: 1.5rem 2rem;
  position: relative;
  align-items: flex-start;
}

.rep-content {
  background-color: $grey-light;
  border-top: 1px solid $border;
  padding: 1rem 2rem;
  p,
  a {
    margin-bottom: 0.25rem;
    color: $text-body;
  }
  .b-icon {
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
