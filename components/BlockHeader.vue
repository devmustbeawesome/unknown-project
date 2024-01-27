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
const links = ref([
  { href: "/", text: "main" },
  { href: "/to-do-list", text: "MyToDoList" },
]);
</script>

<style scoped>
header {
  background-color: rgb(22, 22, 22);
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
  color: chocolate;
  padding: 10px;
  border-right: 1px solid black;
}
.nav-list .router-link:hover {
  -moz-text-shadow: 0 0 10px white;
  -webkit-text-shadow: 0 0 10px white;
  text-shadow: 0 0 10px white;
}
.nav-list .router-link.router-link-active {
  text-decoration: underline double;
  color: white;
  text-decoration-thickness: 2px;
}
</style>
