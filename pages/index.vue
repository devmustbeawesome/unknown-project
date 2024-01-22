<template>
  <div class="container">
    <h1>My to do list</h1>
    <blockMyToDoList> </blockMyToDoList>
  </div>
</template>

<script setup></script>
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
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
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
