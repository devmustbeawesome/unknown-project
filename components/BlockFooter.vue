<template>
  <footer>
    <div class="container footer_container">
      <div class="footer_links-block">
        <div
          v-for="(linkGroup, index) in links"
          :key="index"
          class="footer_liks-column"
        >
          <span class="footer_links-header">{{ linkGroup.header }}</span>
          <div class="footer_links-group">
            <a
              v-for="(link, linkIndex) in linkGroup.links"
              :key="linkIndex"
              class="footer_link"
              target="_blank"
              :href="link.href"
            >
              {{ link.text }}
            </a>
          </div>
        </div>
      </div>
      <div class="footer_settings-block">
        <div>смена языка(в будущем)</div>
        <div>смена темы(в будущем)</div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const links = ref([
  {
    header: "Заголовок 1",
    links: [
      { href: "/", text: "main" },
      { href: "/to-do-list", text: "MyToDoList" },
    ],
  },
  {
    header: "Заголовок 2",
    links: [
      { href: "/", text: "main" },
      { href: "/to-do-list", text: "MyToDoList" },
    ],
  },
]);
</script>

<style scoped>
footer {
  background: rgb(22, 22, 22);
  color: #fff;
  padding: 15px 0;
  margin-top: 20px;
}
.footer_container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.footer_links-block {
  display: flex;
}
.footer_liks-column {
  margin-right: 20px;
}
.footer_links-group {
  display: flex;
  flex-direction: column;
}
.footer_links-header {
  color: white;
}
.footer_link {
  color: chocolate;
  text-decoration: none;
}
.footer_link:hover {
  text-decoration: none;
  -moz-text-shadow: 0 0 10px white;
  -webkit-text-shadow: 0 0 10px white;
  text-shadow: 0 0 10px white;
}
@media (max-width: 720px) {
  .footer_links-block {
    flex-direction: column;
    justify-content: space-around;
  }
  .footer_container {
    justify-content: space-around;
  }
}
</style>
