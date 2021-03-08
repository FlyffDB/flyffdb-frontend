<template>
  <div id="background" class="z-10">
    <div class="background-image"></div>
    <div class="background-gradient"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundLayer',
};
</script>

<style scoped>
.background-image,
.background-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  background: url('../assets/background.jpg') top center no-repeat;
  background-size: cover;
  opacity: .3;
}

.background-gradient {
  background: linear-gradient(to bottom, transparent, #262450);
}
</style>
