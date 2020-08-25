<!-- HTML -->
<template>
  <div>
    <div class="topLayer" v-bind:class="[colorTop]">
      <div class="middleLayer" v-bind:class="colorMiddle"></div>
      <div class="bottomLayer" v-bind:class="colorBottom"></div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ["colorTop", "colorMiddle", "colorBottom"],
};
</script>

<!-- STYLING -->
<style lang='scss'>
//Blue Container
.topLayer {
  height: 50px;
  position: relative;
  overflow: hidden;
  @media (min-width: $break-s) {
    height: 100px;
  }
}

.topLayer.white {
  background-color: white;
}

.topLayer.blue {
  background-color: $blue-grey;
}
.topLayer.grey {
  background-color: $grey-light;
}
.topLayer.beige {
  background-color: $beige-grey;
}

.bottomLayer {
  width: 0;
  height: 0;
  top: 0px;
  position: absolute;
  border-bottom: 50px solid;
  border-right: 100vw solid transparent;
  @media (min-width: $break-s) {
    border-bottom: 100px solid;
    border-right: 100vw solid transparent;
  }
}

.middleLayer {
  width: 0;
  height: 0;
  top: 0px;
  position: absolute;
  border-bottom: 50px solid;
  border-right: 200vw solid transparent;
  @media (min-width: $break-s) {
    border-bottom: 100px solid;
    border-right: 200vw solid transparent;
  }
}

.white {
  border-bottom-color: white;
}
.darkblue {
  border-bottom-color: $blue-grey-dark;
}
.blue {
  border-bottom-color: $blue-grey;
}
.grey {
  border-bottom-color: $grey-light;
}
.beige {
  border-bottom-color: $beige-grey;
}
</style>