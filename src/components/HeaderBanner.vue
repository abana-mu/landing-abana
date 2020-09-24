<!-- HTML -->
<template>
  <b-container fluid class="overflow-hidden">
    <div id="header-banner">
      <div class="row">
        <div class="col">
          <div data-aos="fade-down">
            <h1 id="header-title">
              {{ title }}
            </h1>
          </div>
          <div data-aos="fade-down" data-aos-delay="100">
            <p id="header-subtitle" class="mb-2 text-center">
              {{ subtext }}
            </p>
          </div>
          <div id="header-cta">
            <g-link
              to="/Plans/"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <b-button size="md" variant="primary">{{ cta }} </b-button>
            </g-link>
          </div>
          <g-image
            id="header-image"
            immediate
            data-aos="fade-up"
            src="~/assets/images/laptop-1x.png"
            quality="100"
          />
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
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;

  //Medium 767-992
  @media (min-width: $break-m) {
    max-width: 780px;
  }

  //Large 992-1200
  @media (min-width: $break-l) {
    max-width: 860px;
  }

  //XLarge 1200-1440+
  @media (min-width: $break-xl) {
    max-width: 930px;
  }
  @media (min-width: $break-xxl) {
    max-width: 975px;
  }
}

#header-subtitle {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: $subtitle-dark;

  //XSmall -578
  font-size: 1rem;

  //Small 578-776
  @media (min-width: $break-s) {
    font-size: 1.05rem;
    max-width: 500px;
  }

  //Medium 776-992
  @media (min-width: $break-m) {
    font-size: 1.1rem;
    max-width: 500px;
  }

  //Large 992-1200
  @media (min-width: $break-l) {
    font-size: 1.15rem;
    max-width: 780px;
  }

  //XLarge 1200-1440+
  @media (min-width: $break-xl) {
    font-size: 1.25rem;
    max-width: 870px;
  }
}

#header-cta {
  text-align: center;
  margin: 20px 0 40px 0;
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
