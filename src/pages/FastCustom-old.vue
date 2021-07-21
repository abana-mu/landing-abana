<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header pb-5">
        <h1 class="title">{{ Data.header.title }}</h1>
        <p class="subtitle">{{ Data.header.subtext }}</p>
      </div>
      <section class="pt-5 back-grey bordered">
        <div class="scroll-container flex-row align-items-start d-none d-lg-flex" :class="activeBlock">
          <ul class="scroll-circle">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="scroll-text-container w-50">
            <li v-for="block in Data.elements" :key="block.id">
              <h2 :id="block.id" class="title-block" :class="{ isActive: block.id === activeBlock }">{{ block.title }}</h2>
              <vue-simple-markdown :source="block.content" class="text-block"></vue-simple-markdown>
            </li>
          </ul>
          <div class="scroll-image-container w-50">
            <div class="mask">
              <div class="scroll-image1">
                <g-image src="../assets/images/supply.png" quality="100" />
              </div>
              <div class="scroll-image scroll-image2">
                <g-image :src="Data.elements[1].image" quality="100" />
              </div>
              <div class="scroll-image scroll-image3">
                <g-image :src="Data.elements[2].image" quality="100" />
              </div>
            </div>
          </div>
        </div>

        <section class="section-content flex d-lg-none">
          <TwoCol :data="Data.elements" break="lg" />
        </section>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/fastcustom.json';
import TwoCol from '~/components/PageElementTwoColMd';

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export default {
  components: {
    TwoCol,
  },
  metaInfo: {
    title: 'Drops',
    meta: [
      {
        name: 'description',
        content: 'Welcome to the first B2B sourcing platform for Textile and Apparel Africa. We help Textile and Apparel buyers find an connect to suppliers.',
      },
    ],
  },
  data() {
    return {
      Data,
      activeBlock: 'block1',
    };
  },

  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.Data.elements.find((number) => {
        const el = document.getElementById(number.id);
        if (isElementInViewport(el)) {
          this.activeBlock = number.id;
        }
      });
      console.log(this.activeBlock);
    },
  },
};
</script>

<style lang="scss">
.height-restriction {
  min-height: calc(100vh - 390px);
}

.video-container {
  width: 100%;
  @media (min-width: $break-lg) {
    width: 50%;
  }
  margin: 0 auto;
  padding: 0 1rem;
}

.scroll-container {
  max-width: calc(1280px + 6rem);
  padding-left: 3rem;
  padding-right: 3rem;
  margin-bottom: 8rem;
  margin-left: auto;
  margin-right: auto;
  li {
    list-style: none;
    height: calc(100vh - 1rem);
    display: flex;
  }
}

.scroll-text-container {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  padding-left: 0;

  @media (min-width: $break-lg) {
    padding-left: 10px;
  }
  li {
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    .title-block {
      margin-bottom: 1.5rem;
    }
    .text-block {
      font-size: 1.25rem;
    }
  }
}

.scroll-container {
  &.block1 {
    .scroll-circle li:nth-child(1) {
      opacity: 1;
    }
  }
  &.block2 {
    .scroll-circle li:nth-child(2) {
      opacity: 1;
    }
    .scroll-image-container .mask .scroll-image2 {
      transform: scaleY(1);
      img {
        opacity: 1;
        transition-delay: 1s;
        transition-duration: 0.75s;
        transition-property: opacity;
      }
    }
  }
  &.block3 {
    .scroll-circle li:nth-child(3) {
      opacity: 1;
    }
    .scroll-image-container .mask .scroll-image3,
    .scroll-image-container .mask .scroll-image2 {
      transform: scaleY(1);
      img {
        opacity: 1;
        transition-delay: 1s;
        transition-duration: 0.75s;
        transition-property: opacity;
      }
    }
  }
  &.block4 {
    .scroll-circle li:nth-child(4) {
      opacity: 1;
    }
    .scroll-image-container .mask .scroll-image4,
    .scroll-image-container .mask .scroll-image3,
    .scroll-image-container .mask .scroll-image2 {
      transform: scaleY(1);
      img {
        opacity: 1;
        transition-delay: 1s;
        transition-duration: 0.75s;
        transition-property: opacity;
      }
    }
  }
}

.scroll-circle {
  padding: 0;
  display: flex;
  height: calc(100vh - 4.375rem);
  top: 4.375rem;
  position: sticky;
  justify-content: center;
  flex-direction: column;

  li {
    background-color: $secondary;
    opacity: 0.1;
    transition-duration: 0.3s;
    transition-property: opacity;
    width: 0.625rem;
    margin-left: -4rem;
    margin-bottom: 1.5rem;
    height: 0.625rem;
    border-radius: 9999px;
  }

  .sticky {
    position: sticky;
  }
  .justify-center {
    justify-content: center;
  }
  .flex-col {
    flex-direction: column;
  }
}

.scroll-image-container {
  top: 4.375rem;
  position: sticky;
  display: block;
  width: 50%;
  border-width: 10px;

  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  .mask {
    position: relative;
    overflow: hidden;
    height: calc(100vh - 11.875rem);
    border-radius: 10px;

    .scroll-image,
    .scroll-image1 {
      img {
        width: 100%;
      }
    }

    .scroll-image1 {
      background-color: #393855;
      height: calc(100vh - 11.875rem);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 3px rgb(0, 0, 0);
      img {
        width: 75%;
        filter: drop-shadow(6px 8px 10px rgba(0, 0, 0, 0.2));
      }
    }
    .scroll-image2 {
      background-color: #6b6d9b;
    }
    .scroll-image3 {
      background-color: #f2dcbb;
    }
    .scroll-image4 {
      background-color: #f9f7cf;
    }

    .scroll-image {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      top: 0;
      transform: scaleY(0);
      transform-origin: bottom;
      transition-duration: 1s;
      transition-property: transform;
      img {
        opacity: 0;
        width: 75%;
        filter: drop-shadow(6px 8px 10px rgba(0, 0, 0, 0.25));
      }
    }
  }
}
</style>
