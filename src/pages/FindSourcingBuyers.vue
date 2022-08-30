<template>
  <Layout class="index-layout">
    <div v-if="modal">
      <Modal
        :title="Data.popup.title"
        :description="Data.popup.text"
        :cta="Data.popup.cta"
        :warning="Data.popup.warning"
        :close="closeModal"
        :id="3"
      />
    </div>

    <div id="parallax-over" class="relative z-1 bg-white">
      <div id="banner" class="relative w-full flex flex-col md:flex-row justify-center bg-white">
        <div class="contain relative lg:h-full w-full flex flex-col justify-between z-10">
          <div class="absolute opacity-30 right-0 top-0 w-full lottie-banner z-0">
            <Lottie :options="animationData" />
          </div>
          <div
            class="z-10 w-full pt-24 pb-20 h-full text-center md:text-left flex flex-col justify-center items-center md:items-start"
          >
            <vue-simple-markdown
              :source="Data.header.title"
              class="marketing text-4xl lg:text-5xl lg:leading-normal font-light mb-6 max-w-5xl mx-auto text-title text-center mb-10"
            ></vue-simple-markdown>

            <div class="max-w-3xl mx-auto text-2xl mb-10 text-center">{{ Data.header.subtext }}</div>

            <div class="contain text-center">
              <g-link to="/registration/" class="btn-lg btn-primary px-10">Register</g-link>
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden text-center text-gray-50 m-0 z-10">
        <svg
          class="w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 64"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z" />
        </svg>
      </div>

      <div class="bg-gray-50 relative z-10">
        <div class="contain py-24">
          <div
            class="text-3xl lg:text-4xl mb-4 font-bold text-title text-center mb-12"
          >{{ Data.steps.title }}</div>
          <div class="max-w-3xl mx-auto mb-12">
            <div class="landing-video-container">
              <iframe
                class="video-iframe"
                src="https://www.youtube.com/embed/Nm61mhckdoc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                modestbranding
              ></iframe>
            </div>
          </div>
          <div
            class="grid sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-5 mb-10 mx-auto text-center justify-center items-center"
          >
            <div class="flex flex-col items-center">
              <g-image class="mb-2 h-10 w-10" src="~/assets/images/account.svg" />
              <div class="text-lg tracking-wider font-medium text-primary">Step 1</div>
              <div class="text-2xl">{{ Data.steps.box1 }}</div>
            </div>
            <div class="flex flex-col items-center">
              <g-image class="mb-2 h-10 w-10" src="~/assets/images/product.svg" />
              <div class="text-lg tracking-wider font-medium text-primary">Step 2</div>
              <div class="text-2xl">{{ Data.steps.box2 }}</div>
            </div>
            <div class="flex flex-col items-center">
              <g-image class="mb-2 h-10 w-10" src="~/assets/images/respond.svg" />
              <div class="text-lg tracking-wider font-medium text-primary">Step 3</div>
              <div class="text-2xl">{{ Data.steps.box3 }}</div>
            </div>
            <div class="flex flex-col items-center">
              <g-image class="mb-2 h-10 w-10" src="~/assets/images/partnerships.svg" />
              <div class="text-lg tracking-wider font-medium text-primary">Step 4</div>
              <div class="text-2xl">{{ Data.steps.box4 }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden text-center text-gray-50 m-0">
        <svg
          class="w-full transform rotate-180"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 64"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M1366,64H0V.0337c205,0,709,55.6648,1366,55.6648Z" />
        </svg>
      </div>

      <div class>
        <div class="contain-tight py-28">
          <div
            class="text-4xl lg:text-5xl mb-4 font-bold text-title text-center mb-8"
          >{{ Data.tp.title }}</div>
          <vue-simple-markdown
            :source="Data.tp.text"
            class="marketing text-2xl text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          ></vue-simple-markdown>
        </div>
      </div>

      <div class="contain-tight py-28">
        <div
          class="text-4xl lg:text-5xl mb-4 font-bold text-title text-center mb-24"
        >{{ Data.vad.title }}</div>

        <div class="space-y-20">
          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title1 }}</div>
              <div class="text-lg">{{ Data.vad.text1 }}</div>
            </div>
            <div class>
              <g-image
                :src="Data.vad.image1"
                quality="100"
                width="750"
                class="rounded-md w-full shadow-xl"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title2 }}</div>
              <div class="text-lg">{{ Data.vad.text2 }}</div>
            </div>
            <div class>
              <g-image
                :src="Data.vad.image2"
                quality="100"
                width="750"
                class="rounded-md w-full shadow-xl"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 items-center gap-10">
            <div class="flex flex-col">
              <div class="text-2xl font-medium text-primary mb-4">{{ Data.vad.title3 }}</div>
              <div class="text-lg">{{ Data.vad.text3 }}</div>
            </div>
            <div class>
              <g-image
                :src="Data.vad.image3"
                quality="100"
                width="750"
                class="rounded-md w-full shadow-xl"
              />
            </div>
          </div>
          <div class="contain text-center my-20">
            <a
              href="https://meetings.hubspot.com/abana"
              target="_blank"
              class="btn-2xl btn-primary"
            >Book a Demo</a>
          </div>
        </div>
      </div>
    </div>

    <div id="spacer" class="hidden md:flex"></div>
    <div id="parallax-under" class="overflow-hidden bg-primary md:h-full top-0 z-0 w-full">
      <div class="contain pt-28">
        <h2
          class="text-2xl lg:text-5xl font-medium mb-16 text-center text-primary-100"
        >What industry leading voices are saying:</h2>

        <div class="py-4 mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div
              class="flex flex-col justify-around bg-white rounded-lg shadow-xl border px-8 py-16"
              v-for="testi in $page.posts.edges"
              :key="testi.id"
            >
              <div class="w-full max-w-xs px-16 mb-8">
                <g-image :src="testi.node.logo" class="w-full" />
              </div>
              <p class="text-body text-xl pb-16">"{{ testi.node.blurb }}"</p>
              <div class="flex flex-row items-center space-x-4">
                <div class="h-24 w-24 rounded-full overflow-hidden flex-shrink-0">
                  <g-image :src="testi.node.image" class="w-full h-full object-cover object-top" />
                </div>
                <div class="flex flex-col text-title">
                  <h4 class="font-bold">{{ testi.node.name }}</h4>
                  <div class="flex flex-col justify-content-center">
                    <p class="text-base">{{ testi.node.title }}</p>
                    <p class="text-sm">{{ testi.node.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center pb-10">
          <g-link to="/testimonials/" class="btn btn-light">See full testimonials</g-link>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 border-t border-b">
      <div class="contain my-12">
        <IndexTrusted :data="TrustedData.trusted" gray class="w-full max-w-screen-lg mx-auto" />
      </div>
    </div>

    <div class="contain text-center my-20">
      <a
        href="https://meetings.hubspot.com/abana"
        target="_blank"
        class="btn-2xl btn-primary"
      >Book a Demo</a>
    </div>
  </Layout>
</template>

<!-- QUERIES -->
<page-query>
query{
  posts: allTestimonials(filter: { featured: { eq: true }}){
    edges{
      node{
        id
        title
        featured
        blurb
        name
        position
        image
        logo
      }
    }
  }
}
</page-query>
<script>
import Data from "~/_settings/promo-seller.json";
import TrustedData from "~/_settings/landing.json";
import Lottie from "vue-lottie";
import Animation from "@/assets/animation/landing.json";
import IndexTrusted from "~/components/IndexTrusted";
import Modal from "~/components/Modal";

export default {
  metaInfo: {
    title: "ABANA | African Textile & Apparel Marketplace",
    meta: [
      {
        name: "description",
        content:
          "Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers."
      }
    ]
  },
  components: {
    Lottie,
    IndexTrusted,
    Modal
  },
  data() {
    return {
      Data,
      TrustedData,
      animationData: { animationData: Animation },
      modal: false,
      opened: false
    };
  },

  mounted() {
    var width = window.innerWidth;
    var that = this;
    var height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (width > 768) {
      var footer = document.querySelector("footer");
      var over = document.getElementById("parallax-over");
      var spacer = document.getElementById("spacer");
      var under = document.getElementById("parallax-under");
      footer.classList.add("fixed");
      under.classList.add("fixed");
      under.classList.add("opacity-0");
      spacer.style.height =
        under.getBoundingClientRect().height +
        footer.getBoundingClientRect().height +
        "px";
      window.addEventListener("scroll", function() {
        if (window.scrollY > 40) {
          under.classList.remove("opacity-0");
        } else {
          under.classList.add("opacity-0");
        }
        if (over.getBoundingClientRect().bottom > 1) {
          spacer.classList.remove("fixed");
          footer.classList.add("fixed");
          under.classList.add("fixed");
        }
        if (over.getBoundingClientRect().bottom <= 1) {
          spacer.classList.add("fixed");
          footer.classList.remove("fixed");
          under.classList.remove("fixed");
        }

        if (window.scrollY > height / 2 && !localStorage.opened) {
          that.openModal();
        }
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    openModal() {
      this.modal = true;
      localStorage.opened = true;
    }
  }
};
</script>

<style lang="scss" scoped>
footer,
#parallax-under {
  @media (max-width: $break-md) {
    position: static !important;
  }
}

.landing-video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.lottie-banner {
  min-width: 800px;
  margin: 0 auto;
}
</style>
