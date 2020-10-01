<!-- HTML -->
<template>
  <div>
    <div class="topLayer" v-bind:class="[colorTop]">
      <div class="bottomLayer" v-bind:class="colorBottom"></div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ["colorTop", "colorBottom"],
};
</script>

<!-- STYLING -->
<style lang='scss' scoped>
//Blue Container
.topLayer {
  height: 40px;
  position: relative;
  overflow: hidden;
  @media (min-width: $break-m) {
    height: 75px;
  }
  @media (min-width: $break-l) {
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
  border-bottom: 40px solid;
  border-right: 100vw solid transparent;

  @media (min-width: $break-m) {
    border-bottom: 75px solid;
  }
  @media (min-width: $break-l) {
    border-bottom: 100px solid;
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