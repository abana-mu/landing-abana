<template>
  <Layout>
    <div class="header">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">{{ Data.header.subtext }}</p>
    </div>

    <div class="content mt-4 overflow-hidden">
      <b-row>
        <b-col class="col-4 p-0">
          <g-image class="w-100" src="~/assets/images/picture1-b.jpg"></g-image>
        </b-col>
        <b-col class="col-4 p-0">
          <g-image class="w-100" src="~/assets/images/picture3-b.jpg"></g-image>
        </b-col>
        <b-col class="col-4 p-0">
          <g-image class="w-100" src="~/assets/images/picture2-b.jpg"></g-image>
        </b-col>
      </b-row>

      <section class="mt-5 section-content why-links">
        <p class="text-center semi-spaced mb-5 text-small">
          EXPLORE OUR VALUES
        </p>
        <ul>
          <li><a href="#economic">Economic</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#environmental">Environmental</a></li>
        </ul>
      </section>

      <hr class="a-keyline" />

      <section
        v-for="(row, index) in Data.elements"
        :id="index"
        :key="index"
        no-gutters
      >
        <div class="mt-5">
          <OneCol :data="row" class="why-col" />
          <div class="image"></div>
        </div>
      </section>
    </div>
  </Layout>
</template>



<script>
import Data from "~/_settings/whyafrica.json";
import TwoCol from "~/components/PageElementTwoCol";
import OneCol from "~/components/PageElementOneCol";

export default {
  components: {
    TwoCol,
    OneCol,
  },
  metaInfo: {
    title: "Why Africa",
  },
  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.why-links {
  display: flex;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 0 2rem;
    padding: 0;
  }
  a {
    text-decoration: underline;
    color: $subtitle-dark;
    &:hover {
      color: $text-body;
    }
  }
}

.a-keyline {
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #e7e7e7;
  margin: 4rem auto 2rem auto;
  width: calc(100% - (50px));
  max-width: calc(1600px - (20px + 40px));
}

#economic::before,
#social::before,
#environmental::before {
  content: "";
  display: block;
  height: 45px; /* fixed header height*/
  margin: -45px 0 0; /* negative fixed header height */
  @media (min-width: $break-s) {
    height: 55px; /* fixed header height*/
    margin: -55px 0 0; /* negative fixed header height */
  }
}

.why-col {
  max-width: 500px;
  margin: 0 auto;
  h2,
  p {
    text-align: left;
  }
  .text {
    text-align: left !important;
    width: 100% !important;
  }
}

.image {
  height: 250px;
  width: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: $break-collapse) {
    background-attachment: fixed;
  }
}

#economic .image {
  background-image: url("~@/assets/images/picture1-b.jpg");
}

#social .image {
  background-image: url("~@/assets/images/picture3-b.jpg");
}

#environmental .image {
  background-image: url("~@/assets/images/picture2-b.jpg");
}
</style>