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
        <ChooseLang></ChooseLang>
        <ColorModeToggler></ColorModeToggler>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const { t } = useI18n({
  useScope: "local",
});
const links = computed(() => [
  {
    header: t("title1"),
    links: [
      { href: "/", text: t("main_page") },
      { href: "/to-do-list", text: t("to_do_list") },
    ],
  },
  {
    header: t("title2"),
    links: [
      { href: "/", text: t("main_page") },
      { href: "/to-do-list", text: t("to_do_list") },
    ],
  },
]);
</script>

<style scoped>
footer {
  background: var(--content-bg-color);
  color: var(--text-color);
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
  color: var(--text-color);
}
.footer_link {
  color: var(--accent-color);
  text-decoration: none;
}
.footer_link:hover {
  text-decoration: none;
  -moz-text-shadow: 0 0 10px var(--accent-color);
  -webkit-text-shadow: 0 0 10px var(--accent-color);
  text-shadow: 0 0 10px var(--accent-color);
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
<i18n lang="json">
{
  "en": {
    "title1": "Some title",
    "title2": "Other title",
    "main_page": "Main",
    "to_do_list": "MyToDoList"
  },
  "ru": {
    "title1": "Какой-то заголовок",
    "title2": "Другой заголовок",
    "main_page": "Главная",
    "to_do_list": "Список задач"
  }
}
</i18n>
