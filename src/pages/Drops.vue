<template>
  <Layout>
    <div class="contain mt-8 mb-10 md:mb-20">
      <div class="banner-container">
        <div class="product-banner overlay">
          <h1 class="banner-title" data-aos="fade-up" data-aos-duration="1000">{{ Data.header.title }}</h1>
          <p class="banner-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {{ Data.header.subtext }}
          </p>
        </div>
        <g-image :src="Data.header.image" quality="100" blur="40" width="750" class="object-cover w-full h-full" />
      </div>
    </div>
    <div class="my-10 lg:my-20">
      <TwoCol isGrey :data="Data.blocks" />
    </div>
    <section class="my-5">
      <h2 class="text-center text-4xl font-bold mb-10">Sample Drop Collection</h2>
      <div class="video-container">
        <div class="flex justify-content-center video-wrapper">
          <iframe
            width="840"
            height="472.5"
            :src="Data.header.video | youtubize"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            modestbranding
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Data from '~/_settings/dro.json';
import OneCol from '~/components/PageElementOneCol';
import TwoCol from '~/components/PageElementTwoCol';
import String1 from '~/components/icons/String1';
import String2 from '~/components/icons/String2';
import ICheck from '@/components/icons/ICheck';

export default {
  components: {
    OneCol,
    TwoCol,
    String1,
    String2,
  },
  metaInfo: {
    title: Data.header.title,
    meta: [
      {
        name: 'description',
        title: Data.header.subtext,
      },
    ],
  },
  data() {
    return {
      Data,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    isBlockScrolled(el) {
      var block = el.getBoundingClientRect();
      //return block.top <= window.innerHeight * 0.5;
    },

    handleScroll() {
      var blocks = document.getElementsByClassName('block-item');
      blocks.forEach((block) => {
        let imageBlock = document.getElementById(block.id + '-image');
        if (this.isBlockScrolled(block)) {
          imageBlock.classList.add('active');
        } else {
          imageBlock.classList.remove('active');
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.overlay {
  background-color: rgba(6, 7, 55, 0.53);
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

.block1 {
  .scroll-circle li:nth-child(1) {
    opacity: 1;
  }
}
.block2 {
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
.block3 {
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
.block4 {
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

.mask {
  height: calc(100vh - 11.875rem);
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
    // transform: scale(0);
    // transform: opacity(0);
    // transition-duration: 1s;
    opacity: 0;

    img {
      //opacity: 0;
      width: 75%;
      filter: drop-shadow(6px 8px 10px rgba(0, 0, 0, 0.25));
    }
    &.active {
      opacity: 1;
    }
  }
}
</style>
