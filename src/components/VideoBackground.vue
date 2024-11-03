<template>
  <div class="video-container">
    <video id="v1" autoplay loop muted>
      <source src="../assets/background.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoBackground"
}
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 3;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 1;
  object-fit: cover;
  background-size: cover;
  display: block;
}

</style>