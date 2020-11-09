<template>
  <Layout class="one-section-tight-layout">
    <div class="height-restriction">
      <div class="header pb-5">
        <h1 class="title">Drops</h1>
        <p class="subtitle">
          Informed decisions, reduced lead times and faster deliveries to
          support brands, retailers and designers buy sustainably and
          transparently.
        </p>
      </div>
      <section class="pt-5 back-grey bordered">
        <div
          class="scroll-container d-flex flex-row align-items-start"
          :class="activeBlock"
        >
          <ul class="scroll-circle">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="scroll-text-container w-50">
            <li v-for="block in Data.elements" :key="block.id">
              <h2
                :id="block.id"
                class="title-block"
                :class="{ isActive: block.id === activeBlock }"
              >
                {{ block.title }}
              </h2>
              <vue-simple-markdown
                :source="block.content"
                class="text-block"
              ></vue-simple-markdown>
            </li>
          </ul>
          <div class="scroll-image-container w-50">
            <div class="mask">
              <div class="scroll-image1">
                <g-image src="~/assets/images/picture7.jpg" quality="100" />
              </div>
              <div class="scroll-image scroll-image2">
                <g-image src="~/assets/images/picture8.jpg" quality="100" />
              </div>
              <div class="scroll-image scroll-image3">
                <g-image src="~/assets/images/picture9.jpg" quality="100" />
              </div>
              <div class="scroll-image scroll-image4">
                <g-image src="~/assets/images/picture7.jpg" quality="100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/drops.json';

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export default {
  metaInfo: {
    title: 'Drops',
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
  li {
    flex-direction: column;
    justify-content: center;
    max-width: 30rem;
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
    background-color: $blue-grey;
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

  padding-top: 3.75rem;
  padding-bottom: 3.75rem;

  .mask {
    position: relative;
    overflow: hidden;

    .scroll-image1 {
      background-color: #393855;
      height: calc(100vh - 11.875rem);
      position: relative;
    }
    .scroll-image2 {
      background-color: $lightest-red;
    }
    .scroll-image3 {
      background-color: $light-blue;
    }
    .scroll-image4 {
      background-color: $green;
    }

    .scroll-image {
      position: absolute;
      top: 0;
      transform: scaleY(0);
      transform-origin: bottom;
      transition-duration: 1s;
      transition-property: transform;
      img {
        opacity: 0;
      }
    }
  }
}
</style>
