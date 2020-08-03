<!-- HTML -->
<template>
  <div>
    <div class="topContent" v-bind:class="[colorTop, direction]">
      <div class="bottomDiagonal transparent" v-bind:class="colorBottom"></div>
      <div class="bottomDiagonal solid" v-bind:class="colorBottom"></div>
    </div>
  </div>
</template>

<!-- SCRIPTS -->
<script>
export default {
  props: ["colorTop", "colorBottom", "direction"],
};
</script>

<!-- STYLING -->
<style lang='scss'>
//Blue Container
.topContent {
  height: 50px;
  position: relative;
  overflow: hidden;
  @media (min-width: $break-s) {
    height: 100px;
  }
}

.topContent.white {
  background-color: white;
}
.topContent.blue {
  background-color: $blue-grey;
}
.topContent.grey {
  background-color: $grey-light;
}
.topContent.beige {
  background-color: $beige-grey;
}

.bottomDiagonal {
  width: 0;
  height: 0;
  top: 0px;
  position: absolute;
  border-bottom: 50px solid;
  @media (min-width: $break-s) {
    border-bottom: 100px solid;
  }
}

.bottomDiagonal.white {
  border-bottom-color: white;
}

.bottomDiagonal.blue {
  border-bottom-color: $blue-grey;
}

.bottomDiagonal.grey {
  border-bottom-color: $grey-light;
}

.bottomDiagonal.beige {
  border-bottom-color: $beige-grey;
}

.left .solid {
  border-left: 100vw solid transparent;
  border-right: none;
}

.left .transparent {
  border-left: 150vw solid transparent;
  border-right: none;
  right: 0;
}

.solid {
  border-right: 100vw solid transparent;
  @media (min-width: $break-s) {
    border-right: 100vw solid transparent;
  }
}

.transparent {
  border-right: 200vw solid transparent;
  @media (min-width: $break-s) {
    border-right: 200vw solid transparent;
  }
  opacity: 0.5;
}
</style>