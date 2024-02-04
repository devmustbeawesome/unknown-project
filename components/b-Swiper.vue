<template>
  <swiper-container :id="id" init="false">
    <swiper-slide v-for="index in Object.keys(slots)" :key="index" lazy="true">
      <slot :name="index" />
    </swiper-slide>
  </swiper-container>
</template>

<script setup lang="ts">
import { register, type SwiperContainer } from "swiper/element/bundle";
register();

defineProps({
  id: { type: String, required: true },
});
const slots = useSlots();
const swiperEl = ref();

// swiper parameters
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: true,
  scrollbar: true,
  on: {
    init() {},
  },
};

onMounted(() => {
  swiperEl.value = document.querySelector("swiper-container");
  Object.assign(swiperEl.value as SwiperContainer, swiperParams);
  swiperEl.value?.initialize();
});
</script>

<style scoped>
.swiper-slide {
  background-color: var(--content-bg-color);
  /* height: 20vh; */
}
.swiper {
  width: 100%;
}
</style>
