<template>
  <div class="main text-body font-graphik">
    <TheNavbar class="relative z-20" />
    <div class="relative z-10">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar';
import TheFooter from '~/components/TheFooter';

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
  mounted() {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      document.getElementById('app').classList.add('mac');
    } else {
      document.getElementById('app').classList.add('pc');
    }
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
.layout {
  margin: 56px auto 0 auto;
  //XSmall -578
  padding-top: 2rem;

  //Small 578-776
  @media (min-width: $break-sm) {
    padding-top: 4rem;
  }

  //Large 992-1200
  @media (min-width: $break-lg) {
    margin-top: 80px;
  }
}
</style>
