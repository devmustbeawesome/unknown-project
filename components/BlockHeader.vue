<template>
  <header>
    <div class="container header_container">
      <div class="header_logo-wrapper">
        <a href="/">
          <img src="/logo.webp" alt="logo of up" />
        </a>
      </div>
      <nav>
        <ul class="nav-list">
          <li v-for="(value, index) in links" :key="index">
            <RouterLink class="router-link" :to="value.href">{{
              value.text
            }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
const links = ref([
  { href: "/", text: t("main_page") },
  { href: "/to-do-list", text: t("to_do_list") },
]);
</script>

<style scoped>
header {
  background-color: var(--content-bg-color);
  margin: 0;
  padding: 10px;
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
  border-right: 1px solid var(--stroke-color);
}
.nav-list .router-link:hover {
  -moz-text-shadow: 0 0 10px var(--accent-color);
  -webkit-text-shadow: 0 0 10px var(--accent-color);
  text-shadow: 0 0 10px var(--accent-color);
}
.nav-list .router-link.router-link-active {
  text-decoration: underline double;
  color: var(--stroke-color);
  text-decoration-thickness: 2px;
}
</style>
<i18n lang="json">
{
  "en": {
    "main_page": "Main",
    "to_do_list": "MyToDoList"
  },
  "ru": {
    "main_page": "Главная",
    "to_do_list": "Список задач"
  }
}
</i18n>
