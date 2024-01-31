<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide>
      <picture>
        <source srcset="/swiper-d.webp" media="(min-width: 600px)" />
        <img src="/swiper-m.webp" alt="MDN" />
      </picture>
    </swiper-slide>
    <swiper-slide
      ><picture>
        <source srcset="/jane-d.webp" media="(min-width: 600px)" />
        <img src="/jane-m.webp" alt="jane" /> </picture
    ></swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
const modules = [Scrollbar, A11y, Autoplay];
</script>

<style scoped>
.swiper-slide {
  background-color: var(--content-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 20vh; */
}
.swiper {
  width: 100%;
}
</style>
