<template>
  <header>
    <div class="container">
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
header .nav-list {
  display: flex;
  margin: 0;
  padding: 0 10px;
}
header .nav-list li {
  list-style-type: none;
}
.nav-list .router-link {
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px;
  border-right: 1px solid black;
}
.nav-list .router-link.router-link-active {
  text-decoration: underline;
  color: chocolate;
}
</style>
