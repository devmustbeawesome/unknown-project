<template>
  <BlockHeader />
  <main>
    <slot />
  </main>
  <BlockFooter />
</template>
<style>
body {
  /* background: radial-gradient(
    circle,
    rgba(63, 5, 138, 1) 35%,
    rgba(26, 5, 124, 1) 100%
  ); */
  background-color: #1a202c;
  margin: 0;
  color: aliceblue;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.42857143;
}
#__nuxt {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
.container {
  width: 100vw;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  /* .container {
    width: 750px;
  } */
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
  background-color: chocolate;
}
</style>
