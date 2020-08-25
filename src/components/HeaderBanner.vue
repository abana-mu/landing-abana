<!-- HTML -->
<template>
  <b-container fluid>
    <div id="header-banner">
      <div class="row">
        <div class="col-12 col-lg-4 order-lg-2" data-aos="fade-down">
          <g-image
            id="header-image"
            class="d-none d-lg-block"
            src="~/assets/images/laptop-2x.png"
            quality="100"
          />
          <g-image
            id="header-image"
            class="d-block d-lg-none"
            src="~/assets/images/laptop-1x.png"
            quality="100"
          />
        </div>
        <div
          class="header-container col-12 col-lg-8 pr-lg-5 d-flex flex-column text-center text-lg-left"
        >
          <h1 data-aos="fade-up" id="header-title">{{ title }}</h1>
          <p
            id="header-subtitle"
            class="mb-3 mb-lg-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >{{subtext}}</p>
          <g-link
            class="py-2 mb-3 mb-lg-0"
            to="/Plans/"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <b-button id="header-cta" size="md" variant="primary">{{cta}}</b-button>
          </g-link>
        </div>
      </div>
    </div>
  </b-container>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ["title", "subtext", "cta"],
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang="scss">
#header-banner {
  margin-bottom: 1rem;
}

#header-title {
  margin-bottom: 35px;
  z-index: 2;
}

#header-subtitle {
  //XSmall -578
  font-size: 1rem;
  //Small 578-776
  @media (min-width: $break-s) {
    font-size: 1.075rem;
  }

  //Medium 776-992
  @media (min-width: $break-m) {
    font-size: 1.15rem;
  }

  //Large 992-1200
  @media (min-width: $break-l) {
    font-size: 1.225rem;
  }

  //XLarge 1200-1440
  @media (min-width: $break-xl) {
    font-size: 1.3rem;
  }

  //XXLarge 1440+
  @media (min-width: $break-xxl) {
    font-size: 1.375rem;
  }
}

#header-cta {
}

#header-image {
  width: 100%;
  z-index: 3;
  max-width: 90vw;
  display: block;
  margin: 25px auto 25px auto;

  @media (min-width: $break-s) {
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-m) {
    width: 600px;
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-l) {
    width: 700px;
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-xl) {
    width: 750px;
    margin: 0px auto 25px auto;
  }
}
</style>
