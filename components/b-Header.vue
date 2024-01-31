<template>
  <header
    v-outside="
      () => {
        showMobile = false;
      }
    "
  >
    <div class="container header_container">
      <div class="header_logo-wrapper">
        <a href="/">
          <img src="/logo.webp" alt="logo of up" />
        </a>
      </div>
      <div>
        <button class="show-mobile-menu" @click="showMobile = !showMobile">
          <font-awesome-icon v-show="!showMobile" :icon="['fas', 'bars']" />
          <font-awesome-icon v-show="showMobile" :icon="['fas', 'xmark']" />
        </button>
        <nav class="header_nav" :class="showMobile && 'mobile-show'">
          <ul class="nav-list">
            <li v-for="(value, index) in links" :key="index">
              <RouterLink
                class="router-link"
                :to="value.href"
                @click="showMobile = !showMobile"
                >{{ value.text }}</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const { t } = useI18n({
  useScope: "local",
});
const links = ref([
  { href: "/", text: t("main_page") },
  { href: "/to-do-list", text: t("to_do_list") },
  { href: "/posts", text: t("posts") },
  { href: "/users", text: t("users") },
]);
const showMobile = ref(false);
const vOutside = {
  mounted: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
</script>

<style>
header {
  background-color: var(--content-bg-color);
  margin: 0;
  padding: 10px 0;
}
.header_container {
  display: flex;
  align-items: center;
}
.header_logo-wrapper {
  height: 30px;
  margin-right: 15px;
}
.header_logo-wrapper img {
  height: 100%;
}
header .nav-list {
  display: flex;
  margin: 0;
  padding: 0;
}
header .nav-list li {
  list-style-type: none;
}
.nav-list .router-link {
  display: block;
  text-decoration: none;
  color: var(--accent-color);
  padding: 10px;
  border-right: 1px solid var(--border-color);
}
.nav-list .router-link:hover {
  -moz-text-shadow: 0 0 10px var(--accent-color);
  -webkit-text-shadow: 0 0 10px var(--accent-color);
  text-shadow: 0 0 10px var(--accent-color);
}
.nav-list .router-link.router-link-active {
  text-decoration: underline double;
  color: var(--accent-color);
  text-decoration-thickness: 2px;
}
.show-mobile-menu {
  display: none;
}

@media (max-width: 720px) {
  .show-mobile-menu {
    display: block;
    border: none;
    background: none;
    font-size: 20px;
    color: var(--accent-color);
    cursor: pointer;
  }
  .header_nav {
    display: none;
  }
  .header_nav.mobile-show {
    background: var(--content-bg-color);
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 70px;
    width: 100vw;
    /* height: calc(100vh - 70px); */
    z-index: 5;
  }
  .header_nav .nav-list {
    flex-direction: column;
  }
}
</style>
<i18n lang="json">
{
  "en": {
    "main_page": "Main",
    "to_do_list": "MyToDoList",
    "posts": "Posts",
    "users": "Users"
  },
  "ru": {
    "main_page": "Главная",
    "to_do_list": "Список задач",
    "posts": "Публикации",
    "users": "Пользователи"
  }
}
</i18n>
