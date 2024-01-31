<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
  >
    <swiper-slide v-for="index in Object.keys(slots)" :key="index">
      <slot :name="index" />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
const slots = useSlots();
const controlledSwiper = ref(null);
const onSwiper = (swiper: any) => {
  controlledSwiper.value = swiper;
};

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
.swiper-slide picture {
  width: 100%;
}
.swiper {
  width: 100%;
}
</style>
