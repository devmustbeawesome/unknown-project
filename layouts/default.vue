<template>
  <AppHeader />
  <main>
    <slot />
  </main>
  <AppFooter />
  <NotificationsList />
</template>
<style>
html {
  margin-right: calc(-1 * (100vw - 100%));
  overflow-x: hidden;
}
body {
  background-color: var(--main-bg-color);
  margin: 0;
  color: var(--text-color);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.42857143;
}
.light-mode body {
  --main-bg-color: #dce1e6;
  --content-bg-color: #fff;
  --text-color: black;
  --accent-color: #a970ff;
  --stroke-color: white;
  --border-color: grey;
}

.dark-mode body {
  --main-bg-color: #1a202c;
  --content-bg-color: rgb(22, 22, 22);
  --text-color: white;
  --accent-color: #a970ff;
  --stroke-color: white;
  --border-color: grey;
}
.sepia-mode body {
  --main-bg-color: #f1e7d0;
  --content-bg-color: #433422;
  --text-color: #9e641d;
  --accent-color: chocolate;
  --stroke-color: white;
  --border-color: grey;
}
#__nuxt {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
.container {
  width: calc(100vw - 20px);
  padding: 10px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
  /* main {
    display: flex;
  } */
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
button {
  background-color: var(--accent-color);
  color: var(--stroke-color);
}
</style>
