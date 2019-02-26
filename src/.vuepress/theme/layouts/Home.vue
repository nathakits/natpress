<template>
  <div class="theme-container">
    <img :src="$withBase('/pupil_invisible_01.jpg')">
    <h1>The platform for eye tracking and egocetric vision research</h1>
    <p>
      We believe in open source. We have formed our business around an open source model, and have grown with our community.
      We work projects that we find challenging and exciting. It is our goal with every aspect of our work to learn something new.
      We are excited about eye tracking. It enables us to work at the intersection of many fields and to interact with a diverse community.
      We are currently focusing our development efforts on Pupil – a mobile eye tracking headset and open source software framework – and on developing open source tools for virtual reality, augmented reality, and mixed reality.
    </p>

    <!-- markdown content -->
    <Content/>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
