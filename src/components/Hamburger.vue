<!-- HTML -->
<template>
  <div
    class="hamburger hamburger--spin js-hamburger"
    v-bind:class="{ active: isActive }"
    v-on:click="isActive = !isActive"
  >
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<!-- QUERIES -->
<static-query>
</static-query>

<!-- STYLING -->
<style lang='scss'>
.hamburger {
  display: flex;
  outline: none;
  z-index: 1500;
  position: relative;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
}
.hamburger.active:hover,
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.active .hamburger-inner,
.hamburger.active .hamburger-inner:after,
.hamburger.active .hamburger-inner:before {
  background-color: $title-dark;
}
.hamburger-box {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 19px;
}
.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
  width: 30px;
  height: 2px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
  background-color: $title-dark;
}
.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
  content: "";
}
.hamburger-inner:before {
  top: -8px;
}
.hamburger-inner:after {
  bottom: -8px;
}

.hamburger--spin .hamburger-inner {
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 0.22s;
}
.hamburger--spin .hamburger-inner:before {
  transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner:after {
  transition: bottom 0.1s ease-in 0.25s,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin.active .hamburger-inner {
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: rotate(225deg);
}
.hamburger--spin.active .hamburger-inner:before {
  top: 0;
  transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
  opacity: 0;
}
.hamburger--spin.active .hamburger-inner:after {
  bottom: 0;
  transition: bottom 0.1s ease-out,
    transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  transform: rotate(-90deg);
}
</style>