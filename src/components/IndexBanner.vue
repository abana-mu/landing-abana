<!-- HTML -->
<template>
  <div class="overflow-hidden">
    <div id="header-banner" class="max-w-4xl mx-auto">
      <div>
        <h1 class="text-title text-center text-5xl font-medium mb-4">{{ title }}</h1>
      </div>
      <div>
        <p id="header-subtitle" class="mb-2 text-center">{{ subtext }}</p>
      </div>
      <div id="header-cta">
        <g-link to="/about">
          <div class="btn btn-primary">{{ cta }}</div>
        </g-link>
      </div>
    </div>
    <g-image id="header-image" src="~/assets/images/test1.png" blur="40" quality="100" immediate />
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ['title', 'subtext', 'cta'],
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
  font-size: $f38;

  //Medium 767-992
  @media (min-width: $break-md) {
    max-width: 780px;
    font-size: $f48;
  }

  //Large 992-1200
  @media (min-width: $break-lg) {
    max-width: 860px;
  }

  //XLarge 1200-1440+
  @media (min-width: $break-xl) {
    max-width: 900px;
  }
  @media (min-width: $break-2xl) {
    max-width: 1000px;
    font-size: $f56;
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
  @media (min-width: $break-sm) {
    font-size: 1.05rem;
    max-width: 500px;
  }

  //Medium 776-992
  @media (min-width: $break-md) {
    font-size: 1.1rem;
    max-width: 500px;
  }

  //Large 992-1200
  @media (min-width: $break-lg) {
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
  margin: 20px 0 40px 0;
  text-align: center;
  .btn {
    @media (max-width: $break-sm) {
      width: 100%;
    }
  }
}

#header-image {
  width: 100%;
  z-index: 3;
  max-width: 90vw;
  display: block;
  margin: 25px auto 25px auto;

  border-radius: 10px;

  @media (min-width: $break-sm) {
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-md) {
    width: 600px;
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-lg) {
    width: 700px;
    margin: 0px auto 25px auto;
  }
  @media (min-width: $break-xl) {
    width: 750px;
    margin: 0px auto 25px auto;
  }
}
</style>
